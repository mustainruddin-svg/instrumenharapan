import { ApplicantAssessment } from '@/types/assessment';
import { INITIAL_MOCK_APPLICANTS } from './mock-data';

const STORAGE_KEY = 'spmb_arrahmah_assessments_v1';
const DRAFT_KEY = 'spmb_arrahmah_form_draft_v1';

export function getStoredAssessments(): ApplicantAssessment[] {
  if (typeof window === 'undefined') {
    return INITIAL_MOCK_APPLICANTS;
  }
  
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MOCK_APPLICANTS));
      return INITIAL_MOCK_APPLICANTS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error loading stored assessments:', err);
    return INITIAL_MOCK_APPLICANTS;
  }
}

export function saveAssessment(assessment: ApplicantAssessment): ApplicantAssessment {
  if (typeof window === 'undefined') return assessment;
  
  const current = getStoredAssessments();
  const updated = [assessment, ...current.filter((item) => item.id !== assessment.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  
  // Trigger custom event for real-time reactivity
  window.dispatchEvent(new Event('spmb_data_changed'));
  return assessment;
}

export function updateAssessmentVerification(
  id: string,
  verification: ApplicantAssessment['internalVerification']
): boolean {
  if (typeof window === 'undefined') return false;
  
  const current = getStoredAssessments();
  const index = current.findIndex((item) => item.id === id);
  if (index === -1) return false;
  
  current[index].internalVerification = {
    ...current[index].internalVerification,
    ...verification,
    verifiedAt: new Date().toISOString(),
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  window.dispatchEvent(new Event('spmb_data_changed'));
  return true;
}

export function resetToInitialData(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MOCK_APPLICANTS));
  window.dispatchEvent(new Event('spmb_data_changed'));
}

export function getFormDraft<T>(): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveFormDraft<T>(data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  } catch {
    // Ignore quota errors
  }
}

export function clearFormDraft(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(DRAFT_KEY);
}

export function generateToken(unit: string): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ARM-${year}-${unit}-${random}`;
}
