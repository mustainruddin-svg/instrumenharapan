'use client';

import React from 'react';
import { ApplicantAssessment } from '@/types/assessment';
import { X, Printer, ShieldCheck, Building } from 'lucide-react';
import Image from 'next/image';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ApplicantAssessment[];
}

export const AuditSummaryModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  const total = data.length;
  const promoters = data.filter((d) => d.npsScore >= 9).length;
  const passives = data.filter((d) => d.npsScore >= 7 && d.npsScore <= 8).length;
  const detractors = data.filter((d) => d.npsScore <= 6).length;
  const npsScore = total > 0 ? Math.round(((promoters - detractors) / total) * 100) : 0;

  const referralCount = data.filter((d) =>
    d.discoveryChannel.some((ch) => ch.includes('Referral') || ch.includes('Alumni'))
  ).length;
  const referralPct = total > 0 ? ((referralCount / total) * 100).toFixed(1) : '0';

  const senCount = data.filter((d) => d.specialEducationNeeds.needsSpecialSupport !== 'regular').length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header toolbar */}
        <div className="no-print sticky top-0 bg-white/95 backdrop-blur-xs p-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-teal-700" />
            Dokumen Kendali Mutu ISO 21001:2018 (EOMS)
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-teal-800 transition"
            >
              <Printer className="w-4 h-4" />
              Cetak Dokumen Resmi
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Document */}
        <div className="p-8 sm:p-10 space-y-6 text-slate-800 font-sans" id="audit-sheet">
          {/* Kop Surat Resmi */}
          <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-square.png"
                alt="Logo SIT Ar-Rahmah"
                width={68}
                height={68}
                className="rounded-xl"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  YAYASAN AR-RAHMAH SULAWESI
                </h1>
                <h2 className="text-sm sm:text-base font-bold text-teal-800">
                  SEKOLAH ISLAM TERPADU (SIT) AR-RAHMAH MAKASSAR
                </h2>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Kampus Terpadu: Jl. Paccerakkang, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan
                </p>
              </div>
            </div>
            <div className="text-right border-l pl-4 border-slate-200">
              <span className="text-[10px] font-mono block text-slate-400">KODE DOKUMEN:</span>
              <span className="text-xs font-mono font-bold text-slate-900">EOMS-F-4.2-01</span>
              <span className="text-[10px] block text-emerald-700 font-bold mt-1">ISO 21001:2018 TERAKREDITASI</span>
            </div>
          </div>

          {/* Judul Laporan */}
          <div className="text-center space-y-1 py-2">
            <h2 className="text-base sm:text-lg font-black uppercase text-slate-900 tracking-wide">
              LAPORAN AUDIT PENETAPAN KEBUTUHAN PEMANGKU KEPENTINGAN & INDEKS KEPUASAN SPMB
            </h2>
            <p className="text-xs text-slate-600">
              Klausul 4.2 (Kebutuhan & Harapan Pihak Terkait) & Klausul 9.1.2 (Kepuasan Penerima Manfaat)
            </p>
          </div>

          {/* Rangkuman Eksekutif */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="text-[11px] text-slate-500 font-semibold uppercase">Total Sampel Asesmen</div>
              <div className="text-xl font-black text-slate-900 mt-1">{total} Orang Tua</div>
            </div>
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="text-[11px] text-slate-500 font-semibold uppercase">Net Promoter Score</div>
              <div className="text-xl font-black text-teal-800 mt-1">+{npsScore} pts</div>
            </div>
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="text-[11px] text-slate-500 font-semibold uppercase">Rasio Referral Alumni</div>
              <div className="text-xl font-black text-amber-700 mt-1">{referralPct}%</div>
            </div>
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="text-[11px] text-slate-500 font-semibold uppercase">Kebutuhan Inklusi (SEN)</div>
              <div className="text-xl font-black text-rose-700 mt-1">{senCount} Kasus</div>
            </div>
          </div>

          {/* Klausul Detail Audit */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-slate-900 border-b pb-1 text-sm">
              1. Analisis Kebutuhan & Ekspektasi Pihak Berkepentingan (Klausul 4.2)
            </h3>
            <p className="text-slate-600 leading-relaxed text-xs">
              Berdasarkan hasil pengisian instrumen asesmen digital pra-masuk, kebutuhan prioritas orang tua calon murid mencakup:
              penjaminan ketuntasan tahfidz Al-Qur&apos;an (Metode Wafa bersanad), ekosistem pembelajaran aman berbudaya Zero Bullying,
              pendekatan deep learning yang eksploratif, serta transparansi komunikasi digital melalui aplikasi sistem informasi sekolah.
            </p>

            <h3 className="font-bold text-slate-900 border-b pb-1 text-sm pt-2">
              2. Rekomendasi Tindak Lanjut Satuan Pendidikan (Klausul 9.1 & 10.2)
            </h3>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              <li>
                <strong>Penguatan Layanan Inklusi:</strong> Segera melaksanakan observasi psikologis lanjutan bagi {senCount} calon siswa terindikasi Special Educational Needs (SEN) sebelum penempatan kelas.
              </li>
              <li>
                <strong>Fasilitas Antar-Jemput:</strong> Mengoptimalkan rute jemputan untuk wilayah radius 5-10 km (Tamalanrea, Sudiang, Maros) guna merespons permintaan orang tua bekerja.
              </li>
              <li>
                <strong>Pertahankan Mutu RAHMAH:</strong> Menjaga NPS di atas benchmark +65 melalui pembinaan adab asatidz dan respons cepat komunikasi walas.
              </li>
            </ul>
          </div>

          {/* Lembar Pengesahan / Tanda Tangan */}
          <div className="pt-8 grid grid-cols-2 text-center text-xs text-slate-800">
            <div className="space-y-16">
              <p>Makassar, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}<br />Ketua Panitia SPMB SIT Ar-Rahmah,</p>
              <div>
                <p className="font-bold underline">Hamsinasa, S.Pd.I., M.A., Gr.</p>
                <p className="text-[11px] text-slate-500">NIPY. 201201088</p>
              </div>
            </div>

            <div className="space-y-16">
              <p>Mengetahui,<br />Direktur Pendidikan Yayasan Ar-Rahmah Sulawesi,</p>
              <div>
                <p className="font-bold underline">Jusria Kadir, S.Sos., M.Pd.</p>
                <p className="text-[11px] text-slate-500">NIPY. 200803021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
