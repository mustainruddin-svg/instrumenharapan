'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ApplicantAssessment } from '@/types/assessment';
import { getStoredAssessments, resetToInitialData } from '@/lib/storage';
import { exportToCSV } from '@/lib/export-utils';
import { TopFilterBar } from '@/components/dashboard/TopFilterBar';
import { ExecutiveMetricCards } from '@/components/dashboard/ExecutiveMetricCards';
import { AnalyticsCharts } from '@/components/dashboard/AnalyticsCharts';
import { ApplicantTable } from '@/components/dashboard/ApplicantTable';
import { VerificationDrawer } from '@/components/dashboard/VerificationDrawer';
import { AuditSummaryModal } from '@/components/dashboard/AuditSummaryModal';
import { ArrowLeft, RefreshCw, Sparkles, Building2, ShieldCheck, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  const [assessments, setAssessments] = useState<ApplicantAssessment[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<ApplicantAssessment | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Filters State
  const [filters, setFilters] = useState({
    unit: 'ALL',
    radius: 'ALL',
    status: 'ALL',
    search: '',
  });

  const loadData = () => {
    const data = getStoredAssessments();
    setAssessments(data);
  };

  useEffect(() => {
    loadData();

    // Listen for custom data change events (e.g. when form is submitted in another tab or drawer saves)
    const handleDataChanged = () => loadData();
    window.addEventListener('spmb_data_changed', handleDataChanged);
    return () => window.removeEventListener('spmb_data_changed', handleDataChanged);
  }, []);

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      unit: 'ALL',
      radius: 'ALL',
      status: 'ALL',
      search: '',
    });
  };

  // Filtered dataset
  const filteredData = useMemo(() => {
    return assessments.filter((item) => {
      // Unit filter
      if (filters.unit !== 'ALL' && item.unit !== filters.unit) {
        return false;
      }
      // Radius filter
      if (filters.radius !== 'ALL' && item.parents.distanceRadius !== filters.radius) {
        return false;
      }
      // Status filter
      if (filters.status !== 'ALL' && item.internalVerification.status !== filters.status) {
        return false;
      }
      // Search filter
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase();
        const matchName = item.student.fullName.toLowerCase().includes(query);
        const matchFather = item.parents.fatherName.toLowerCase().includes(query);
        const matchMother = item.parents.motherName.toLowerCase().includes(query);
        const matchToken = item.id.toLowerCase().includes(query);
        const matchSchool = item.student.prevSchool.toLowerCase().includes(query);
        return matchName || matchFather || matchMother || matchToken || matchSchool;
      }
      return true;
    });
  }, [assessments, filters]);

  const handleOpenDetail = (applicant: ApplicantAssessment) => {
    setSelectedApplicant(applicant);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-square.png"
                alt="Logo SIT Ar-Rahmah"
                width={44}
                height={44}
                className="rounded-xl shadow-xs"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                    EXECUTIVE SPMB
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">ISO 21001:2018 EOMS</span>
                </div>
                <h1 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                  Dashboard Mutu & Penerimaan Siswa Baru
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/form"
              className="px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Buka Form Publik
            </Link>

            <button
              type="button"
              onClick={() => {
                if (confirm('Kembalikan data ke 18 sampel awal Makassar?')) {
                  resetToInitialData();
                }
              }}
              title="Reset ke Sampel Data Awal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 transition"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Filter Bar */}
        <TopFilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
          onExportCSV={() => exportToCSV(filteredData)}
          onPrintAudit={() => setIsAuditModalOpen(true)}
          totalFiltered={filteredData.length}
          totalAll={assessments.length}
        />

        {/* Executive Metric Cards */}
        <ExecutiveMetricCards data={filteredData} />

        {/* Visual Analytics Charts */}
        <AnalyticsCharts data={filteredData} />

        {/* CRM Applicant Table */}
        <ApplicantTable
          data={filteredData}
          onSelectApplicant={handleOpenDetail}
        />
      </main>

      {/* Verification Drawer */}
      <VerificationDrawer
        assessment={selectedApplicant}
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedApplicant(null);
        }}
        onSaved={loadData}
      />

      {/* Audit Summary Modal */}
      <AuditSummaryModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        data={filteredData}
      />

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">
          Sistem Manajemen Organisasi Pendidikan (EOMS) &bull; Yayasan Ar-Rahmah Sulawesi
        </p>
        <p className="mt-1">
          Klausul ISO 21001:2018 (4.2 Kebutuhan Pihak Berkepentingan & 9.1 Evaluasi Kepuasan) &bull; Makassar, Sulawesi Selatan
        </p>
      </footer>
    </div>
  );
}
