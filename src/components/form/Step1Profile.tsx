'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ApplicantAssessmentFormData, EducationalUnit, DistanceRadius } from '@/types/assessment';
import { Baby, BookOpen, GraduationCap, School, MapPin, User, Phone, Briefcase } from 'lucide-react';

interface Step1Props {
  form: UseFormReturn<ApplicantAssessmentFormData>;
}

const UNITS: { id: EducationalUnit; label: string; desc: string; icon: any; color: string; badge: string }[] = [
  {
    id: 'PAUD',
    label: 'PAUD & TKIT',
    desc: 'Daycare, Playgroup & TK Islam Terpadu',
    icon: Baby,
    color: 'from-amber-500 to-orange-500',
    badge: 'Usia 2-6 Tahun'
  },
  {
    id: 'SDIT',
    label: 'SDIT',
    desc: 'Sekolah Dasar Islam Terpadu Ar-Rahmah',
    icon: BookOpen,
    color: 'from-teal-600 to-emerald-600',
    badge: 'Akreditasi A Unggul'
  },
  {
    id: 'SMPIT',
    label: 'SMPIT',
    desc: 'Sekolah Menengah Pertama Islam Terpadu',
    icon: School,
    color: 'from-cyan-600 to-teal-700',
    badge: 'Leadership & Tahfidz'
  },
  {
    id: 'SMAIT',
    label: 'SMAIT',
    desc: 'Sekolah Menengah Atas Islam Terpadu',
    icon: GraduationCap,
    color: 'from-emerald-700 to-teal-900',
    badge: 'Target PTN & Puspresnas'
  },
];

const RADIUS_OPTIONS: { id: DistanceRadius; label: string; subtext: string }[] = [
  { id: '<3km', label: '< 3 km', subtext: 'Sangat dekat (Paccerakkang / Daya)' },
  { id: '3-5km', label: '3 - 5 km', subtext: 'Zonasi inti (Tamalanrea / BTP)' },
  { id: '5-10km', label: '5 - 10 km', subtext: 'Jangkauan normal (Panakkukang / Sudiang)' },
  { id: '>10km', label: '> 10 km', subtext: 'Luar radius utama (Maros / Pusat Kota)' },
];

