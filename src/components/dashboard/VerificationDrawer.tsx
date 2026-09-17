'use client';

import React, { useState } from 'react';
import { ApplicantAssessment, VerificationStatus } from '@/types/assessment';
import { updateAssessmentVerification } from '@/lib/storage';
import {
  X,
  CheckCircle2,
  Phone,
  Calendar,
  MapPin,
  HeartPulse,
  Award,
  Save,
  UserCheck,
  Building,
} from 'lucide-react';

interface VerificationDrawerProps {
  assessment: ApplicantAssessment | null;
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
}

const STATUS_OPTIONS: VerificationStatus[] = [
  'Pending',
  'Reguler',
  'Jalur Prestasi',
  'Perlu Observasi Inklusi',
  'Butuh Remedial',
];

export const VerificationDrawer: React.FC<VerificationDrawerProps> = ({
  assessment,
  isOpen,
  onClose,
  onSaved,
}) => {
  if (!isOpen || !assessment) return null;

  const [status, setStatus] = useState<VerificationStatus>(
    assessment.internalVerification.status || 'Pending'
  );
  const [recommendedClass, setRecommendedClass] = useState(
    assessment.internalVerification.recommendedClass || ''
  );
  const [verifierName, setVerifierName] = useState(
    assessment.internalVerification.verifierName || 'Ustadz Tim Penguji SPMB'
  );
  const [notes, setNotes] = useState(
    assessment.internalVerification.notes || ''
  );
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    updateAssessmentVerification(assessment.id, {
      status,
      recommendedClass,
      verifierName,
      notes,
    });
    setIsSaving(false);
    onSaved();
    onClose();
  };

  const cleanPhone = (phone: string) => {
    return phone.replace(/[^0-9]/g, '');
  };

  const waNumber = cleanPhone(assessment.parents.whatsappFather || assessment.parents.whatsappMother);
  const waLink = `https://wa.me/62${waNumber.startsWith('0') ? waNumber.slice(1) : waNumber}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col overflow-hidden">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                {assessment.id}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                {assessment.unit}
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Lembar Verifikasi Internal SPMB
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-xs sm:text-sm text-slate-700">
          {/* 1. Student & Parent Summary */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {assessment.student.fullName} ({assessment.student.nickname})
                </h3>
                <p className="text-slate-500 text-xs">
                  {assessment.student.gender === 'L' ? 'Laki-laki (Ikhwan)' : 'Perempuan (Akhwat)'} &bull; Lahir di {assessment.student.birthPlace}, {assessment.student.birthDate}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Asal Sekolah: <strong>{assessment.student.prevSchool}</strong> &rarr; Target: <strong>{assessment.student.targetClass}</strong>
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Chat WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block">Ayah:</span>
                <span className="font-semibold text-slate-800">{assessment.parents.fatherName}</span> ({assessment.parents.fatherJob})
              </div>
              <div>
                <span className="text-slate-400 block">Ibu:</span>
                <span className="font-semibold text-slate-800">{assessment.parents.motherName}</span> ({assessment.parents.motherJob})
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block">Alamat Domisili & Zonasi:</span>
                <span className="font-semibold text-slate-800">{assessment.parents.address}</span> ({assessment.parents.district}, {assessment.parents.city}) &bull; Radius: <strong>{assessment.parents.distanceRadius}</strong>
              </div>
            </div>
          </div>

          {/* 2. Key Assessment Findings */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-teal-700" />
              Temuan Asesmen & Ekspektasi Orang Tua
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 text-xs block">Net Promoter Score (NPS):</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xl font-black text-teal-800">{assessment.npsScore}/10</span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {assessment.npsScore >= 9 ? 'Promoter' : assessment.npsScore >= 7 ? 'Passive' : 'Detractor'}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 text-xs block">Status Kebutuhan Inklusi (SEN):</span>
                <div className="mt-0.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    assessment.specialEducationNeeds.needsSpecialSupport === 'requires_iep_shadow'
                      ? 'bg-rose-100 text-rose-800'
                      : assessment.specialEducationNeeds.needsSpecialSupport === 'needs_observation'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {assessment.specialEducationNeeds.needsSpecialSupport === 'requires_iep_shadow'
                      ? 'IEP + Shadow'
                      : assessment.specialEducationNeeds.needsSpecialSupport === 'needs_observation'
                      ? 'Perlu Observasi'
                      : 'Reguler Mandiri'}
                  </span>
                </div>
              </div>
            </div>

            {assessment.specialEducationNeeds.specialSupportDetails && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                <span className="font-bold block mb-0.5">Detail Kebutuhan Khusus / Diagnosa:</span>
                {assessment.specialEducationNeeds.specialSupportDetails}
              </div>
            )}

            {assessment.specialEducationNeeds.hasAllergiesOrIllness && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900">
                <span className="font-bold block mb-0.5">Riwayat Alergi / Sakit:</span>
                {assessment.specialEducationNeeds.allergyDetails}
              </div>
            )}

            {assessment.parentMessage && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-0.5">Harapan Pribadi Orang Tua:</span>
                &ldquo;{assessment.parentMessage}&rdquo;
              </div>
            )}
          </div>

          {/* 3. Verification Form (Editable by Admin) */}
          <div className="p-5 bg-teal-50/70 border-2 border-teal-600/30 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-teal-200">
              <UserCheck className="w-4 h-4 text-teal-800" />
              <h4 className="font-bold text-teal-950 text-sm">Form Keputusan Verifikasi SPMB</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Status Kelulusan / Jalur Masuk:
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as VerificationStatus)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  {STATUS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Rekomendasi Kelas / Rombel:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 1 Khalifah Abu Bakar"
                  value={recommendedClass}
                  onChange={(e) => setRecommendedClass(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Nama Petugas Verifikator / Pewawancara:
                </label>
                <input
                  type="text"
                  placeholder="Nama ustadz / tim psikolog pemeriksa"
                  value={verifierName}
                  onChange={(e) => setVerifierName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Catatan Wawancara / Hasil Observasi Kesiapan Belajar:
                </label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan catatan hasil tes bacaan Wafa, kemandirian siswa, komitmen infaq/parenting orang tua, atau rujukan terapis."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
          >
            Batal
          </button>
          <button
            type="button"
            disabled={isSaving}
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm transition shadow-sm flex items-center gap-1.5"
          >
            <Save className="w-4 h-4" />
            {isSaving ? 'Menyimpan...' : 'Simpan Verifikasi'}
          </button>
        </div>
      </div>
    </div>
  );
};
