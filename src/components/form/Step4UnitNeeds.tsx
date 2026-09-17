'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ApplicantAssessmentFormData, EducationalUnit } from '@/types/assessment';
import { Sparkles, Baby, BookOpen, School, GraduationCap } from 'lucide-react';

interface Step4Props {
  form: UseFormReturn<ApplicantAssessmentFormData>;
}

interface UnitNeedConfig {
  title: string;
  badge: string;
  icon: any;
  items: {
    key: string;
    label: string;
    desc: string;
  }[];
}

const UNIT_CONFIGS: Record<EducationalUnit, UnitNeedConfig> = {
  PAUD: {
    title: 'Kebutuhan Spesifik Jenjang PAUD & TK Islam Terpadu',
    badge: 'Tumbuh Kembang Usia Dini & Transisi',
    icon: Baby,
    items: [
      {
        key: 'Stimulasi motorik kasar & halus terarah',
        label: 'Stimulasi Motorik Kasar & Halus Terarah',
        desc: 'Aktivitas sensorik, koordinasi mata-tangan, ketangkasan fisik melalui permainan edukatif'
      },
      {
        key: 'Kemandirian toilet training & makan sendiri',
        label: 'Kemandirian Toilet Training & Makan Sendiri',
        desc: 'Pembiasaan ke toilet mandiri, cuci tangan, dan adab makan yang tertib'
      },
      {
        key: 'Pengenalan Al-Qur\'an metode wafa ceria',
        label: 'Pengenalan Al-Qur\'an Metode Wafa Ceria',
        desc: 'Metode otak kanan yang menyenangkan, lagu hijaiyah, dan hafalan surat pendek tanpa beban'
      },
      {
        key: 'Transisi adaptasi sosial ramah anak',
        label: 'Transisi Adaptasi Sosial & Kesiapan Masuk SD',
        desc: 'Membangun keberanian berinteraksi, berbagi mainan, dan mengelola emosi secara sehat'
      },
      {
        key: 'Monitoring gizi & konsultasi dokter tumbuh kembang',
        label: 'Monitoring Gizi & Konsultasi Tumbuh Kembang',
        desc: 'Pemeriksaan berkala status gizi anak bersama tenaga medis/dokter mitra yayasan'
      }
    ]
  },
  SDIT: {
    title: 'Kebutuhan Spesifik Jenjang SDIT Ar-Rahmah',
    badge: 'Literasi, Numerasi Dasar & Karakter Anak',
    icon: BookOpen,
    items: [
      {
        key: 'Calistung menyenangkan tanpa paksaan',
        label: 'Calistung Menyenangkan & Bertahap',
        desc: 'Pendekatan membaca, menulis, berhitung yang adaptif tanpa menciptakan stres akademik'
      },
      {
        key: 'Target tahfidz juz 30 & 29 mutqin',
        label: 'Target Tahfidz Juz 30 & 29 Mutqin',
        desc: 'Program halaqah tahfidz harian metode Wafa dengan target tuntas dan teruji'
      },
      {
        key: 'Literasi & numerasi dasar berbasis proyek',
        label: 'Literasi & Numerasi Berbasis Proyek (PBL)',
        desc: 'Pembelajaran kontekstual, sains sederhana, dan eksplorasi matematika praktis'
      },
      {
        key: 'Pembiasaan shalat berjamaah & dhuha',
        label: 'Pembiasaan Shalat Fardhu Berjamaah & Shalat Dhuha',
        desc: 'Disiplin wudhu sempurna, adab masjid, dan shalat berjamaah di masjid kampus'
      },
      {
        key: 'Ekskul bakat & minat (Robotics/Coding/Panahan)',
        label: 'Ekskul Bakat & Minat (Robotics, Coding, Panahan, Silat)',
        desc: 'Wadah penyaluran bakat kepemimpinan, seni kaligrafi, dan ketangkasan fisik'
      }
    ]
  },
  SMPIT: {
    title: 'Kebutuhan Spesifik Jenjang SMPIT Ar-Rahmah',
    badge: 'Peralihan Remaja, HOTS & Leadership',
    icon: School,
    items: [
      {
        key: 'Adab pergaulan islami & penjagaan pergaulan remaja',
        label: 'Adab Pergaulan Islami & Pembinaan Remaja',
        desc: 'Pemahaman batasan pergaulan syar\'i ikhwan-akhwat, pencegahan kecanduan gawai dan pornografi'
      },
      {
        key: 'Tahfidz 2-3 juz mutqin bersanad',
        label: 'Tahfidz 2-3 Juz Mutqin & Sertifikasi Tajwid',
        desc: 'Fasilitas setoran intensif dengan sanad ustadz berkompeten'
      },
      {
        key: 'Pembelajaran Higher Order Thinking Skills (HOTS)',
        label: 'Pembelajaran Berpikir Kritis (HOTS) & Sains',
        desc: 'Kemampuan analisis logis, pemecahan masalah kompleks, dan kompetensi riset remaja'
      },
      {
        key: 'Leadership Camp & Public Speaking',
        label: 'Leadership Camp, Kepanduan & Public Speaking',
        desc: 'Latihan dasar kepemimpinan (LDK), mukhayyam alam, dan kemampuan retorika 2 bahasa'
      },
      {
        key: 'Laboratorium Sains & Bahasa aktif',
        label: 'Pemanfaatan Laboratorium Sains & Bahasa Terpadu',
        desc: 'Praktikum biologi/fisika rutin dan pembiasaan percakapan Arab-Inggris'
      }
    ]
  },
  SMAIT: {
    title: 'Kebutuhan Spesifik Jenjang SMAIT Ar-Rahmah',
    badge: 'Karier Masa Depan, Sukses PTN & Kepemimpinan Umat',
    icon: GraduationCap,
    items: [
      {
        key: 'Program sukses tembus PTN Favorit (SNBP/SNBT/Kedokteran/ITB)',
        label: 'Program Sukses Tembus PTN Top (SNBP, SNBT, Kedokteran)',
        desc: 'Pendalaman materi UTBK terpadu sejak kelas 10, try-out berkala, dan analisis passing grade'
      },
      {
        key: 'Konseling peminatan karier & psikotes terstruktur',
        label: 'Konseling Peminatan Jurusan & Psikotes Karier',
        desc: 'Bimbingan pemetaan bakat minat bersama psikolog pendidikan profesional'
      },
      {
        key: 'Portofolio riset & lomba kurasi Puspresnas',
        label: 'Pembinaan Lomba Prestasi Puspresnas & Portofolio Karya',
        desc: 'Pendampingan karya tulis ilmiah remaja (KIR), Olimpiade Sains Nasional (OSN), dan FLS2N'
      },
      {
        key: 'Aqidah kokoh & benteng pemikiran syubhat kontemporer',
        label: 'Keteguhan Aqidah & Literasi Pemikiran Kontemporer',
        desc: 'Benteng syubhat pemikiran liberal/sekuler dan pendalaman wawasan peradaban Islam'
      },
      {
        key: 'Public speaking & kemahiran diplomasi bahasa asing',
        label: 'Public Speaking, Debat & Diplomasi Internasional',
        desc: 'Kemahiran debat ilmiah, TOEFL/IELTS preparation, dan representasi forum pemuda'
      }
    ]
  }
};