export const Step1Profile: React.FC<Step1Props> = ({ form }) => {
  const { register, watch, setValue, formState: { errors } } = form;
  const currentUnit = watch('unit');
  const currentRadius = watch('parents.distanceRadius');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Unit Selector */}
      <div>
        <label className="block text-sm font-semibold text-slate-800 mb-2">
          Pilih Jenjang Pendidikan yang Dituju <span className="text-rose-500">*</span>
        </label>
        <p className="text-xs text-slate-500 mb-4">
          Pemilihan jenjang akan menyesuaikan pertanyaan spesifik kurikulum dan kesiapan ananda di tahap selanjutnya.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {UNITS.map((item) => {
            const Icon = item.icon;
            const isSelected = currentUnit === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setValue('unit', item.id, { shouldValidate: true });
                  // Set sensible default target class
                  if (item.id === 'PAUD') setValue('student.targetClass', 'Playgroup');
                  if (item.id === 'SDIT') setValue('student.targetClass', 'Kelas 1');
                  if (item.id === 'SMPIT') setValue('student.targetClass', 'Kelas 7');
                  if (item.id === 'SMAIT') setValue('student.targetClass', 'Kelas 10');
                }}
                className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-teal-700 bg-teal-50/70 shadow-md ring-2 ring-teal-600/20'
                    : 'border-slate-200 hover:border-teal-300 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.badge}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item.label}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal-600" />
                )}
              </button>
            );
          })}
        </div>
        {errors.unit && (
          <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.unit.message}</p>
        )}
      </div>

      {/* Student Details */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-teal-100 text-teal-800 rounded-md">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Data Calon Siswa</h3>
            <p className="text-xs text-slate-500">Identitas resmi calon peserta didik</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Lengkap Ananda <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Muhammad Fathan Al-Ghifari"
              {...register('student.fullName')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.student?.fullName && (
              <p className="text-rose-500 text-xs mt-1">{errors.student.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Panggilan <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Fathan"
              {...register('student.nickname')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.student?.nickname && (
              <p className="text-rose-500 text-xs mt-1">{errors.student.nickname.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Jenis Kelamin <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border cursor-pointer text-sm font-medium transition ${
                watch('student.gender') === 'L' ? 'bg-teal-700 text-white border-teal-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}>
                <input
                  type="radio"
                  value="L"
                  {...register('student.gender')}
                  className="hidden"
                />
                Laki-laki (Ikhwan)
              </label>
              <label className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border cursor-pointer text-sm font-medium transition ${
                watch('student.gender') === 'P' ? 'bg-teal-700 text-white border-teal-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}>
                <input
                  type="radio"
                  value="P"
                  {...register('student.gender')}
                  className="hidden"
                />
                Perempuan (Akhwat)
              </label>
            </div>
            {errors.student?.gender && (
              <p className="text-rose-500 text-xs mt-1">{errors.student.gender.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tempat Lahir <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Makassar"
              {...register('student.birthPlace')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.student?.birthPlace && (
              <p className="text-rose-500 text-xs mt-1">{errors.student.birthPlace.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tanggal Lahir <span className="text-rose-500">*</span>
            </label>
            <input
              type="date"
              {...register('student.birthDate')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.student?.birthDate && (
              <p className="text-rose-500 text-xs mt-1">{errors.student.birthDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Asal Sekolah / Kelompok Bermain <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: TK Islam Ar-Rahmah / Belum pernah"
              {...register('student.prevSchool')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.student?.prevSchool && (
              <p className="text-rose-500 text-xs mt-1">{errors.student.prevSchool.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Pilihan Kelas yang Dituju <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Kelas 1 / Kelas 7 / TK-A"
              {...register('student.targetClass')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.student?.targetClass && (
              <p className="text-rose-500 text-xs mt-1">{errors.student.targetClass.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Parents & Location */}
      <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
          <div className="p-1.5 bg-amber-100 text-amber-800 rounded-md">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Data Orang Tua / Wali Murid</h3>
            <p className="text-xs text-slate-500">Informasi kontak dan domisili tempat tinggal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Lengkap Ayah <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nama lengkap beserta gelar (jika ada)"
              {...register('parents.fatherName')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.parents?.fatherName && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.fatherName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Pekerjaan Ayah <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Dosen, PNS, Wiraswasta, Karyawan"
              {...register('parents.fatherJob')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.parents?.fatherJob && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.fatherJob.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              No. WhatsApp Ayah <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="tel"
                placeholder="08xxxxxxxxxx"
                {...register('parents.whatsappFather')}
                className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
              />
            </div>
            {errors.parents?.whatsappFather && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.whatsappFather.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Lengkap Ibu <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nama lengkap ibu kandung"
              {...register('parents.motherName')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.parents?.motherName && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.motherName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Pekerjaan Ibu <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Ibu Rumah Tangga, Dokter, Guru"
              {...register('parents.motherJob')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.parents?.motherJob && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.motherJob.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              No. WhatsApp Ibu <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="tel"
                placeholder="08xxxxxxxxxx"
                {...register('parents.whatsappMother')}
                className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
              />
            </div>
            {errors.parents?.whatsappMother && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.whatsappMother.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Alamat Lengkap Domisili <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              placeholder="Jalan, nomor rumah, kompleks perumahan / RT RW"
              {...register('parents.address')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.parents?.address && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.address.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kecamatan <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Biringkanaya, Tamalanrea, Maros"
              {...register('parents.district')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.parents?.district && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.district.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kota / Kabupaten <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Kota Makassar"
              {...register('parents.city')}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
            />
            {errors.parents?.city && (
              <p className="text-rose-500 text-xs mt-1">{errors.parents.city.message}</p>
            )}
          </div>
        </div>

        {/* Distance Radius */}
        <div className="pt-2">
          <label className="block text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            Estimasi Jarak Rumah ke Kampus SIT Ar-Rahmah Makassar <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {RADIUS_OPTIONS.map((rad) => {
              const isSelected = currentRadius === rad.id;
              return (
                <button
                  key={rad.id}
                  type="button"
                  onClick={() => setValue('parents.distanceRadius', rad.id, { shouldValidate: true })}
                  className={`p-3 rounded-lg border text-left transition ${
                    isSelected
                      ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold ring-1 ring-teal-600'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-bold">{rad.label}</div>
                  <div className="text-[11px] text-slate-500">{rad.subtext}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
