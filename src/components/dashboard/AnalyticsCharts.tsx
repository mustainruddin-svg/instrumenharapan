'use client';

import React from 'react';
import { ApplicantAssessment } from '@/types/assessment';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  Legend,
} from 'recharts';

interface AnalyticsChartsProps {
  data: ApplicantAssessment[];
}

export const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({ data }) => {
  // 1. Radar Chart: 4 Main Dimensions of ISO 21001 Expectations
  let dimKarakter = 0;
  let dimPedagogi = 0;
  let dimSafety = 0;
  let dimLayanan = 0;

  data.forEach((d) => {
    const e = d.generalExpectations;
    dimKarakter += (e.islamicHabits + e.adabAndEtiquette + e.tahfidzQuality) / 3;
    dimPedagogi += (e.deepLearningApproach + e.leadershipSkills + e.digitalLearningTech) / 3;
    dimSafety += (e.zeroBullyingSafeEnv + e.cleanliness5R + e.physicalSecurityCCTV) / 3;
    dimLayanan += (e.digitalAdminLMS + e.parentCommunication + e.financialTransparency) / 3;
  });

  const count = data.length || 1;
  const radarData = [
    {
      subject: 'Karakter & RAHMAH',
      score: Number((dimKarakter / count).toFixed(2)),
      fullMark: 5,
    },
    {
      subject: 'Deep Learning & Pedagogi',
      score: Number((dimPedagogi / count).toFixed(2)),
      fullMark: 5,
    },
    {
      subject: 'Safe School & Zero Bullying',
      score: Number((dimSafety / count).toFixed(2)),
      fullMark: 5,
    },
    {
      subject: 'Layanan Digital & Komunikasi',
      score: Number((dimLayanan / count).toFixed(2)),
      fullMark: 5,
    },
  ];

  // 2. Bar Chart: Primary Reasons breakdown
  const reasonCounts: Record<string, number> = {};
  data.forEach((d) => {
    d.primaryReasons.forEach((r) => {
      reasonCounts[r] = (reasonCounts[r] || 0) + 1;
    });
  });

  const barData = Object.entries(reasonCounts)
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total);

  // 3. Donut Chart: Acquisition Channel
  const channelCounts: Record<string, number> = {
    'Referral Alumni/Teman': 0,
    'Instagram/Medsos': 0,
    'Website/Google': 0,
    'Brosur & Spanduk': 0,
    'Event / Edufair': 0,
  };

  data.forEach((d) => {
    d.discoveryChannel.forEach((ch) => {
      if (ch.includes('Referral') || ch.includes('Alumni')) channelCounts['Referral Alumni/Teman'] += 1;
      else if (ch.includes('Instagram') || ch.includes('Medsos')) channelCounts['Instagram/Medsos'] += 1;
      else if (ch.includes('Website') || ch.includes('Google')) channelCounts['Website/Google'] += 1;
      else if (ch.includes('Brosur') || ch.includes('Spanduk')) channelCounts['Brosur & Spanduk'] += 1;
      else channelCounts['Event / Edufair'] += 1;
    });
  });

  const pieData = Object.entries(channelCounts)
    .filter(([_, value]) => value > 0)
    .map(([name, value]) => ({ name, value }));

  const PIE_COLORS = ['#0d5c58', '#d97706', '#0284c7', '#10b981', '#6366f1'];

  // 4. Geographic Proximity Chart: Radius distribution
  const radiusCounts = {
    '<3km': data.filter((d) => d.parents.distanceRadius === '<3km').length,
    '3-5km': data.filter((d) => d.parents.distanceRadius === '3-5km').length,
    '5-10km': data.filter((d) => d.parents.distanceRadius === '5-10km').length,
    '>10km': data.filter((d) => d.parents.distanceRadius === '>10km').length,
  };

  const proximityData = [
    { name: '< 3 km', count: radiusCounts['<3km'], coverage: 'Zonasi Ring 1' },
    { name: '3-5 km', count: radiusCounts['3-5km'], coverage: 'Zonasi Inti' },
    { name: '5-10 km', count: radiusCounts['5-10km'], coverage: 'Zonasi Jangkauan' },
    { name: '> 10 km', count: radiusCounts['>10km'], coverage: 'Luar Zonasi/Maros' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 1. Radar Chart: Ekspektasi Mutu ISO */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Peta Ekspektasi Mutu ISO 21001:2018
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800">
              Skala 1.0 - 5.0
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Rata-rata ekspektasi orang tua terhadap 4 pilar utama penjaminan mutu pendidikan
          </p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }} />
              <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
              <Radar
                name="Indeks Ekspektasi"
                dataKey="score"
                stroke="#0d5c58"
                fill="#0d5c58"
                fillOpacity={0.45}
              />
              <Tooltip
                formatter={(val) => [`${val} / 5.00`, 'Rata-rata Skor']}
                contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Bar Chart: Alasan Utama Memilih */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Alasan Utama Memilih SIT Ar-Rahmah
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800">
              Maks 3 Pilihan/Wali
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Faktor diferensiasi yang menjadi pertimbangan utama keluarga pendaftar
          </p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={barData} margin={{ left: 20, right: 20, top: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: '#475569', fontSize: 11 }}
                width={130}
              />
              <Tooltip
                formatter={(val) => [`${val} Pemilih`, 'Frekuensi']}
                contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
              />
              <Bar dataKey="total" radius={[0, 6, 6, 0]}>
                {barData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? '#0d5c58' : index === 1 ? '#0f766e' : '#d97706'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Donut Chart: Saluran Informasi */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Saluran Akuisisi & Informasi
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-800">
              Multi-Channel
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Komposisi sumber informasi awal yang didapatkan calon orang tua
          </p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`pie-cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(val, name) => [`${val} Responden`, name]}
                contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4. Proximity Bar Chart */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Sebaran Geografis Radius Zonasi
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
              Kampus Paccerakkang
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Jarak domisili tempat tinggal pendaftar menuju kampus utama SIT Ar-Rahmah
          </p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={proximityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 11 }} />
              <YAxis allowDecimals={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
              <Tooltip
                formatter={(val, _, props) => [`${val} Siswa (${props.payload.coverage})`, 'Jumlah']}
                contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {proximityData.map((entry, index) => (
                  <Cell
                    key={`prox-cell-${index}`}
                    fill={entry.name === '< 3 km' ? '#0d5c58' : entry.name === '3-5 km' ? '#147570' : '#f59e0b'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
