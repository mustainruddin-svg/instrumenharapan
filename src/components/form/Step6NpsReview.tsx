'use client';

import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ApplicantAssessmentFormData } from '@/types/assessment';
import { Smile, MessageSquareQuote, CheckCircle, FileText, Send, Eye, X } from 'lucide-react';

interface Step6Props {
  form: UseFormReturn<ApplicantAssessmentFormData>;
  onSubmitClick: () => void;
  isSubmitting: boolean;
}

export const Step6NpsReview: React.FC<Step6Props> = ({ form, onSubmitClick, isSubmitting }) => {
  const { register, watch, setValue } = form;
  const currentNps = watch('npsScore');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const allValues = watch();

  const getNpsLabel = (score: number) => {
    if (score >= 9) return { label: 'Promoter (Sangat Merekomendasikan)', color: 'text-emerald-700 bg-emerald-100 border-emerald-200' };
    if (score >= 7) return { label: 'Passive (Cukup Puas / Netral)', color: 'text-amber-700 bg-amber-100 border-amber-200' };
    return { label: 'Detractor (Perlu Peningkatan Kualitas)', color: 'text-rose-700 bg-rose-100 border-rose-200' };
  };

  const npsInfo = getNpsLabel(currentNps);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* NPS Section */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-amber-100 text-amber-800 rounded-md">
            <Smile className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Net Promoter Score (NPS) - Indeks Rekomendasi</h3>
            <p className="text-xs text-slate-500">
              Seberapa besar kemungkinan Bapak/Ibu merekomendasikan SIT Ar-Rahmah kepada kerabat/keluarga? (Skala 0 - 10)
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
            <span className="text-rose-600 font-semibold">0 = Sangat Tidak Mungkin</span>
            <span className="text-amber-600 font-semibold hidden sm:inline">5 = Netral</span>
            <span className="text-emerald-700 font-semibold">10 = Sangat Merekomendasikan</span>
          </div>

          <div className="grid grid-cols-11 gap-1 sm:gap-2">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
              const isSelected = currentNps === score;
              let scoreColor = 'hover:border-rose-400';
              if (score >= 9) scoreColor = 'hover:border-emerald-500';
              else if (score >= 7) scoreColor = 'hover:border-amber-400';

              return (
                <button
                  key={score}
                  type="button"
                  onClick={() => setValue('npsScore', score, { shouldValidate: true })}
                  className={`py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base transition-all duration-150 border flex flex-col items-center justify-center ${scoreColor} ${
                    isSelected
                      ? score >= 9
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/30 scale-105'
                        : score >= 7
                        ? 'bg-amber-500 text-white border-amber-500 shadow-md ring-2 ring-amber-500/30 scale-105'
                        : 'bg-rose-500 text-white border-rose-500 shadow-md ring-2 ring-rose-500/30 scale-105'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {score}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className={`text-xs font-semibold px-3 py-1 rounded-full border ${npsInfo.color}`}>
              Skor Terpilih: {currentNps} &bull; {npsInfo.label}
            </div>
          </div>
        </div>
      </div>

      {/* Parent Message & Expectations */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-teal-100 text-teal-800 rounded-md">
            <MessageSquareQuote className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Pesan & Harapan Khusus Orang Tua</h3>
            <p className="text-xs text-slate-500">Tuliskan harapan personal bagi ananda selama bersekolah di SIT Ar-Rahmah</p>
          </div>
        </div>

        <textarea
          rows={3}
          placeholder="Contoh: Kami berharap ananda tidak hanya berprestasi akademik, namun juga dibimbing dengan teladan ustadz/ustadzah agar memiliki jiwa tawadhu, cinta Al-Qur'an, dan berbakti kepada orang tua."
          {...register('parentMessage')}
          className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
        />
      </div>

      {/* Review and Submission Action */}
      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white p-6 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Klausul Verifikasi Pra-Kirim (ISO 21001:2018)</h3>
            <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-xl leading-relaxed">
              Dengan mengirimkan formulir asesmen ini, data Bapak/Ibu akan langsung tercatat pada Sistem Penerimaan Murid Baru (SPMB)
              dan diarsipkan sebagai dokumen kendali mutu pendidikan SIT Ar-Rahmah Makassar.
            </p>
          </div>
          <CheckCircle className="w-8 h-8 text-amber-300 shrink-0 hidden sm:block" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={() => setShowReviewModal(true)}
            className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 border border-white/20"
          >
            <Eye className="w-4 h-4" />
            Tinjau Ringkasan Jawaban
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={onSubmitClick}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Memproses Pengiriman...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Kirim Asesmen & Dapatkan Token SPMB
              </>
            )}
          </button>
        </div>
      </div>

      {/* Summary Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="sticky top-0 bg-white p-4 border-b border-slate-200 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-700" />
                <h3 className="font-bold text-slate-900 text-base">Lembar Ringkasan Asesmen</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
                <span className="font-bold text-teal-900">Jenjang Pilihan:</span> {allValues.unit} &bull; Target Kelas: {allValues.student?.targetClass || '-'}
              </div>

              <div className="grid grid-cols-2 gap-3 border-b pb-3">
                <div>
                  <span className="text-slate-400 text-xs block">Nama Calon Siswa:</span>
                  <span className="font-semibold">{allValues.student?.fullName || '-'} ({allValues.student?.nickname})</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Jenis Kelamin:</span>
                  <span className="font-semibold">{allValues.student?.gender === 'L' ? 'Laki-laki (Ikhwan)' : 'Perempuan (Akhwat)'}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Asal Sekolah:</span>
                  <span className="font-semibold">{allValues.student?.prevSchool || '-'}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Radius Zonasi:</span>
                  <span className="font-semibold">{allValues.parents?.distanceRadius || '-'} ({allValues.parents?.district})</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-b pb-3">
                <div>
                  <span className="text-slate-400 text-xs block">Nama & WA Ayah:</span>
                  <span className="font-semibold">{allValues.parents?.fatherName || '-'} ({allValues.parents?.whatsappFather})</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Nama & WA Ibu:</span>
                  <span className="font-semibold">{allValues.parents?.motherName || '-'} ({allValues.parents?.whatsappMother})</span>
                </div>
              </div>

              <div className="border-b pb-3 space-y-1">
                <span className="text-slate-400 text-xs block">Alasan Utama Memilih:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {(allValues.primaryReasons || []).map((r) => (
                    <span key={r} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-b pb-3 space-y-1">
                <span className="text-slate-400 text-xs block">Status Kebutuhan Inklusi (SEN):</span>
                <span className="font-semibold">
                  {allValues.specialEducationNeeds?.needsSpecialSupport === 'regular'
                    ? 'Pembelajaran Reguler'
                    : allValues.specialEducationNeeds?.needsSpecialSupport === 'needs_observation'
                    ? 'Perlu Observasi Psikolog'
                    : 'Memerlukan IEP & Guru Shadow'}
                </span>
                {allValues.specialEducationNeeds?.specialSupportDetails && (
                  <p className="text-xs text-slate-500 italic mt-0.5">{allValues.specialEducationNeeds.specialSupportDetails}</p>
                )}
              </div>

              <div>
                <span className="text-slate-400 text-xs block">Skor Net Promoter Score (NPS):</span>
                <span className="font-bold text-base text-teal-800">{allValues.npsScore} / 10</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="px-4 py-2 rounded-xl bg-teal-700 text-white font-semibold text-xs sm:text-sm hover:bg-teal-800 transition"
              >
                Tutup & Lanjutkan Pengiriman
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
