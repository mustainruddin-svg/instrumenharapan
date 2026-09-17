'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ApplicantAssessmentFormData, SENSupportType } from '@/types/assessment';
import { HeartPulse, Utensils, Bus, Clock, Users, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface Step5Props {
  form: UseFormReturn<ApplicantAssessmentFormData>;
}

const SEN_CHOICES: {
  id: SENSupportType;
  title: string;
  badge: string;
  desc: string;
  color: string;
}[] = [
  {
    id: 'regular',
    title: 'Pembelajaran Reguler Standar',
    badge: 'Mandiri',
    desc: 'Ananda dapat mengikuti seluruh proses belajar-mengajar secara mandiri tanpa pendamping khusus.',
    color: 'border-emerald-600 bg-emerald-50/60'
  },
  {
    id: 'needs_observation',
    title: 'Memerlukan Observasi Psikolog / Tumbuh Kembang',
    badge: 'Perlu Asesmen',
    desc: 'Ada indikasi speech delay, tantrum, kesulitan fokus/konsentrasi, atau kesulitan interaksi yang memerlukan telaah tim inklusi.',
    color: 'border-amber-500 bg-amber-50/60'
  },
  {
    id: 'requires_iep_shadow',
    title: 'Membutuhkan Program Pembelajaran Individual (PPI/IEP) & Shadow Teacher',
    badge: 'Inklusi Khusus',
    desc: 'Ananda memiliki diagnosa medis/psikologis resmi (ASD, ADHD, Disleksia berat, dsb.) dan memerlukan adaptasi kurikulum + guru pendamping.',
    color: 'border-rose-500 bg-rose-50/60'
  }
];

const PARENT_COMMITMENTS = [
  'Menghadiri agenda rutin Sekolah Orang Tua (Parenting Class)',
  'Mendampingi muraja\'ah dan pembiasaan shalat 5 waktu di rumah',
  'Membangun komunikasi aktif dan santun bersama walas/asatidz',
  'Menjaga keselarasan aturan gawai (screen time) dan adab di rumah',
  'Mendukung program kegiatan luar sekolah dan infaq dakwah sukarela',
];

export const Step5Inclusion: React.FC<Step5Props> = ({ form }) => {
  const { register, watch, setValue } = form;
  const hasAllergies = watch('specialEducationNeeds.hasAllergiesOrIllness');
  const senSupport = watch('specialEducationNeeds.needsSpecialSupport') || 'regular';
  const catering = watch('supportServices.healthyCatering');
  const shuttle = watch('supportServices.schoolShuttle');
  const daycare = watch('supportServices.daycareAfterSchool');
  const currentCommitments = watch('supportServices.parentSynergyCommitments') || [];

  const toggleCommitment = (item: string) => {
    if (currentCommitments.includes(item)) {
      setValue(
        'supportServices.parentSynergyCommitments',
        currentCommitments.filter((c) => c !== item),
        { shouldValidate: true }
      );
    } else {
      setValue(
        'supportServices.parentSynergyCommitments',
        [...currentCommitments, item],
        { shouldValidate: true }
      );
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Riwayat Kesehatan & Alergi */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-rose-100 text-rose-800 rounded-md">
            <HeartPulse className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Riwayat Medis & Alergi Makanan/Obat</h3>
            <p className="text-xs text-slate-500">Penting untuk penanganan darurat di UKS dan sanitasi lingkungan</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <label className="text-xs sm:text-sm font-semibold text-slate-700">
              Apakah Ananda memiliki riwayat alergi makanan, obat, atau penyakit khusus?
            </label>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-1.5 text-xs sm:text-sm cursor-pointer font-medium">
                <input
                  type="radio"
                  name="allergy_toggle"
                  checked={hasAllergies === true}
                  onChange={() => setValue('specialEducationNeeds.hasAllergiesOrIllness', true)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                Ya, Ada
              </label>
              <label className="inline-flex items-center gap-1.5 text-xs sm:text-sm cursor-pointer font-medium">
                <input
                  type="radio"
                  name="allergy_toggle"
                  checked={hasAllergies === false}
                  onChange={() => {
                    setValue('specialEducationNeeds.hasAllergiesOrIllness', false);
                    setValue('specialEducationNeeds.allergyDetails', '');
                  }}
                  className="text-teal-600 focus:ring-teal-500"
                />
                Tidak Ada
              </label>
            </div>
          </div>

          {hasAllergies && (
            <div className="p-3.5 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1.5 animate-fadeIn">
              <label className="block text-xs font-semibold text-rose-900">
                Jelaskan jenis alergi atau kondisi medis yang perlu diwaspadai: <span className="text-rose-600">*</span>
              </label>
              <textarea
                rows={2}
                placeholder="Contoh: Alergi udang/seafood, asma kambuh saat debu atau suhu dingin, alergi antibiotik amoxicillin."
                {...register('specialEducationNeeds.allergyDetails')}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* Skrining Pendidikan Inklusi (SEN) */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-amber-100 text-amber-800 rounded-md">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Kebutuhan Dukungan Belajar (Inklusi / SEN)</h3>
            <p className="text-xs text-slate-500">Keterbukaan informasi membantu sekolah menyiapkan strategi pengasuhan tepat</p>
          </div>
        </div>

        <div className="space-y-3">
          {SEN_CHOICES.map((choice) => {
            const isSelected = senSupport === choice.id;
            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => setValue('specialEducationNeeds.needsSpecialSupport', choice.id, { shouldValidate: true })}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start justify-between gap-3 ${
                  isSelected
                    ? `${choice.color} shadow-sm ring-1 ring-slate-400`
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{choice.title}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      {choice.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{choice.desc}</p>
                </div>
                <div className={`w-4 h-4 rounded-full border shrink-0 mt-1 flex items-center justify-center ${
                  isSelected ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300'
                }`}>
                  {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
              </button>
            );
          })}

          {senSupport !== 'regular' && (
            <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1.5 animate-fadeIn">
              <label className="block text-xs font-semibold text-amber-900">
                Catatan Khusus Kebutuhan Ananda (Diagnosis / Riwayat Terapi):
              </label>
              <textarea
                rows={2}
                placeholder="Contoh: Sudah pernah asesmen di klinik tumbuh kembang, sedang terapi sensori 1x sepekan."
                {...register('specialEducationNeeds.specialSupportDetails')}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Hobi, Minat & Keunikan Bakat Ananda:
            </label>
            <input
              type="text"
              placeholder="Contoh: Sangat suka menggambar hewan, senang menghafal angka, mahir berenang"
              {...register('specialEducationNeeds.hobbiesAndTalents')}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Layanan Penunjang Sekolah */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-teal-100 text-teal-800 rounded-md">
            <Utensils className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Layanan Tambahan Pendukung</h3>
            <p className="text-xs text-slate-500">Fasilitas opsional untuk mendukung kenyamanan keluarga</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <label className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
            catering ? 'border-teal-700 bg-teal-50 text-teal-900' : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}>
            <input
              type="checkbox"
              checked={catering}
              onChange={(e) => setValue('supportServices.healthyCatering', e.target.checked)}
              className="mt-1 rounded text-teal-600 focus:ring-teal-500"
            />
            <div>
              <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                Katering Sehat
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Menu higienis, halal, dan bergizi seimbang</p>
            </div>
          </label>

          <label className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
            shuttle ? 'border-teal-700 bg-teal-50 text-teal-900' : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}>
            <input
              type="checkbox"
              checked={shuttle}
              onChange={(e) => setValue('supportServices.schoolShuttle', e.target.checked)}
              className="mt-1 rounded text-teal-600 focus:ring-teal-500"
            />
            <div>
              <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                <Bus className="w-3.5 h-3.5" />
                Antar-Jemput
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Armada ber-AC dengan driver resmi yayasan</p>
            </div>
          </label>

          <label className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
            daycare ? 'border-teal-700 bg-teal-50 text-teal-900' : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}>
            <input
              type="checkbox"
              checked={daycare}
              onChange={(e) => setValue('supportServices.daycareAfterSchool', e.target.checked)}
              className="mt-1 rounded text-teal-600 focus:ring-teal-500"
            />
            <div>
              <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Daycare / Penitipan
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Pendampingan sore bagi orang tua pekerja</p>
            </div>
          </label>
        </div>
      </div>

      {/* Komitmen Sinergi Orang Tua */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded-md">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Komitmen Sinergi Orang Tua & Sekolah</h3>
            <p className="text-xs text-slate-500">Pilar ISO 21001:2018 mewajibkan kemitraan berkelanjutan antara sekolah dan rumah</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {PARENT_COMMITMENTS.map((item) => {
            const isChecked = currentCommitments.includes(item);
            return (
              <label
                key={item}
                onClick={() => toggleCommitment(item)}
                className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition ${
                  isChecked ? 'bg-teal-50/70 border-teal-600 text-teal-950 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  isChecked ? 'bg-teal-700 border-teal-700 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <span className="text-xs sm:text-sm">{item}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
