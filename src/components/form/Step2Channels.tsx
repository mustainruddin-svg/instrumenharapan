'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ApplicantAssessmentFormData } from '@/types/assessment';
import { Share2, Star, CheckCircle2, AlertCircle } from 'lucide-react';

interface Step2Props {
  form: UseFormReturn<ApplicantAssessmentFormData>;
}

const DISCOVERY_CHANNELS = [
  'Referral Alumni/Teman',
  'Instagram/Medsos',
  'Website/Google',
  'Brosur/Spanduk',
  'Event / Open House / Edufair',
  'Rekomendasi Ustadz / Liqo',
];

const REASONS = [
  { id: 'Karakter & Tahfidz', title: 'Karakter Islami & Mutu Tahfidz', desc: 'Penanaman adab harian RAHMAH dan target hafalan terstruktur' },
  { id: 'Leadership Curriculum', title: 'Kurikulum Kepemimpinan', desc: 'Membentuk kemandirian, komunikasi, problem solving & adab' },
  { id: 'Prestasi & Lulus PTN', title: 'Prestasi Akademik & Jalur PTN', desc: 'Bimbingan intensif SNBP/SNBT, olimpiade, dan pembinaan riset' },
  { id: 'Zero Bullying & Aman', title: 'Lingkungan Aman (Zero Bullying)', desc: 'Ekosistem ramah anak, pengawasan ketat, dan perlindungan psikologis' },
  { id: 'Fasilitas & 5R', title: 'Fasilitas Nyaman & Budaya 5R', desc: 'Ringkas, Rapi, Resik, Rawat, Rajin di seluruh lingkungan sekolah' },
  { id: 'Guru Ramah', title: 'Pendidik Kompeten & Penuh Kasih', desc: 'Guru tersertifikasi yang mendidik dengan pendekatan keteladanan' },
];

export const Step2Channels: React.FC<Step2Props> = ({ form }) => {
  const { watch, setValue, formState: { errors } } = form;
  const currentChannels = watch('discoveryChannel') || [];
  const currentReasons = watch('primaryReasons') || [];

  const toggleChannel = (channel: string) => {
    if (currentChannels.includes(channel)) {
      setValue('discoveryChannel', currentChannels.filter((c) => c !== channel), { shouldValidate: true });
    } else {
      setValue('discoveryChannel', [...currentChannels, channel], { shouldValidate: true });
    }
  };

  const toggleReason = (reasonId: string) => {
    if (currentReasons.includes(reasonId)) {
      setValue('primaryReasons', currentReasons.filter((r) => r !== reasonId), { shouldValidate: true });
    } else {
      if (currentReasons.length < 3) {
        setValue('primaryReasons', [...currentReasons, reasonId], { shouldValidate: true });
      }
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Discovery Channels */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 mb-4">
          <div className="p-1.5 bg-teal-100 text-teal-800 rounded-md">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Saluran Informasi</h3>
            <p className="text-xs text-slate-500">Dari mana Bapak/Ibu pertama kali mengetahui SIT Ar-Rahmah?</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {DISCOVERY_CHANNELS.map((channel) => {
            const isSelected = currentChannels.includes(channel);
            return (
              <button
                key={channel}
                type="button"
                onClick={() => toggleChannel(channel)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-teal-400 hover:bg-slate-50'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                  isSelected ? 'border-white bg-teal-800' : 'border-slate-400'
                }`}>
                  {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                {channel}
              </button>
            );
          })}
        </div>
        {errors.discoveryChannel && (
          <p className="text-rose-500 text-xs mt-2 font-medium">{errors.discoveryChannel.message}</p>
        )}
      </div>

      {/* Primary Reasons */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-amber-100 text-amber-800 rounded-md">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm sm:text-base">Alasan Utama Memilih SIT Ar-Rahmah</h3>
              <p className="text-xs text-slate-500">Pilih maksimal 3 pertimbangan terpenting bagi keluarga Anda</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Terpilih:</span>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
              currentReasons.length === 3
                ? 'bg-teal-700 text-white'
                : 'bg-amber-100 text-amber-900'
            }`}>
              {currentReasons.length} / 3
            </span>
          </div>
        </div>

        {currentReasons.length === 3 && (
          <div className="mb-4 p-3 bg-teal-50 border border-teal-200 rounded-xl flex items-center gap-2 text-xs text-teal-800">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-700" />
            <span>Batas maksimal 3 alasan utama telah tercapai. Klik salah satu untuk mengganti pilihan.</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {REASONS.map((item) => {
            const isSelected = currentReasons.includes(item.id);
            const isMaxDisabled = !isSelected && currentReasons.length >= 3;

            return (
              <button
                key={item.id}
                type="button"
                disabled={isMaxDisabled}
                onClick={() => toggleReason(item.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 ${
                  isSelected
                    ? 'border-teal-700 bg-teal-50/80 shadow-sm ring-1 ring-teal-600'
                    : isMaxDisabled
                    ? 'border-slate-200 bg-slate-100/60 opacity-50 cursor-not-allowed'
                    : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-slate-50'
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-teal-700 border-teal-700 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {errors.primaryReasons && (
          <div className="flex items-center gap-1.5 text-rose-500 text-xs mt-3 font-medium">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.primaryReasons.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};
