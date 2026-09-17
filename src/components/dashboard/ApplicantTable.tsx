'use client';

import React from 'react';
import { ApplicantAssessment } from '@/types/assessment';
import { Phone, Eye, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface ApplicantTableProps {
  data: ApplicantAssessment[];
  onSelectApplicant: (applicant: ApplicantAssessment) => void;
}

export const ApplicantTable: React.FC<ApplicantTableProps> = ({
  data,
  onSelectApplicant,
}) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Reguler':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Jalur Prestasi':
        return 'bg-teal-100 text-teal-800 border-teal-200 font-bold';
      case 'Perlu Observasi Inklusi':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Butuh Remedial':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getNpsBadge = (score: number) => {
    if (score >= 9) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (score >= 7) return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-rose-50 text-rose-700 border-rose-200';
  };

  const cleanPhone = (phone: string) => {
    const cleaned = phone.replace(/[^0-9]/g, '');
    return cleaned.startsWith('0') ? '62' + cleaned.slice(1) : cleaned;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-base">
            Daftar Verifikasi Pendaftar & Asesmen Masuk
          </h3>
          <p className="text-xs text-slate-500">
            Klik baris untuk membuka lembar detail wawancara dan mengubah status penerimaan
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
          {data.length} Data
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
              <th className="p-3.5 pl-5">Token ID</th>
              <th className="p-3.5">Tanggal</th>
              <th className="p-3.5">Calon Siswa</th>
              <th className="p-3.5">Jenjang</th>
              <th className="p-3.5">Kontak Wali</th>
              <th className="p-3.5">Sumber Info</th>
              <th className="p-3.5">NPS</th>
              <th className="p-3.5">Status SEN</th>
              <th className="p-3.5">Verifikasi</th>
              <th className="p-3.5 pr-5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={10} className="p-8 text-center text-slate-400">
                  Tidak ditemukan pendaftar yang sesuai dengan filter yang dipilih.
                </td>
              </tr>
            ) : (
              data.map((item) => {
                const waNumber = cleanPhone(item.parents.whatsappFather || item.parents.whatsappMother);
                const waUrl = `https://wa.me/${waNumber}`;

                return (
                  <tr
                    key={item.id}
                    onClick={() => onSelectApplicant(item)}
                    className="hover:bg-teal-50/40 cursor-pointer transition-colors"
                  >
                    <td className="p-3.5 pl-5 font-mono font-bold text-teal-800 text-xs">
                      {item.id}
                    </td>

                    <td className="p-3.5 text-slate-500 whitespace-nowrap text-xs">
                      {new Date(item.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>

                    <td className="p-3.5">
                      <div className="font-bold text-slate-900 leading-snug">
                        {item.student.fullName}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {item.student.gender === 'L' ? 'L' : 'P'} &bull; {item.student.targetClass}
                      </div>
                    </td>

                    <td className="p-3.5 whitespace-nowrap">
                      <span className="font-bold text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                        {item.unit}
                      </span>
                    </td>

                    <td className="p-3.5 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
                        title="Klik untuk WhatsApp"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        {item.parents.whatsappFather || item.parents.whatsappMother}
                      </a>
                      <div className="text-[11px] text-slate-400">
                        {item.parents.fatherName}
                      </div>
                    </td>

                    <td className="p-3.5 text-xs text-slate-600 max-w-[120px] truncate" title={item.discoveryChannel.join(', ')}>
                      {item.discoveryChannel[0]}
                      {item.discoveryChannel.length > 1 && (
                        <span className="text-[10px] text-slate-400 ml-1">+{item.discoveryChannel.length - 1}</span>
                      )}
                    </td>

                    <td className="p-3.5 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${getNpsBadge(item.npsScore)}`}>
                        {item.npsScore}/10
                      </span>
                    </td>

                    <td className="p-3.5 whitespace-nowrap">
                      {item.specialEducationNeeds.needsSpecialSupport === 'requires_iep_shadow' ? (
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1 w-fit">
                          <AlertTriangle className="w-3 h-3" />
                          IEP / Shadow
                        </span>
                      ) : item.specialEducationNeeds.needsSpecialSupport === 'needs_observation' ? (
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1 w-fit">
                          <Clock className="w-3 h-3" />
                          Observasi
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">Reguler</span>
                      )}
                    </td>

                    <td className="p-3.5 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusBadge(item.internalVerification.status)}`}>
                        {item.internalVerification.status}
                      </span>
                    </td>

                    <td className="p-3.5 pr-5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectApplicant(item);
                        }}
                        className="p-1.5 rounded-lg text-teal-700 hover:bg-teal-100 transition inline-flex items-center gap-1 font-semibold text-xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Detail
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
