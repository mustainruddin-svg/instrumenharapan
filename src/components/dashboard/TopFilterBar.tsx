'use client';

import React from 'react';
import { EducationalUnit, DistanceRadius, VerificationStatus } from '@/types/assessment';
import { Search, Filter, RotateCcw, Download, Printer } from 'lucide-react';

interface FilterState {
  unit: string;
  radius: string;
  status: string;
  search: string;
}

interface TopFilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onReset: () => void;
  onExportCSV: () => void;
  onPrintAudit: () => void;
  totalFiltered: number;
  totalAll: number;
}

export const TopFilterBar: React.FC<TopFilterBarProps> = ({
  filters,
  onFilterChange,
  onReset,
  onExportCSV,
  onPrintAudit,
  totalFiltered,
  totalAll,
}) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3.5">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        {/* Search Box */}
        <div className="relative w-full lg:w-96">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama calon siswa, orang tua, atau token ID..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            className="w-full text-xs sm:text-sm pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-slate-50/50"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
          <button
            type="button"
            onClick={onPrintAudit}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200 shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            Cetak Lembar Audit ISO
          </button>

          <button
            type="button"
            onClick={onExportCSV}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white transition flex items-center gap-1.5 shadow-xs shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV / Excel
          </button>

          <button
            type="button"
            onClick={onReset}
            title="Reset semua filter"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition border border-slate-200 shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Selectors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100 text-xs">
        {/* Unit Filter */}
        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-medium shrink-0">Jenjang:</span>
          <select
            value={filters.unit}
            onChange={(e) => onFilterChange({ unit: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="ALL">Semua Jenjang (PAUD - SMAIT)</option>
            <option value="PAUD">PAUD & TKIT</option>
            <option value="SDIT">SDIT Ar-Rahmah</option>
            <option value="SMPIT">SMPIT Ar-Rahmah</option>
            <option value="SMAIT">SMAIT Ar-Rahmah</option>
          </select>
        </div>

        {/* Radius Filter */}
        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-medium shrink-0">Radius:</span>
          <select
            value={filters.radius}
            onChange={(e) => onFilterChange({ radius: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="ALL">Semua Radius Zonasi</option>
            <option value="<3km">&lt; 3 km (Paccerakkang/Daya)</option>
            <option value="3-5km">3 - 5 km (Tamalanrea/BTP)</option>
            <option value="5-10km">5 - 10 km (Panakkukang/Sudiang)</option>
            <option value=">10km">&gt; 10 km (Luar Kota/Maros)</option>
          </select>
        </div>

        {/* Verification Status Filter */}
        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-medium shrink-0">Status:</span>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ status: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="ALL">Semua Status Verifikasi</option>
            <option value="Pending">Pending (Belum Diverifikasi)</option>
            <option value="Reguler">Reguler</option>
            <option value="Jalur Prestasi">Jalur Prestasi</option>
            <option value="Perlu Observasi Inklusi">Perlu Observasi Inklusi</option>
            <option value="Butuh Remedial">Butuh Remedial</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
        <span>
          Menampilkan <strong>{totalFiltered}</strong> dari <strong>{totalAll}</strong> total pendaftar
        </span>
        {(filters.unit !== 'ALL' || filters.radius !== 'ALL' || filters.status !== 'ALL' || filters.search) && (
          <span className="text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded">
            Filter aktif diterapkan
          </span>
        )}
      </div>
    </div>
  );
};
