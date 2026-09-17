'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ApplicantAssessment } from '@/types/assessment';
import { CheckCircle, Calendar, MessageCircle, ArrowRight, Printer, Share2 } from 'lucide-react';
import Link from 'next/link';

interface SuccessProps {
  assessment: ApplicantAssessment;
  onReset: () => void;
}

export const SubmissionSuccess: React.FC<SuccessProps> = ({ assessment, onReset }) => {
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0d5c58', '#d97706', '#10b981', '#f59e0b'],
      });
    } catch {
      // safe fallback
    }
  }, []);

  // Format estimasi verifikasi (3 hari kerja ke depan)
  const estDate = new Date();
  estDate.setDate(estDate.getDate() + 3);
  const formattedEstDate = estDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const waMessage = encodeURIComponent(
    `Assalamu'alaikum Admin SPMB SIT Ar-Rahmah Makassar,\n\nSaya telah mengisi kuesioner asesmen ekspektasi & pendaftaran SPMB:\n- Token ID: ${assessment.id}\n- Calon Siswa: ${assessment.student.fullName}\n- Jenjang: ${assessment.unit} (${assessment.student.targetClass})\n- Orang Tua: ${assessment.parents.fatherName} / ${assessment.parents.motherName}\n\nMohon konfirmasi dan informasi tahapan observasi/wawancara selanjutnya. Terima kasih.\nWassalamu'alaikum.`
  );
  const waUrl = `https://wa.me/628124119832?text=${waMessage}`;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 animate-fadeIn text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-teal-100 border-4 border-teal-200 flex items-center justify-center text-teal-700 shadow-lg mb-6">
        <CheckCircle className="w-10 h-10" />
      </div>

      <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 uppercase tracking-wider">
        Pendaftaran & Asesmen Terverifikasi Masuk
      </div>

      <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
        Alhamdulillah, Formulir Asesmen Berhasil Diterima!
      </h1>
      <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
        Terima kasih atas kepercayaan Ayahanda & Ibunda memilih <strong className="text-teal-900">SIT Ar-Rahmah Makassar</strong>. Data ekspektasi mutu pendidikan ananda telah tersimpan dan siap diproses oleh Panitia SPMB.
      </p>

      {/* Card Token & Rincian */}
      <div className="bg-white rounded-2xl border-2 border-teal-700/30 p-6 shadow-md text-left space-y-4 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-teal-700 text-amber-300 px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
          ISO 21001:2018 EOMS
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nomor Token Registrasi SPMB:</span>
          <div className="text-2xl sm:text-3xl font-black text-teal-800 tracking-wide font-mono">
            {assessment.id}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs sm:text-sm">
          <div>
            <span className="text-slate-400 block text-xs">Calon Siswa:</span>
            <span className="font-bold text-slate-800">{assessment.student.fullName}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs">Jenjang / Target Kelas:</span>
            <span className="font-bold text-teal-800">{assessment.unit} &bull; {assessment.student.targetClass}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs">Nama Orang Tua:</span>
            <span className="font-bold text-slate-800">{assessment.parents.fatherName}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs">No. WhatsApp Wali:</span>
            <span className="font-bold text-slate-800">{assessment.parents.whatsappFather}</span>
          </div>
        </div>

        <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <Calendar className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Estimasi Jadwal Wawancara & Observasi Kesiapan:</span>
            <span>Maksimal pada <strong>{formattedEstDate}</strong>. Tim SPMB Ar-Rahmah akan menghubungi melalui pesan WhatsApp.</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Konfirmasi WhatsApp Panitia SPMB
        </a>

        <button
          type="button"
          onClick={() => window.print()}
          className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition flex items-center justify-center gap-2 border border-slate-300"
        >
          <Printer className="w-4 h-4" />
          Cetak Bukti Registrasi
        </button>
      </div>

      <div className="flex items-center justify-center gap-6 text-xs text-slate-500 pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onReset}
          className="hover:text-teal-700 font-medium underline underline-offset-4"
        >
          Isi Formulir untuk Calon Siswa Baru Lainnya
        </button>
        <span className="text-slate-300">&bull;</span>
        <Link
          href="/dashboard"
          className="text-teal-700 hover:text-teal-900 font-bold flex items-center gap-1"
        >
          Buka SPMB Admin Dashboard
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
