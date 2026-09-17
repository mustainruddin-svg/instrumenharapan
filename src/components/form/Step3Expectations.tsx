'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ApplicantAssessmentFormData } from '@/types/assessment';
import { ShieldCheck, HeartHandshake, Compass, Laptop, Info } from 'lucide-react';

interface Step3Props {
  form: UseFormReturn<ApplicantAssessmentFormData>;
}

interface ExpectationCategory {
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  items: {
    key: keyof ApplicantAssessmentFormData['generalExpectations'];
    label: string;
    desc: string;
  }[];
}

const CATEGORIES: ExpectationCategory[] = [
  {
    title: '1. Karakter & Nilai Keislaman (Budaya RAHMAH)',
    subtitle: 'Standar pembiasaan adab harian, aqidah salimah, dan kualitas tahfidz',
    icon: HeartHandshake,
    color: 'text-teal-700 bg-teal-100',
    items: [
      {
        key: 'islamicHabits',
        label: 'Pembiasaan Ibadah Harian',
        desc: 'Shalat fardhu berjamaah, dhuha, dzikir pagi-petang, dan puasa sunnah secara konsisten'
      },
      {
        key: 'adabAndEtiquette',
        label: 'Adab, Sopan Santun & Akhlak',
        desc: 'Menghormati guru & orang tua, bertutur kata santun, menjaga pergaulan sesuai syariat'
      },
      {
        key: 'tahfidzQuality',
        label: 'Kualitas & Mutu Tahfidz Al-Qur\'an',
        desc: 'Ketetapan makhraj/tajwid (Metode Wafa bersanad) serta ketuntasan target hafalan mutqin'
      }
    ]
  },
  {
    title: '2. Kualitas Proses Belajar & Kurikulum',
    subtitle: 'Pendekatan Deep Learning, kompetensi abad-21, dan karakter kepemimpinan',
    icon: Compass,
    color: 'text-amber-700 bg-amber-100',
    items: [
      {
        key: 'deepLearningApproach',
        label: 'Pendekatan Deep Learning (Bermakna & Menyenangkan)',
        desc: 'Fokus pada pemahaman konseptual mendalam, eksploratif, tanpa beban hafalan rumus buta'
      },
      {
        key: 'leadershipSkills',
        label: 'Kepemimpinan & Kemandirian Siswa',
        desc: 'Melatih inisiatif, public speaking, kerja sama tim, dan tanggung jawab sosial'
      },
      {
        key: 'digitalLearningTech',
        label: 'Pemanfaatan Teknologi Pembelajaran Edukatif',
        desc: 'Integrasi platform digital, literasi saintifik, dan pengenalan coding/computational thinking'
      }
    ]
  },
  {
    title: '3. Keselamatan Lingkungan & Budaya Kampus',
    subtitle: 'Komitmen Zero Bullying, kebersihan 5R, dan proteksi fisik terpadu',
    icon: ShieldCheck,
    color: 'text-emerald-700 bg-emerald-100',
    items: [
      {
        key: 'zeroBullyingSafeEnv',
        label: 'Kebijakan Zero Bullying & Aman Psikologis',
        desc: 'Sekolah bebas perundungan, ramah anak, dan penanganan preventif bimbingan konseling'
      },
      {
        key: 'cleanliness5R',
        label: 'Kebersihan & Budaya 5R Sekolah',
        desc: 'Ringkas, Rapi, Resik, Rawat, Rajin di kelas, toilet higienis, kantin sehat terverifikasi'
      },
      {
        key: 'physicalSecurityCCTV',
        label: 'Keamanan Fisik & CCTV 24 Jam',
        desc: 'Sistem satu pintu (one-gate system), satpam terlatih, dan monitoring kamera CCTV'
      }
    ]
  },
  {
    title: '4. Layanan & Komunikasi Manajemen',
    subtitle: 'Sistem Informasi Sekolah, kemitraan orang tua, dan transparansi pembiayaan',
    icon: Laptop,
    color: 'text-cyan-700 bg-cyan-100',
    items: [
      {
        key: 'digitalAdminLMS',
        label: 'SIM Sekolah & Layanan Paperless',
        desc: 'Akses rapor digital, pantauan presensi real-time, dan informasi akademik via smartphone'
      },
      {
        key: 'parentCommunication',
        label: 'Komunikasi Guru & Kemitraan Orang Tua',
        desc: 'Laporan perkembangan berkala, agenda Parenting Class, dan responsivitas pihak sekolah'
      },
      {
        key: 'financialTransparency',
        label: 'Transparansi Pembiayaan & Akuntabilitas',
        desc: 'Keterbukaan rincian SPP, uang gedung, dan tidak ada pungutan tak terduga di tengah semester'
      }
    ]
  }
];

const SCALE_DESCRIPTIONS = [
  { val: 1, label: '1 - Rendah', hint: 'Bukan prioritas keluarga saat ini' },
  { val: 2, label: '2 - Cukup', hint: 'Cukup ada tanpa perhatian khusus' },
  { val: 3, label: '3 - Standar', hint: 'Ekspektasi wajar standar sekolah' },
  { val: 4, label: '4 - Penting', hint: 'Sangat kami harapkan terwujud' },
  { val: 5, label: '5 - Mutlak', hint: 'Prioritas utama penentu memilih' },
];

export const Step3Expectations: React.FC<Step3Props> = ({ form }) => {
  const { watch, setValue } = form;
  const expectations = watch('generalExpectations') || {};

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ISO Context Banner */}
      <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl flex items-start gap-3">
        <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
        <div className="text-xs text-teal-900 leading-relaxed">
          <p className="font-semibold mb-1">
            Penjaminan Mutu Berstandar Internasional (ISO 21001:2018 - EOMS)
          </p>
          <p className="text-teal-800">
            Kuesioner ini dirancang untuk memetakan ekspektasi pemangku kepentingan (Bapak/Ibu Orang Tua)
            sebagai dasar penetapan sasaran mutu kurikulum, sarana, dan layanan SIT Ar-Rahmah.
            Skala 1 = Rendah / Kurang Penting s/d 5 = Sangat Mutlak / Prioritas Tertinggi.
          </p>
        </div>
      </div>

      {/* Scale Legend */}
      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <div className="text-xs font-semibold text-slate-700 mb-2">Panduan Skala Likert:</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {SCALE_DESCRIPTIONS.map((s) => (
            <div key={s.val} className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center">
              <div className="text-xs font-bold text-teal-800">{s.label}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{s.hint}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {CATEGORIES.map((cat, catIdx) => {
          const Icon = cat.icon;
          return (
            <div key={catIdx} className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className={`p-2 rounded-lg ${cat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">{cat.title}</h3>
                  <p className="text-xs text-slate-500">{cat.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                {cat.items.map((item) => {
                  const currentValue = expectations[item.key] || 4;
                  return (
                    <div
                      key={item.key}
                      className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                    >
                      <div className="md:max-w-md lg:max-w-lg">
                        <div className="text-sm font-bold text-slate-800">{item.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>

                      <div className="flex items-center gap-1.5 self-start md:self-auto shrink-0">
                        {[1, 2, 3, 4, 5].map((val) => {
                          const isSelected = currentValue === val;
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setValue(`generalExpectations.${item.key}`, val, { shouldValidate: true })}
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                                isSelected
                                  ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-600/30 scale-105'
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                              }`}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
