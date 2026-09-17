import { z } from 'zod';

export type EducationalUnit = 'PAUD' | 'SDIT' | 'SMPIT' | 'SMAIT';
export type DistanceRadius = '<3km' | '3-5km' | '5-10km' | '>10km';
export type SENSupportType = 'regular' | 'needs_observation' | 'requires_iep_shadow';
export type VerificationStatus = 'Pending' | 'Reguler' | 'Butuh Remedial' | 'Perlu Observasi Inklusi' | 'Jalur Prestasi';

export interface StudentProfile {
  fullName: string;
  nickname: string;
  gender: 'L' | 'P';
  birthPlace: string;
  birthDate: string;
  prevSchool: string;
  targetClass: string;
}

export interface ParentProfile {
  fatherName: string;
  motherName: string;
  fatherJob: string;
  motherJob: string;
  whatsappFather: string;
  whatsappMother: string;
  address: string;
  district: string;
  city: string;
  distanceRadius: DistanceRadius;
}

export interface GeneralExpectations {
  islamicHabits: number;
  adabAndEtiquette: number;
  tahfidzQuality: number;
  deepLearningApproach: number;
  leadershipSkills: number;
  digitalLearningTech: number;
  zeroBullyingSafeEnv: number;
  cleanliness5R: number;
  physicalSecurityCCTV: number;
  digitalAdminLMS: number;
  parentCommunication: number;
  financialTransparency: number;
}

export interface SpecialEducationNeeds {
  hasAllergiesOrIllness: boolean;
  allergyDetails?: string;
  needsSpecialSupport: SENSupportType;
  specialSupportDetails?: string;
  hobbiesAndTalents: string;
}

export interface SupportServices {
  healthyCatering: boolean;
  schoolShuttle: boolean;
  daycareAfterSchool: boolean;
  parentSynergyCommitments: string[];
}

export interface InternalVerification {
  status: VerificationStatus;
  verifierName?: string;
  notes?: string;
  recommendedClass?: string;
  verifiedAt?: string;
}

export interface ApplicantAssessment {
  id: string;
  createdAt: string;
  unit: EducationalUnit;
  student: StudentProfile;
  parents: ParentProfile;
  discoveryChannel: string[];
  primaryReasons: string[];
  generalExpectations: GeneralExpectations;
  unitSpecificNeeds: Record<string, string>;
  specialEducationNeeds: SpecialEducationNeeds;
  supportServices: SupportServices;
  parentMessage: string;
  npsScore: number; // 0 - 10
  internalVerification: InternalVerification;
}

// Zod Validation Schema
export const applicantAssessmentSchema = z.object({
  id: z.string().optional(),
  createdAt: z.string().optional(),
  unit: z.enum(['PAUD', 'SDIT', 'SMPIT', 'SMAIT']),
  student: z.object({
    fullName: z.string().min(3, 'Nama lengkap minimal 3 karakter'),
    nickname: z.string().min(2, 'Nama panggilan wajib diisi'),
    gender: z.enum(['L', 'P']),
    birthPlace: z.string().min(2, 'Tempat lahir wajib diisi'),
    birthDate: z.string().min(1, 'Tanggal lahir wajib diisi'),
    prevSchool: z.string().min(2, 'Asal sekolah/kelompok bermain wajib diisi'),
    targetClass: z.string().min(1, 'Kelas yang dituju wajib diisi'),
  }),
  parents: z.object({
    fatherName: z.string().min(3, 'Nama Ayah wajib diisi'),
    motherName: z.string().min(3, 'Nama Ibu wajib diisi'),
    fatherJob: z.string().min(2, 'Pekerjaan Ayah wajib diisi'),
    motherJob: z.string().min(2, 'Pekerjaan Ibu wajib diisi'),
    whatsappFather: z.string().min(9, 'Nomor WhatsApp Ayah tidak valid'),
    whatsappMother: z.string().min(9, 'Nomor WhatsApp Ibu tidak valid'),
    address: z.string().min(5, 'Alamat lengkap wajib diisi'),
    district: z.string().min(2, 'Kecamatan wajib diisi (cth: Biringkanaya, Tamalanrea)'),
    city: z.string().min(2, 'Kota/Kabupaten wajib diisi'),
    distanceRadius: z.enum(['<3km', '3-5km', '5-10km', '>10km']),
  }),
  discoveryChannel: z.array(z.string()).min(1, 'Pilih minimal satu saluran informasi'),
  primaryReasons: z.array(z.string()).min(1, 'Pilih minimal 1 alasan').max(3, 'Maksimal memilih 3 alasan utama'),
  generalExpectations: z.object({
    islamicHabits: z.number().min(1).max(5),
    adabAndEtiquette: z.number().min(1).max(5),
    tahfidzQuality: z.number().min(1).max(5),
    deepLearningApproach: z.number().min(1).max(5),
    leadershipSkills: z.number().min(1).max(5),
    digitalLearningTech: z.number().min(1).max(5),
    zeroBullyingSafeEnv: z.number().min(1).max(5),
    cleanliness5R: z.number().min(1).max(5),
    physicalSecurityCCTV: z.number().min(1).max(5),
    digitalAdminLMS: z.number().min(1).max(5),
    parentCommunication: z.number().min(1).max(5),
    financialTransparency: z.number().min(1).max(5),
  }),
  unitSpecificNeeds: z.record(z.string(), z.string()),
  specialEducationNeeds: z.object({
    hasAllergiesOrIllness: z.boolean(),
    allergyDetails: z.string().optional(),
    needsSpecialSupport: z.enum(['regular', 'needs_observation', 'requires_iep_shadow']),
    specialSupportDetails: z.string().optional(),
    hobbiesAndTalents: z.string(),
  }),
  supportServices: z.object({
    healthyCatering: z.boolean(),
    schoolShuttle: z.boolean(),
    daycareAfterSchool: z.boolean(),
    parentSynergyCommitments: z.array(z.string()),
  }),
  parentMessage: z.string(),
  npsScore: z.number().min(0).max(10),
  internalVerification: z.object({
    status: z.enum(['Pending', 'Reguler', 'Butuh Remedial', 'Perlu Observasi Inklusi', 'Jalur Prestasi']),
    verifierName: z.string().optional(),
    notes: z.string().optional(),
    recommendedClass: z.string().optional(),
    verifiedAt: z.string().optional(),
  }),
});

export type ApplicantAssessmentFormData = z.infer<typeof applicantAssessmentSchema>;
