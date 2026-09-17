'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { applicantAssessmentSchema, ApplicantAssessmentFormData, ApplicantAssessment } from '@/types/assessment';
import { saveAssessment, generateToken, getFormDraft, saveFormDraft, clearFormDraft } from '@/lib/storage';
import { Step1Profile } from '@/components/form/Step1Profile';
import { Step2Channels } from '@/components/form/Step2Channels';
import { Step3Expectations } from '@/components/form/Step3Expectations';
import { Step4UnitNeeds } from '@/components/form/Step4UnitNeeds';
import { Step5Inclusion } from '@/components/form/Step5Inclusion';
import { Step6NpsReview } from '@/components/form/Step6NpsReview';
import { SubmissionSuccess } from '@/components/form/SubmissionSuccess';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const STEPS = [
  { id: 1, title: 'Profil Siswa & Wali', short: 'Profil' },
  { id: 2, title: 'Saluran & Alasan', short: 'Saluran' },
  { id: 3, title: 'Ekspektasi Mutu', short: 'Mutu ISO' },
  { id: 4, title: 'Kebutuhan Jenjang', short: 'Jenjang' },
  { id: 5, title: 'Inklusi & Layanan', short: 'Inklusi' },
  { id: 6, title: 'NPS & Konfirmasi', short: 'Review' },
];

const DEFAULT_FORM_VALUES: ApplicantAssessmentFormData = {
  unit: 'SDIT',
  student: {
    fullName: '',
    nickname: '',
    gender: 'L',
    birthPlace: 'Makassar',
    birthDate: '',
    prevSchool: '',
    targetClass: 'Kelas 1',
  },
  parents: {
    fatherName: '',
    motherName: '',
    fatherJob: '',
    motherJob: '',
    whatsappFather: '',
    whatsappMother: '',
    address: '',
    district: 'Biringkanaya',
    city: 'Kota Makassar',
    distanceRadius: '<3km',
  },
  discoveryChannel: ['Referral Alumni/Teman'],
  primaryReasons: ['Karakter & Tahfidz'],
  generalExpectations: {
    islamicHabits: 5,
    adabAndEtiquette: 5,
    tahfidzQuality: 5,
    deepLearningApproach: 4,
    leadershipSkills: 4,
    digitalLearningTech: 4,
    zeroBullyingSafeEnv: 5,
    cleanliness5R: 5,
    physicalSecurityCCTV: 4,
    digitalAdminLMS: 4,
    parentCommunication: 5,
    financialTransparency: 4,
  },
  unitSpecificNeeds: {
    'Calistung menyenangkan tanpa paksaan': 'Sangat Diharapkan',
    'Target tahfidz juz 30 & 29 mutqin': 'Sangat Diharapkan',
    'Literasi & numerasi dasar berbasis proyek': 'Sangat Diharapkan',
    'Pembiasaan shalat berjamaah & dhuha': 'Sangat Diharapkan',
    'Ekskul bakat & minat (Robotics/Coding/Panahan)': 'Cukup Diharapkan',
  },
  specialEducationNeeds: {
    hasAllergiesOrIllness: false,
    allergyDetails: '',
    needsSpecialSupport: 'regular',
    specialSupportDetails: '',
    hobbiesAndTalents: '',
  },
  supportServices: {
    healthyCatering: false,
    schoolShuttle: false,
    daycareAfterSchool: false,
    parentSynergyCommitments: [
      'Menghadiri agenda rutin Sekolah Orang Tua (Parenting Class)',
      'Mendampingi muraja\'ah dan pembiasaan shalat 5 waktu di rumah',
    ],
  },
  parentMessage: '',
  npsScore: 10,
  internalVerification: {
    status: 'Pending',
  },
};

