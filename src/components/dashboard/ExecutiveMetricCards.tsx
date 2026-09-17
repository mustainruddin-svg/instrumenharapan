'use client';

import React from 'react';
import { ApplicantAssessment } from '@/types/assessment';
import { Users, TrendingUp, Award, HeartPulse, Star, Target } from 'lucide-react';

interface MetricCardsProps {
  data: ApplicantAssessment[];
}

export const ExecutiveMetricCards: React.FC<MetricCardsProps> = ({ data }) => {
  const totalApplicants = data.length;

  // Breakdown per unit
  const paudCount = data.filter((d) => d.unit === 'PAUD').length;
  const sditCount = data.filter((d) => d.unit === 'SDIT').length;
  const smpitCount = data.filter((d) => d.unit === 'SMPIT').length;
  const smaitCount = data.filter((d) => d.unit === 'SMAIT').length;

  // Referral Ratio (Renstra 2030 Benchmark Target: >= 70%)
  const referralCount = data.filter((d) =>
    d.discoveryChannel.some((ch) => ch.includes('Referral') || ch.includes('Alumni'))
  ).length;
  const referralPercentage = totalApplicants > 0 ? Math.round((referralCount / totalApplicants) * 100) : 0;

  // NPS Calculation: % Promoters (9-10) - % Detractors (0-6)
  const promoters = data.filter((d) => d.npsScore >= 9).length;
  const detractors = data.filter((d) => d.npsScore <= 6).length;
  const npsScore = totalApplicants > 0
    ? Math.round(((promoters - detractors) / totalApplicants) * 100)
    : 0;

  // SEN / Inklusi Alerts
  const senAlerts = data.filter(
    (d) => d.specialEducationNeeds.needsSpecialSupport !== 'regular'
  ).length;

  // Average Quality Expectation Index (out of 5.0)
  let totalExpectationPoints = 0;
  let totalCriteriaCount = 0;
  data.forEach((d) => {
    Object.values(d.generalExpectations).forEach((score) => {
      totalExpectationPoints += score;
      totalCriteriaCount += 1;
    });
  });
  const avgExpectationIndex = totalCriteriaCount > 0
    ? (totalExpectationPoints / totalCriteriaCount).toFixed(2)
    : '0.00';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* 1. Total Pendaftar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Total Pendaftar</span>
            <div className="p-1.5 bg-teal-100 text-teal-800 rounded-lg">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 mt-1">
            {totalApplicants} <span className="text-xs font-normal text-slate-400">siswa</span>
          </div>
        </div>

        {/* Breakdown bar */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="text-[11px] text-slate-500 flex items-center justify-between mb-1.5">
            <span>PAUD: <strong>{paudCount}</strong></span>
            <span>SD: <strong>{sditCount}</strong></span>
            <span>SMP: <strong>{smpitCount}</strong></span>
            <span>SMA: <strong>{smaitCount}</strong></span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full flex overflow-hidden">
            <div style={{ width: `${(paudCount / (totalApplicants || 1)) * 100}%` }} className="bg-amber-500" />
            <div style={{ width: `${(sditCount / (totalApplicants || 1)) * 100}%` }} className="bg-teal-600" />
            <div style={{ width: `${(smpitCount / (totalApplicants || 1)) * 100}%` }} className="bg-cyan-600" />
            <div style={{ width: `${(smaitCount / (totalApplicants || 1)) * 100}%` }} className="bg-emerald-800" />
          </div>
        </div>
      </div>

      {/* 2. Referral Ratio */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Rasio Referral</span>
            <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 mt-1 flex items-baseline gap-2">
            {referralPercentage}%
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
              referralPercentage >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              {referralPercentage >= 70 ? 'Target Tercapai' : 'Di Bawah Target'}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Target Renstra 2030:</span>
          <span className="font-bold text-teal-800">&ge; 70.0%</span>
        </div>
      </div>

      {/* 3. Net Promoter Score */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Net Promoter Score</span>
            <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-emerald-700 mt-1 flex items-baseline gap-1">
            +{npsScore}
            <span className="text-xs font-semibold text-slate-500">NPS pts</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Benchmark Kepuasan:</span>
          <span className="font-bold text-emerald-700">&gt; +65 (Kelas Dunia)</span>
        </div>
      </div>

      {/* 4. Inclusion / SEN Alert */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Inklusi & SEN Alert</span>
            <div className="p-1.5 bg-rose-100 text-rose-800 rounded-lg">
              <HeartPulse className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 mt-1 flex items-baseline gap-2">
            {senAlerts}
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
              Perlu Asesmen
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Rasio Inklusi Sekolah:</span>
          <span className="font-bold text-slate-800">
            {totalApplicants > 0 ? ((senAlerts / totalApplicants) * 100).toFixed(1) : 0}%
          </span>
        </div>
      </div>

      {/* 5. Quality Expectation Index */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Indeks Mutu EOMS</span>
            <div className="p-1.5 bg-teal-100 text-teal-800 rounded-lg">
              <Star className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-teal-800 mt-1 flex items-baseline gap-1">
            {avgExpectationIndex}
            <span className="text-xs font-normal text-slate-400">/ 5.0</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Klausul ISO 21001:</span>
          <span className="font-bold text-teal-800">Clause 4.2 & 9.1</span>
        </div>
      </div>
    </div>
  );
};
