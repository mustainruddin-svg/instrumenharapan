import { ApplicantAssessment } from '@/types/assessment';

export function exportToCSV(data: ApplicantAssessment[], filename = 'Audit_ISO_21001_SIT_ArRahmah.csv') {
  if (!data || data.length === 0) return;

  const headers = [
    'No',
    'Token ID',
    'Tanggal Pendaftaran',
    'Jenjang',
    'Nama Lengkap Siswa',
    'Nama Panggilan',
    'Gender',
    'Tempat Lahir',
    'Tanggal Lahir',
    'Asal Sekolah',
    'Target Kelas',
    'Nama Ayah',
    'Pekerjaan Ayah',
    'WhatsApp Ayah',
    'Nama Ibu',
    'Pekerjaan Ibu',
    'WhatsApp Ibu',
    'Alamat Lengkap',
    'Kecamatan',
    'Kota',
    'Radius Zonasi',
    'Saluran Informasi',
    'Alasan Utama Memilih',
    'Kebutuhan Inklusi (SEN)',
    'Detail Inklusi',
    'Status Alergi/Penyakit',
    'Layanan Katering',
    'Layanan Antar-Jemput',
    'Layanan Daycare',
    'Skor NPS (0-10)',
    'Kategori NPS',
    'Status Verifikasi SPMB',
    'Kelas Rekomendasi',
    'Petugas Verifikator',
    'Catatan Verifikasi/Wawancara'
  ];

  const rows = data.map((item, idx) => {
    const npsCategory = item.npsScore >= 9 ? 'Promoter' : item.npsScore >= 7 ? 'Passive' : 'Detractor';
    const senLabel = item.specialEducationNeeds.needsSpecialSupport === 'requires_iep_shadow' 
      ? 'IEP + Shadow Teacher'
      : item.specialEducationNeeds.needsSpecialSupport === 'needs_observation'
      ? 'Perlu Observasi Psikolog'
      : 'Reguler';

    return [
      idx + 1,
      `"${item.id}"`,
      `"${new Date(item.createdAt).toLocaleDateString('id-ID')}"`,
      `"${item.unit}"`,
      `"${item.student.fullName.replace(/"/g, '""')}"`,
      `"${item.student.nickname.replace(/"/g, '""')}"`,
      `"${item.student.gender === 'L' ? 'Laki-laki' : 'Perempuan'}"`,
      `"${item.student.birthPlace}"`,
      `"${item.student.birthDate}"`,
      `"${item.student.prevSchool.replace(/"/g, '""')}"`,
      `"${item.student.targetClass}"`,
      `"${item.parents.fatherName.replace(/"/g, '""')}"`,
      `"${item.parents.fatherJob.replace(/"/g, '""')}"`,
      `"'\t${item.parents.whatsappFather}"`,
      `"${item.parents.motherName.replace(/"/g, '""')}"`,
      `"${item.parents.motherJob.replace(/"/g, '""')}"`,
      `"'\t${item.parents.whatsappMother}"`,
      `"${item.parents.address.replace(/"/g, '""')}"`,
      `"${item.parents.district}"`,
      `"${item.parents.city}"`,
      `"${item.parents.distanceRadius}"`,
      `"${item.discoveryChannel.join(', ')}"`,
      `"${item.primaryReasons.join(', ')}"`,
      `"${senLabel}"`,
      `"${(item.specialEducationNeeds.specialSupportDetails || '-').replace(/"/g, '""')}"`,
      `"${item.specialEducationNeeds.hasAllergiesOrIllness ? (item.specialEducationNeeds.allergyDetails || 'Ada alergi').replace(/"/g, '""') : 'Tidak Ada'}"`,
      `"${item.supportServices.healthyCatering ? 'Ya' : 'Tidak'}"`,
      `"${item.supportServices.schoolShuttle ? 'Ya' : 'Tidak'}"`,
      `"${item.supportServices.daycareAfterSchool ? 'Ya' : 'Tidak'}"`,
      item.npsScore,
      `"${npsCategory}"`,
      `"${item.internalVerification.status}"`,
      `"${(item.internalVerification.recommendedClass || '-').replace(/"/g, '""')}"`,
      `"${(item.internalVerification.verifierName || '-').replace(/"/g, '""')}"`,
      `"${(item.internalVerification.notes || '-').replace(/"/g, '""')}"`
    ].join(';');
  });

  const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