export default function PublicFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedAssessment, setCompletedAssessment] = useState<ApplicantAssessment | null>(null);

  const form = useForm<ApplicantAssessmentFormData>({
    resolver: zodResolver(applicantAssessmentSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    mode: 'onTouched',
  });

  // Load draft on mount
  useEffect(() => {
    const draft = getFormDraft<ApplicantAssessmentFormData>();
    if (draft) {
      form.reset(draft);
    }
  }, [form]);

  // Auto-save draft on values change
  useEffect(() => {
    const subscription = form.watch((values) => {
      saveFormDraft(values);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const validateStep = async (step: number): Promise<boolean> => {
    if (step === 1) {
      const result = await form.trigger(['unit', 'student', 'parents']);
      return result;
    }
    if (step === 2) {
      const result = await form.trigger(['discoveryChannel', 'primaryReasons']);
      return result;
    }
    if (step === 3) {
      const result = await form.trigger(['generalExpectations']);
      return result;
    }
    if (step === 4) {
      const result = await form.trigger(['unitSpecificNeeds']);
      return result;
    }
    if (step === 5) {
      const result = await form.trigger(['specialEducationNeeds', 'supportServices']);
      return result;
    }
    return true;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmitFinal = async () => {
    const isValid = await form.trigger();
    if (!isValid) {
      const errors = form.formState.errors;
      if (errors.unit || errors.student || errors.parents) setCurrentStep(1);
      else if (errors.discoveryChannel || errors.primaryReasons) setCurrentStep(2);
      else if (errors.generalExpectations) setCurrentStep(3);
      else if (errors.unitSpecificNeeds) setCurrentStep(4);
      else if (errors.specialEducationNeeds || errors.supportServices) setCurrentStep(5);
      return;
    }

    setIsSubmitting(true);
    try {
      const data = form.getValues();
      const token = generateToken(data.unit);
      const newAssessment: ApplicantAssessment = {
        ...data,
        id: token,
        createdAt: new Date().toISOString(),
        internalVerification: {
          status: 'Pending',
        },
      };

      saveAssessment(newAssessment);
      clearFormDraft();
      setCompletedAssessment(newAssessment);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (completedAssessment) {
    return (
      <main className="min-h-screen bg-slate-50 py-10">
        <SubmissionSuccess
          assessment={completedAssessment}
          onReset={() => {
            setCompletedAssessment(null);
            setCurrentStep(1);
            form.reset(DEFAULT_FORM_VALUES);
          }}
        />
      </main>
    );
  }

  const progressPercentage = Math.round((currentStep / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-square.png"
              alt="Logo SIT Ar-Rahmah"
              width={46}
              height={46}
              className="rounded-xl shadow-xs"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                  ISO 21001:2018
                </span>
                <span className="text-[11px] text-slate-500 font-medium">EOMS Certified</span>
              </div>
              <h1 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                SIT Ar-Rahmah Makassar
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-xs font-semibold px-3.5 py-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
            >
              Dashboard SPMB
            </Link>
          </div>
        </div>

        {/* Sticky Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-700 to-amber-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      {/* Main Form Container */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Step Indicator Header */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Langkah {currentStep} dari {STEPS.length}
              </span>
              <h2 className="text-base sm:text-xl font-black text-slate-900 mt-0.5">
                {STEPS[currentStep - 1].title}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400">Progres Pengisian:</span>
              <div className="text-base sm:text-lg font-black text-teal-800">{progressPercentage}%</div>
            </div>
          </div>

          {/* Stepper Dots / Badges */}
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
            {STEPS.map((s) => {
              const isPast = currentStep > s.id;
              const isCurrent = currentStep === s.id;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={async () => {
                    if (s.id < currentStep) {
                      setCurrentStep(s.id);
                    } else {
                      const valid = await validateStep(currentStep);
                      if (valid) setCurrentStep(s.id);
                    }
                  }}
                  className={`py-2 px-1 rounded-xl text-center transition flex flex-col items-center gap-1 ${
                    isCurrent
                      ? 'bg-teal-700 text-white font-bold shadow-xs'
                      : isPast
                      ? 'bg-teal-50 text-teal-900 border border-teal-200'
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950'
                      : isPast
                      ? 'bg-teal-700 text-white'
                      : 'bg-slate-300 text-slate-600'
                  }`}>
                    {isPast ? <Check className="w-3 h-3" /> : s.id}
                  </div>
                  <span className="text-[10px] hidden sm:block truncate max-w-full">
                    {s.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wizard Step Body */}
        <form onSubmit={(e) => e.preventDefault()}>
          {currentStep === 1 && <Step1Profile form={form} />}
          {currentStep === 2 && <Step2Channels form={form} />}
          {currentStep === 3 && <Step3Expectations form={form} />}
          {currentStep === 4 && <Step4UnitNeeds form={form} />}
          {currentStep === 5 && <Step5Inclusion form={form} />}
          {currentStep === 6 && (
            <Step6NpsReview
              form={form}
              onSubmitClick={handleSubmitFinal}
              isSubmitting={isSubmitting}
            />
          )}

          {/* Navigation Buttons (Steps 1 to 5) */}
          {currentStep < 6 && (
            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition ${
                  currentStep === 1
                    ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Sebelumnya
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-sm flex items-center gap-2 transition"
              >
                Selanjutnya
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">
          Sekolah Islam Terpadu (SIT) Ar-Rahmah Makassar &bull; Yayasan Ar-Rahmah Sulawesi
        </p>
        <p className="mt-1">
          Jl. Paccerakkang / Poros Biringkanaya, Makassar | Akreditasi Unggul | ISO 21001:2018 EOMS
        </p>
      </footer>
    </div>
  );
}