const LEVEL_CHOICES = [
  'Sangat Diharapkan',
  'Cukup Diharapkan',
  'Kurang Diharapkan',
];

export const Step4UnitNeeds: React.FC<Step4Props> = ({ form }) => {
  const { watch, setValue } = form;
  const currentUnit = watch('unit') || 'SDIT';
  const unitSpecificNeeds = watch('unitSpecificNeeds') || {};
  const config = UNIT_CONFIGS[currentUnit];
  const Icon = config.icon;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 to-teal-800 text-white p-5 sm:p-6 rounded-2xl shadow-sm flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {config.badge}
          </div>
          <h3 className="text-lg sm:text-xl font-bold">{config.title}</h3>
          <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-xl">
            Harapan dan kebutuhan prioritas untuk jenjang {currentUnit} Ar-Rahmah. Berikan penilaian tingkat harapan Bapak/Ibu.
          </p>
        </div>
        <div className="hidden sm:flex p-3 rounded-xl bg-white/10 shrink-0">
          <Icon className="w-8 h-8 text-amber-300" />
        </div>
      </div>

      {/* Needs Checklist Grid */}
      <div className="space-y-3.5">
        {config.items.map((item) => {
          const currentVal = (unitSpecificNeeds as Record<string, string>)[item.key] || 'Sangat Diharapkan';

          return (
            <div
              key={item.key}
              className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-teal-300 transition"
            >
              <div className="md:max-w-md lg:max-w-xl">
                <h4 className="text-sm font-bold text-slate-900">{item.label}</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>

              <div className="grid grid-cols-3 gap-1.5 shrink-0 w-full md:w-auto">
                {LEVEL_CHOICES.map((choice) => {
                  const isSelected = currentVal === choice;
                  const isSangat = choice === 'Sangat Diharapkan';
                  const isCukup = choice === 'Cukup Diharapkan';

                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => {
                        setValue('unitSpecificNeeds', {
                          ...unitSpecificNeeds,
                          [item.key]: choice,
                        }, { shouldValidate: true });
                      }}
                      className={`text-xs font-semibold py-2 px-2.5 rounded-lg transition-all border text-center ${
                        isSelected
                          ? isSangat
                            ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                            : isCukup
                            ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                            : 'bg-slate-700 text-white border-slate-700'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {choice}
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
};
