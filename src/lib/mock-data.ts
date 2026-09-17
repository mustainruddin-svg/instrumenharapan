import { ApplicantAssessment } from '@/types/assessment';

export const INITIAL_MOCK_APPLICANTS: ApplicantAssessment[] = [
  {
    id: "ARM-2026-001",
    createdAt: "2026-09-10T08:15:00.000Z",
    unit: "SDIT",
    student: {
      fullName: "Muhammad Fathan Al-Ghifari",
      nickname: "Fathan",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2019-05-14",
      prevSchool: "TK Islam Terpadu Ar-Rahmah",
      targetClass: "Kelas 1"
    },
    parents: {
      fatherName: "Dr. Ir. Andi Syahrul Maulana, M.T.",
      motherName: "Nurul Annisa, S.Farm., Apt.",
      fatherJob: "Dosen UNHAS",
      motherJob: "Apoteker RS Wahidin",
      whatsappFather: "08114423891",
      whatsappMother: "08124119832",
      address: "Kompleks Dosen Unhas Tamalanrea Blok G No. 12",
      district: "Tamalanrea",
      city: "Kota Makassar",
      distanceRadius: "3-5km"
    },
    discoveryChannel: ["Referral Alumni/Teman", "Instagram/Medsos"],
    primaryReasons: ["Karakter & Tahfidz", "Zero Bullying & Aman", "Fasilitas & 5R"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 5,
      deepLearningApproach: 4,
      leadershipSkills: 4,
      digitalLearningTech: 4,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 5,
      digitalAdminLMS: 4,
      parentCommunication: 5,
      financialTransparency: 5
    },
    unitSpecificNeeds: {
      "Calistung menyenangkan tanpa paksaan": "Sangat Diharapkan",
      "Target tahfidz juz 30 & 29 mutqin": "Sangat Diharapkan",
      "Literasi & numerasi dasar berbasis proyek": "Sangat Diharapkan",
      "Pembiasaan shalat berjamaah & dhuha": "Sangat Diharapkan",
      "Ekskul bakat & minat (Robotics/Coding/Panahan)": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Menggambar lego, gemar menghafal surat pendek"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah", "Menjaga Keselarasan Adab"]
    },
    parentMessage: "Mohon bimbingan ananda agar tetap ceria namun tertib dalam adab dan ibadah harian.",
    npsScore: 10,
    internalVerification: {
      status: "Reguler",
      verifierName: "Arman, S.Pd.I., M.M., Gr. (Kepala SDIT)",
      notes: "Ananda sudah lolos tes kesiapan baca wafa level 2, sosialisasi mandiri sangat baik.",
      recommendedClass: "1 Khalifah Abu Bakar",
      verifiedAt: "2026-09-11T10:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-002",
    createdAt: "2026-09-11T09:30:00.000Z",
    unit: "SMPIT",
    student: {
      fullName: "Aisyah Nur Ramadhani",
      nickname: "Aisyah",
      gender: "P",
      birthPlace: "Makassar",
      birthDate: "2013-08-20",
      prevSchool: "SDIT Ar-Rahmah Makassar",
      targetClass: "Kelas 7"
    },
    parents: {
      fatherName: "H. Muhammad Ilham, S.E.",
      motherName: "Hj. Ratna Dewi, S.Pd.",
      fatherJob: "Wiraswasta / Pengusaha Ekspedisi",
      motherJob: "Guru SMA Negeri",
      whatsappFather: "081355671234",
      whatsappMother: "081355671235",
      address: "Jl. Poros Paccerakkang No. 88, Biringkanaya",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "<3km"
    },
    discoveryChannel: ["Referral Alumni/Teman"],
    primaryReasons: ["Karakter & Tahfidz", "Leadership Curriculum", "Guru Ramah"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 5,
      deepLearningApproach: 5,
      leadershipSkills: 5,
      digitalLearningTech: 4,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 4,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Adab pergaulan islami & penjagaan hijab akhwat": "Sangat Diharapkan",
      "Tahfidz 2-3 juz mutqin bersanad": "Sangat Diharapkan",
      "Pembelajaran Higher Order Thinking Skills (HOTS)": "Sangat Diharapkan",
      "Leadership Camp & Public Speaking": "Sangat Diharapkan",
      "Laboratorium Sains & Bahasa aktif": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: true,
      allergyDetails: "Alergi debu & asma ringan kambuh saat kelelahan",
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Pidato bahasa Inggris, menulis cerpen"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: true,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah", "Kemitraan Evaluasi Belajar"]
    },
    parentMessage: "Sangat percaya dengan pembinaan karakter di Ar-Rahmah karena kakaknya juga alumni.",
    npsScore: 10,
    internalVerification: {
      status: "Jalur Prestasi",
      verifierName: "Galuh Prameswari Nuswantoro, M.Pd.",
      notes: "Siswa berprestasi OSN Matematika tingkat kota Makassar, hafalan sudah 4 Juz.",
      recommendedClass: "7 Akhwat Thariq bin Ziyad",
      verifiedAt: "2026-09-12T14:30:00.000Z"
    }
  },
  {
    id: "ARM-2026-003",
    createdAt: "2026-09-12T11:00:00.000Z",
    unit: "PAUD",
    student: {
      fullName: "Kenzi Alvaro Rahman",
      nickname: "Kenzi",
      gender: "L",
      birthPlace: "Gowa",
      birthDate: "2022-10-05",
      prevSchool: "Belum pernah sekolah",
      targetClass: "Daycare & Playgroup"
    },
    parents: {
      fatherName: "Rezky Ramadhan, S.T.",
      motherName: "Indah Permatasari, S.E.",
      fatherJob: "Pegawai BUMN Pertamina",
      motherJob: "Banker Mandiri",
      whatsappFather: "082188997766",
      whatsappMother: "082188997755",
      address: "Perumahan Bukit Khatulistiwa II Blok D No. 5",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "<3km"
    },
    discoveryChannel: ["Instagram/Medsos", "Website/Google"],
    primaryReasons: ["Zero Bullying & Aman", "Fasilitas & 5R", "Guru Ramah"],
    generalExpectations: {
      islamicHabits: 4,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 4,
      leadershipSkills: 4,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 5,
      digitalAdminLMS: 5,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Stimulasi motorik kasar & halus terarah": "Sangat Diharapkan",
      "Kemandirian toilet training & makan sendiri": "Sangat Diharapkan",
      "Pengenalan Al-Qur'an metode wafa ceria": "Sangat Diharapkan",
      "Transisi adaptasi sosial ramah anak": "Sangat Diharapkan",
      "Monitoring gizi & konsultasi dokter tumbuh kembang": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "needs_observation",
      specialSupportDetails: "Speech delay ringan, kata yang diucapkan masih terbatas 2 kata.",
      hobbiesAndTalents: "Suka bermain air dan menyusun balok mobil"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: false,
      daycareAfterSchool: true,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Kemitraan Evaluasi Belajar"]
    },
    parentMessage: "Mohon bantuan terapi wicara dan stimulasi bahasa bersama teman-teman seusianya.",
    npsScore: 9,
    internalVerification: {
      status: "Perlu Observasi Inklusi",
      verifierName: "Sri Ernawati, S.Pd.I (Kepala PAUD)",
      notes: "Perlu sesi asesmen psikolog perkembangan anak bersama tim terapis wicara mitra Yayasan.",
      recommendedClass: "PAUD Sultan Hasanuddin",
      verifiedAt: "2026-09-13T09:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-004",
    createdAt: "2026-09-12T14:20:00.000Z",
    unit: "SMAIT",
    student: {
      fullName: "Fakhri Ahmad Baihaqi",
      nickname: "Fakhri",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2010-02-17",
      prevSchool: "SMP Negeri 12 Makassar",
      targetClass: "Kelas 10"
    },
    parents: {
      fatherName: "H. Ridwan Said, S.Sos.",
      motherName: "Hj. Wardiah, S.E.",
      fatherJob: "PNS Pemprov Sulsel",
      motherJob: "PNS Dinas Pendidikan",
      whatsappFather: "081242334455",
      whatsappMother: "081242334466",
      address: "Kompleks Perumahan Telkomas Blok B3 No. 19",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "3-5km"
    },
    discoveryChannel: ["Referral Alumni/Teman", "Event"],
    primaryReasons: ["Prestasi & Lulus PTN", "Karakter & Tahfidz", "Leadership Curriculum"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 5,
      leadershipSkills: 5,
      digitalLearningTech: 5,
      zeroBullyingSafeEnv: 4,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 4,
      parentCommunication: 4,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Program sukses tembus PTN Favorit (SNBP/SNBT/Kedokteran/ITB)": "Sangat Diharapkan",
      "Konseling peminatan karier & psikotes terstruktur": "Sangat Diharapkan",
      "Portofolio riset & lomba kurasi Puspresnas": "Sangat Diharapkan",
      "Aqidah kokoh & benteng pemikiran syubhat kontemporer": "Sangat Diharapkan",
      "Public speaking & kemahiran diplomasi bahasa asing": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Coding Python, olimpiade astronomi, futsal"
    },
    supportServices: {
      healthyCatering: false,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Menjaga Keselarasan Adab"]
    },
    parentMessage: "Ingin ananda dipersiapkan masuk Fakultas Kedokteran UNHAS dengan tetap hafiz Al-Qur'an.",
    npsScore: 9,
    internalVerification: {
      status: "Reguler",
      verifierName: "Muslim Mubarok, M.Pd. Gr. (Kepala SMAIT)",
      notes: "Nilai rapor SMP rata-rata 91.5, kemampuan matematika dasar sangat baik.",
      recommendedClass: "10 IPA Al-Khawarizmi",
      verifiedAt: "2026-09-13T16:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-005",
    createdAt: "2026-09-13T08:00:00.000Z",
    unit: "SDIT",
    student: {
      fullName: "Maryam Khalilah Azzahra",
      nickname: "Maryam",
      gender: "P",
      birthPlace: "Makassar",
      birthDate: "2019-11-12",
      prevSchool: "TK Kartika Makassar",
      targetClass: "Kelas 1"
    },
    parents: {
      fatherName: "Agus Salim, S.Kom.",
      motherName: "Siti Rahmawati, S.Tr.Keb",
      fatherJob: "IT Consultant",
      motherJob: "Bidan Mandiri",
      whatsappFather: "085299001122",
      whatsappMother: "085299001133",
      address: "Bumi Tamalanrea Permai (BTP) Blok M No. 44",
      district: "Tamalanrea",
      city: "Kota Makassar",
      distanceRadius: "5-10km"
    },
    discoveryChannel: ["Instagram/Medsos", "Brosur/Spanduk"],
    primaryReasons: ["Zero Bullying & Aman", "Karakter & Tahfidz", "Guru Ramah"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 4,
      leadershipSkills: 3,
      digitalLearningTech: 4,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 5,
      digitalAdminLMS: 5,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Calistung menyenangkan tanpa paksaan": "Sangat Diharapkan",
      "Target tahfidz juz 30 & 29 mutqin": "Sangat Diharapkan",
      "Literasi & numerasi dasar berbasis proyek": "Sangat Diharapkan",
      "Pembiasaan shalat berjamaah & dhuha": "Sangat Diharapkan",
      "Ekskul bakat & minat (Robotics/Coding/Panahan)": "Kurang Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Menari islami, mewarnai gambar"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: true,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah"]
    },
    parentMessage: "Kami memilih Ar-Rahmah karena rekam jejak anti bullying dan keramahan gurunya.",
    npsScore: 8,
    internalVerification: {
      status: "Reguler",
      verifierName: "Masram, S.Pd., Gr. (Wakasis SDIT)",
      notes: "Wawancara orang tua sangat kooperatif, ananda siap belajar mandiri.",
      recommendedClass: "1 Khalifah Umar",
      verifiedAt: "2026-09-14T11:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-006",
    createdAt: "2026-09-13T10:45:00.000Z",
    unit: "SDIT",
    student: {
      fullName: "Ahmad Ziyad Al-Baqir",
      nickname: "Ziyad",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2019-03-25",
      prevSchool: "TK Aisyiyah Daya",
      targetClass: "Kelas 1"
    },
    parents: {
      fatherName: "Bambang Sudarsono, S.T.",
      motherName: "Hartati, S.E.",
      fatherJob: "Supervisor Pabrik KIMA",
      motherJob: "Ibu Rumah Tangga",
      whatsappFather: "081341882233",
      whatsappMother: "081341882244",
      address: "Komp. KIMA Daya Permai Blok C No. 10",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "3-5km"
    },
    discoveryChannel: ["Referral Alumni/Teman"],
    primaryReasons: ["Karakter & Tahfidz", "Zero Bullying & Aman", "Guru Ramah"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 3,
      leadershipSkills: 3,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 3,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Calistung menyenangkan tanpa paksaan": "Sangat Diharapkan",
      "Target tahfidz juz 30 & 29 mutqin": "Sangat Diharapkan",
      "Literasi & numerasi dasar berbasis proyek": "Cukup Diharapkan",
      "Pembiasaan shalat berjamaah & dhuha": "Sangat Diharapkan",
      "Ekskul bakat & minat (Robotics/Coding/Panahan)": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "requires_iep_shadow",
      specialSupportDetails: "Diagnosis ASD (Spektrum Autisme) ringan teratur terapi sensori integrasi sejak usia 4 tahun.",
      hobbiesAndTalents: "Menyusun puzzle kompleks, daya ingat visual sangat tinggi"
    },
    supportServices: {
      healthyCatering: false,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah", "Menyediakan Guru Pendamping (Shadow Teacher)"]
    },
    parentMessage: "Mohon pertimbangan untuk inklusi anak kami dengan penyediaan guru pendamping dari keluarga.",
    npsScore: 10,
    internalVerification: {
      status: "Perlu Observasi Inklusi",
      verifierName: "Arman, S.Pd.I., M.M., Gr. & Tim Psikolog",
      notes: "Perlu evaluasi psikologis lebih dalam untuk IEP dan penempatan kelas bersama shadow teacher.",
      recommendedClass: "1 Khalifah Ali (Inklusi Terbatas)",
      verifiedAt: "2026-09-14T15:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-007",
    createdAt: "2026-09-14T08:30:00.000Z",
    unit: "SMPIT",
    student: {
      fullName: "Bilal Habibi Ramadhan",
      nickname: "Bilal",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2013-06-11",
      prevSchool: "SD Inpres Daya",
      targetClass: "Kelas 7"
    },
    parents: {
      fatherName: "M. Yusuf, S.Pd.",
      motherName: "Fitriani, S.Pd.",
      fatherJob: "Guru SMP Negeri",
      motherJob: "Guru SD",
      whatsappFather: "085340112288",
      whatsappMother: "085340112299",
      address: "Jl. Perintis Kemerdekaan KM 14 No. 45",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "3-5km"
    },
    discoveryChannel: ["Referral Alumni/Teman", "Brosur/Spanduk"],
    primaryReasons: ["Karakter & Tahfidz", "Leadership Curriculum", "Zero Bullying & Aman"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 5,
      deepLearningApproach: 4,
      leadershipSkills: 4,
      digitalLearningTech: 4,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 3,
      parentCommunication: 4,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Adab pergaulan islami & penjagaan pergaulan remaja": "Sangat Diharapkan",
      "Tahfidz 2-3 juz mutqin bersanad": "Sangat Diharapkan",
      "Pembelajaran Higher Order Thinking Skills (HOTS)": "Cukup Diharapkan",
      "Leadership Camp & Public Speaking": "Sangat Diharapkan",
      "Laboratorium Sains & Bahasa aktif": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Futsal, pidato bahasa Arab"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah"]
    },
    parentMessage: "Ingin anak kami kuat hafalan dan terlindung dari tawuran serta kenakalan remaja.",
    npsScore: 9,
    internalVerification: {
      status: "Reguler",
      verifierName: "Muhammad Said Almurtadho, M.Pd.",
      notes: "Tes bacaan wafa lulus tajwid dasar, wawancara motivasi anak sangat antusias.",
      recommendedClass: "7 Ikhwan Al-Farabi",
      verifiedAt: "2026-09-14T16:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-008",
    createdAt: "2026-09-14T11:15:00.000Z",
    unit: "SMAIT",
    student: {
      fullName: "Najwa Shihab Syam",
      nickname: "Najwa",
      gender: "P",
      birthPlace: "Maros",
      birthDate: "2010-09-04",
      prevSchool: "SMPIT Ar-Rahmah Makassar",
      targetClass: "Kelas 10"
    },
    parents: {
      fatherName: "H. Syamsuddin, S.E., M.Si.",
      motherName: "Hj. Rosdiana, S.H.",
      fatherJob: "Anggota DPRD Maros",
      motherJob: "Notaris",
      whatsappFather: "08114199001",
      whatsappMother: "08114199002",
      address: "Jl. Poros Maros-Makassar KM 20",
      district: "Mandai",
      city: "Kabupaten Maros",
      distanceRadius: ">10km"
    },
    discoveryChannel: ["Referral Alumni/Teman"],
    primaryReasons: ["Prestasi & Lulus PTN", "Leadership Curriculum", "Karakter & Tahfidz"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 5,
      leadershipSkills: 5,
      digitalLearningTech: 5,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 5,
      digitalAdminLMS: 5,
      parentCommunication: 5,
      financialTransparency: 5
    },
    unitSpecificNeeds: {
      "Program sukses tembus PTN Favorit (SNBP/SNBT/Kedokteran/ITB)": "Sangat Diharapkan",
      "Konseling peminatan karier & psikotes terstruktur": "Sangat Diharapkan",
      "Portofolio riset & lomba kurasi Puspresnas": "Sangat Diharapkan",
      "Aqidah kokoh & benteng pemikiran syubhat kontemporer": "Sangat Diharapkan",
      "Public speaking & kemahiran diplomasi bahasa asing": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Debat bahasa Inggris, karya ilmiah remaja, jurnalistik"
    },
    supportServices: {
      healthyCatering: false,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Kemitraan Evaluasi Belajar"]
    },
    parentMessage: "Mendukung penuh kelanjutan ananda di SMAIT Ar-Rahmah hingga sukses masuk UI atau UGM.",
    npsScore: 10,
    internalVerification: {
      status: "Jalur Prestasi",
      verifierName: "Muslim Mubarok, M.Pd. Gr.",
      notes: "Alumni berprestasi SMPIT Ar-Rahmah, rekam jejak kepemimpinan OSIS sangat unggul.",
      recommendedClass: "10 IPA Aisyah",
      verifiedAt: "2026-09-15T09:30:00.000Z"
    }
  },
  {
    id: "ARM-2026-009",
    createdAt: "2026-09-14T13:40:00.000Z",
    unit: "PAUD",
    student: {
      fullName: "Khaira Lubna Al-Ghazali",
      nickname: "Khaira",
      gender: "P",
      birthPlace: "Makassar",
      birthDate: "2021-04-18",
      prevSchool: "Belum pernah sekolah",
      targetClass: "TK-A"
    },
    parents: {
      fatherName: "Faisal Tanjung, S.T.",
      motherName: "Rina Marlina, S.Pd.",
      fatherJob: "Arsitek Swasta",
      motherJob: "Desainer Interior",
      whatsappFather: "081244558811",
      whatsappMother: "081244558822",
      address: "BTP Blok AC No. 27, Tamalanrea",
      district: "Tamalanrea",
      city: "Kota Makassar",
      distanceRadius: "5-10km"
    },
    discoveryChannel: ["Instagram/Medsos"],
    primaryReasons: ["Guru Ramah", "Zero Bullying & Aman", "Fasilitas & 5R"],
    generalExpectations: {
      islamicHabits: 4,
      adabAndEtiquette: 5,
      tahfidzQuality: 3,
      deepLearningApproach: 4,
      leadershipSkills: 3,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 4,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Stimulasi motorik kasar & halus terarah": "Sangat Diharapkan",
      "Kemandirian toilet training & makan sendiri": "Sangat Diharapkan",
      "Pengenalan Al-Qur'an metode wafa ceria": "Sangat Diharapkan",
      "Transisi adaptasi sosial ramah anak": "Sangat Diharapkan",
      "Monitoring gizi & konsultasi dokter tumbuh kembang": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: true,
      allergyDetails: "Alergi susu sapi dan makanan laut (seafood)",
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Menggambar, menyanyi nasyid"
    },
    supportServices: {
      healthyCatering: false,
      schoolShuttle: true,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin"]
    },
    parentMessage: "Mohon pengawasan menu makanan karena anak memiliki alergi ketat seafood.",
    npsScore: 9,
    internalVerification: {
      status: "Reguler",
      verifierName: "Sri Ernawati, S.Pd.I",
      notes: "Anak sangat ramah, catatan alergi dicatat untuk bekal mandiri.",
      recommendedClass: "TK-A Sultan Malukkussaid",
      verifiedAt: "2026-09-15T11:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-010",
    createdAt: "2026-09-14T15:00:00.000Z",
    unit: "SDIT",
    student: {
      fullName: "Ghaisan Rafaeyza Putra",
      nickname: "Rafa",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2019-07-09",
      prevSchool: "TK Pertiwi Makassar",
      targetClass: "Kelas 1"
    },
    parents: {
      fatherName: "Hendrik Prasetyo, S.E.",
      motherName: "Maya Sari, S.E.",
      fatherJob: "Manager Retail Carrefour",
      motherJob: "Admin Logistik",
      whatsappFather: "082190113344",
      whatsappMother: "082190113355",
      address: "Kompleks Griya Maros Indah Blok A2",
      district: "Maros Baru",
      city: "Kabupaten Maros",
      distanceRadius: ">10km"
    },
    discoveryChannel: ["Website/Google", "Instagram/Medsos"],
    primaryReasons: ["Fasilitas & 5R", "Karakter & Tahfidz", "Zero Bullying & Aman"],
    generalExpectations: {
      islamicHabits: 4,
      adabAndEtiquette: 4,
      tahfidzQuality: 4,
      deepLearningApproach: 3,
      leadershipSkills: 3,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 4,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 3,
      parentCommunication: 4,
      financialTransparency: 3
    },
    unitSpecificNeeds: {
      "Calistung menyenangkan tanpa paksaan": "Sangat Diharapkan",
      "Target tahfidz juz 30 & 29 mutqin": "Cukup Diharapkan",
      "Literasi & numerasi dasar berbasis proyek": "Sangat Diharapkan",
      "Pembiasaan shalat berjamaah & dhuha": "Sangat Diharapkan",
      "Ekskul bakat & minat (Robotics/Coding/Panahan)": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Bermain sepeda, berenang"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: true,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin"]
    },
    parentMessage: "Semoga rute jemputan sekolah bisa menjangkau perbatasan Maros.",
    npsScore: 7,
    internalVerification: {
      status: "Pending",
      notes: "Menunggu konfirmasi ketersediaan kuota rute antar-jemput wilayah Maros.",
      recommendedClass: "1 Khalifah Usman"
    }
  },
  {
    id: "ARM-2026-011",
    createdAt: "2026-09-15T08:10:00.000Z",
    unit: "SMPIT",
    student: {
      fullName: "Atharizz Calief Al-Farisi",
      nickname: "Calief",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2013-12-03",
      prevSchool: "SD Islam Athirah 1",
      targetClass: "Kelas 7"
    },
    parents: {
      fatherName: "Ir. Baso Amiruddin, M.T.",
      motherName: "dr. Kurniawati, Sp.A",
      fatherJob: "Kontraktor Sipil",
      motherJob: "Dokter Spesialis Anak",
      whatsappFather: "081241908877",
      whatsappMother: "081241908888",
      address: "Jl. Boulevard Panakkukang Mas No. 12",
      district: "Panakkukang",
      city: "Kota Makassar",
      distanceRadius: "5-10km"
    },
    discoveryChannel: ["Referral Alumni/Teman"],
    primaryReasons: ["Leadership Curriculum", "Karakter & Tahfidz", "Prestasi & Lulus PTN"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 5,
      deepLearningApproach: 5,
      leadershipSkills: 5,
      digitalLearningTech: 5,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 5,
      digitalAdminLMS: 5,
      parentCommunication: 5,
      financialTransparency: 5
    },
    unitSpecificNeeds: {
      "Adab pergaulan islami & penjagaan pergaulan remaja": "Sangat Diharapkan",
      "Tahfidz 2-3 juz mutqin bersanad": "Sangat Diharapkan",
      "Pembelajaran Higher Order Thinking Skills (HOTS)": "Sangat Diharapkan",
      "Leadership Camp & Public Speaking": "Sangat Diharapkan",
      "Laboratorium Sains & Bahasa aktif": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Panahan, robotika Lego EV3, piano klasik"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah", "Kemitraan Evaluasi Belajar"]
    },
    parentMessage: "Kami menginginkan lingkungan yang membentuk integritas adab sekaligus kecakapan saintifik.",
    npsScore: 10,
    internalVerification: {
      status: "Reguler",
      verifierName: "Harfianti Amiruddin, S.Si (Wakakur SMP)",
      notes: "Calon siswa memiliki pemahaman logika sains sangat matang, wawancara lancar.",
      recommendedClass: "7 Ikhwan Ibnu Khaldun",
      verifiedAt: "2026-09-15T14:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-012",
    createdAt: "2026-09-15T10:00:00.000Z",
    unit: "PAUD",
    student: {
      fullName: "Arkananta Malik Ibrahim",
      nickname: "Arkan",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2021-06-22",
      prevSchool: "Belum pernah sekolah",
      targetClass: "Playgroup"
    },
    parents: {
      fatherName: "Zulkifli Mansyur, S.E.",
      motherName: "St. Wahidah, S.Pd.",
      fatherJob: "Sales Supervisor Astra",
      motherJob: "Guru Honorer",
      whatsappFather: "085242778899",
      whatsappMother: "085242778800",
      address: "Jl. Paccerakkang Perintis Kemerdekaan KM 13",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "<3km"
    },
    discoveryChannel: ["Referral Alumni/Teman", "Brosur/Spanduk"],
    primaryReasons: ["Guru Ramah", "Karakter & Tahfidz", "Zero Bullying & Aman"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 4,
      leadershipSkills: 3,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 3,
      parentCommunication: 4,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Stimulasi motorik kasar & halus terarah": "Sangat Diharapkan",
      "Kemandirian toilet training & makan sendiri": "Sangat Diharapkan",
      "Pengenalan Al-Qur'an metode wafa ceria": "Sangat Diharapkan",
      "Transisi adaptasi sosial ramah anak": "Sangat Diharapkan",
      "Monitoring gizi & konsultasi dokter tumbuh kembang": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Lari, main bola"
    },
    supportServices: {
      healthyCatering: false,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin"]
    },
    parentMessage: "Rumah kami sangat dekat dari sekolah, semoga ananda betah.",
    npsScore: 10,
    internalVerification: {
      status: "Reguler",
      verifierName: "Annisa Nur Ramadhani, S.Pd.",
      notes: "Ananda aktif dan ceria, proses adaptasi diperkirakan sangat cepat.",
      recommendedClass: "PAUD Sultan Alauddin",
      verifiedAt: "2026-09-15T15:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-013",
    createdAt: "2026-09-15T13:20:00.000Z",
    unit: "SDIT",
    student: {
      fullName: "Raihan Danendra Putra",
      nickname: "Raihan",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2019-01-30",
      prevSchool: "TK Melati Sudiang",
      targetClass: "Kelas 1"
    },
    parents: {
      fatherName: "Dedi Suhendra, S.Sos.",
      motherName: "Ratnasari, S.E.",
      fatherJob: "Staff Bea Cukai Makassar",
      motherJob: "Staff Pajak Pratama",
      whatsappFather: "081342119900",
      whatsappMother: "081342119911",
      address: "Kompleks Bea Cukai Sudiang Blok F No. 8",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "3-5km"
    },
    discoveryChannel: ["Referral Alumni/Teman", "Instagram/Medsos"],
    primaryReasons: ["Karakter & Tahfidz", "Zero Bullying & Aman", "Fasilitas & 5R"],
    generalExpectations: {
      islamicHabits: 4,
      adabAndEtiquette: 4,
      tahfidzQuality: 3,
      deepLearningApproach: 3,
      leadershipSkills: 3,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 4,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 3,
      parentCommunication: 4,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Calistung menyenangkan tanpa paksaan": "Sangat Diharapkan",
      "Target tahfidz juz 30 & 29 mutqin": "Cukup Diharapkan",
      "Literasi & numerasi dasar berbasis proyek": "Sangat Diharapkan",
      "Pembiasaan shalat berjamaah & dhuha": "Sangat Diharapkan",
      "Ekskul bakat & minat (Robotics/Coding/Panahan)": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Lego, mewarnai"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: true,
      daycareAfterSchool: true,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin"]
    },
    parentMessage: "Kedua orang tua bekerja penuh hari, membutuhkan layanan daycare berkualitas.",
    npsScore: 8,
    internalVerification: {
      status: "Butuh Remedial",
      verifierName: "Masram, S.Pd., Gr.",
      notes: "Kemampuan mengenal huruf hijaiyah perlu penguatan remedial pra-masuk sekolah.",
      recommendedClass: "1 Khalifah Umar bin Abdul Aziz",
      verifiedAt: "2026-09-16T09:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-014",
    createdAt: "2026-09-15T16:00:00.000Z",
    unit: "SMAIT",
    student: {
      fullName: "Siti Humaira Salsabila",
      nickname: "Humaira",
      gender: "P",
      birthPlace: "Makassar",
      birthDate: "2010-11-28",
      prevSchool: "SMP Negeri 6 Makassar",
      targetClass: "Kelas 10"
    },
    parents: {
      fatherName: "drg. Arman Setiawan, Sp.KG",
      motherName: "dr. Nurul Fitriah, M.Kes",
      fatherJob: "Dokter Gigi",
      motherJob: "Dosen Poltekkes Makassar",
      whatsappFather: "08114677881",
      whatsappMother: "08114677882",
      address: "Jl. Monumen Emmy Saelan No. 89",
      district: "Rappocini",
      city: "Kota Makassar",
      distanceRadius: ">10km"
    },
    discoveryChannel: ["Website/Google", "Instagram/Medsos"],
    primaryReasons: ["Prestasi & Lulus PTN", "Karakter & Tahfidz", "Zero Bullying & Aman"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 5,
      leadershipSkills: 4,
      digitalLearningTech: 5,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 5,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Program sukses tembus PTN Favorit (SNBP/SNBT/Kedokteran/ITB)": "Sangat Diharapkan",
      "Konseling peminatan karier & psikotes terstruktur": "Sangat Diharapkan",
      "Portofolio riset & lomba kurasi Puspresnas": "Sangat Diharapkan",
      "Aqidah kokoh & benteng pemikiran syubhat kontemporer": "Sangat Diharapkan",
      "Public speaking & kemahiran diplomasi bahasa asing": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Karya ilmiah biologi, melukis digital"
    },
    supportServices: {
      healthyCatering: false,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Kemitraan Evaluasi Belajar"]
    },
    parentMessage: "Mohon informasi ketersediaan asrama/boarding untuk siswi luar zonasi dekat.",
    npsScore: 9,
    internalVerification: {
      status: "Reguler",
      verifierName: "Muslim Mubarok, M.Pd. Gr.",
      notes: "Siswa berpotensi tinggi pada olimpiade biologi dan kedokteran.",
      recommendedClass: "10 IPA Fatimah Az-Zahra",
      verifiedAt: "2026-09-16T11:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-015",
    createdAt: "2026-09-16T08:00:00.000Z",
    unit: "SDIT",
    student: {
      fullName: "Fakhira Azkadina",
      nickname: "Dina",
      gender: "P",
      birthPlace: "Makassar",
      birthDate: "2019-04-12",
      prevSchool: "TK Kemala Bhayangkari",
      targetClass: "Kelas 1"
    },
    parents: {
      fatherName: "Kompol Ruslan Efendi, S.H.",
      motherName: "Yuni Astuti, S.E.",
      fatherJob: "Polri Polda Sulsel",
      motherJob: "Bhayangkari",
      whatsappFather: "081249998811",
      whatsappMother: "081249998822",
      address: "Asrama Polisi Panaikang Blok E No. 2",
      district: "Panakkukang",
      city: "Kota Makassar",
      distanceRadius: "5-10km"
    },
    discoveryChannel: ["Referral Alumni/Teman"],
    primaryReasons: ["Karakter & Tahfidz", "Zero Bullying & Aman", "Guru Ramah"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 5,
      deepLearningApproach: 4,
      leadershipSkills: 4,
      digitalLearningTech: 4,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 5,
      digitalAdminLMS: 4,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Calistung menyenangkan tanpa paksaan": "Sangat Diharapkan",
      "Target tahfidz juz 30 & 29 mutqin": "Sangat Diharapkan",
      "Literasi & numerasi dasar berbasis proyek": "Sangat Diharapkan",
      "Pembiasaan shalat berjamaah & dhuha": "Sangat Diharapkan",
      "Ekskul bakat & minat (Robotics/Coding/Panahan)": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Hafalan Al-Qur'an, menyanyi nasyid"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: true,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah"]
    },
    parentMessage: "Keluarga kami ingin putri kami tumbuh dalam kultur islami yang teguh.",
    npsScore: 10,
    internalVerification: {
      status: "Reguler",
      verifierName: "Arman, S.Pd.I., M.M., Gr.",
      notes: "Kemampuan interaksi sangat santun, hafalan juz 30 sudah setengah juz mutqin.",
      recommendedClass: "1 Khalifah Abu Bakar",
      verifiedAt: "2026-09-16T14:00:00.000Z"
    }
  },
  {
    id: "ARM-2026-016",
    createdAt: "2026-09-16T09:30:00.000Z",
    unit: "SMPIT",
    student: {
      fullName: "Sulaiman Al-Hakim",
      nickname: "Sulaiman",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2013-04-05",
      prevSchool: "SDIT Wahdah Islamiyah 01",
      targetClass: "Kelas 7"
    },
    parents: {
      fatherName: "H. Abdul Malik, Lc., M.H.",
      motherName: "Khadijah, S.Pd.I.",
      fatherJob: "Dosen STIBA Makassar",
      motherJob: "Guru Madrasah",
      whatsappFather: "085299441122",
      whatsappMother: "085299441133",
      address: "Jl. Tamangapa Raya No. 99, Antang",
      district: "Manggala",
      city: "Kota Makassar",
      distanceRadius: "5-10km"
    },
    discoveryChannel: ["Referral Alumni/Teman"],
    primaryReasons: ["Karakter & Tahfidz", "Leadership Curriculum", "Guru Ramah"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 5,
      deepLearningApproach: 4,
      leadershipSkills: 5,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 3,
      parentCommunication: 4,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Adab pergaulan islami & penjagaan pergaulan remaja": "Sangat Diharapkan",
      "Tahfidz 2-3 juz mutqin bersanad": "Sangat Diharapkan",
      "Pembelajaran Higher Order Thinking Skills (HOTS)": "Sangat Diharapkan",
      "Leadership Camp & Public Speaking": "Sangat Diharapkan",
      "Laboratorium Sains & Bahasa aktif": "Cukup Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Khat Al-Qur'an, pidato 3 bahasa"
    },
    supportServices: {
      healthyCatering: false,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah", "Kemitraan Evaluasi Belajar"]
    },
    parentMessage: "Semoga ananda terus istiqomah dalam hafalan dan adab mulia.",
    npsScore: 10,
    internalVerification: {
      status: "Jalur Prestasi",
      verifierName: "Muh. Muhaemin Jamaluddin, S.Hum",
      notes: "Siswa memiliki hafalan 5 juz mutqin, lulus tes sanad wafa tingkat madya.",
      recommendedClass: "7 Ikhwan Al-Farabi",
      verifiedAt: "2026-09-16T16:30:00.000Z"
    }
  },
  {
    id: "ARM-2026-017",
    createdAt: "2026-09-16T11:45:00.000Z",
    unit: "PAUD",
    student: {
      fullName: "Mikaila Qanita Zahra",
      nickname: "Qanita",
      gender: "P",
      birthPlace: "Makassar",
      birthDate: "2022-01-14",
      prevSchool: "Belum pernah sekolah",
      targetClass: "Playgroup"
    },
    parents: {
      fatherName: "Hendra Wijaya, S.E.",
      motherName: "Ayu Wardani, S.Kom.",
      fatherJob: "Wiraswasta Kuliner",
      motherJob: "Online Merchant",
      whatsappFather: "081355009988",
      whatsappMother: "081355009977",
      address: "Perumahan Dosen UNM Biringkanaya",
      district: "Biringkanaya",
      city: "Kota Makassar",
      distanceRadius: "<3km"
    },
    discoveryChannel: ["Instagram/Medsos", "Referral Alumni/Teman"],
    primaryReasons: ["Guru Ramah", "Zero Bullying & Aman", "Fasilitas & 5R"],
    generalExpectations: {
      islamicHabits: 4,
      adabAndEtiquette: 5,
      tahfidzQuality: 3,
      deepLearningApproach: 4,
      leadershipSkills: 3,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 5,
      physicalSecurityCCTV: 5,
      digitalAdminLMS: 4,
      parentCommunication: 5,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Stimulasi motorik kasar & halus terarah": "Sangat Diharapkan",
      "Kemandirian toilet training & makan sendiri": "Sangat Diharapkan",
      "Pengenalan Al-Qur'an metode wafa ceria": "Sangat Diharapkan",
      "Transisi adaptasi sosial ramah anak": "Sangat Diharapkan",
      "Monitoring gizi & konsultasi dokter tumbuh kembang": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Menyanyi, bercerita boneka"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: false,
      daycareAfterSchool: true,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin"]
    },
    parentMessage: "Mohon didampingi agar tidak pemalu dengan teman baru.",
    npsScore: 9,
    internalVerification: {
      status: "Pending",
      notes: "Jadwal observasi adaptasi hari Sabtu pekan ini."
    }
  },
  {
    id: "ARM-2026-018",
    createdAt: "2026-09-16T14:10:00.000Z",
    unit: "SDIT",
    student: {
      fullName: "Khaidir Ali Syauqi",
      nickname: "Ali",
      gender: "L",
      birthPlace: "Makassar",
      birthDate: "2019-08-01",
      prevSchool: "TK Khalifah Tamalanrea",
      targetClass: "Kelas 1"
    },
    parents: {
      fatherName: "Irwan Suwandi, S.T.",
      motherName: "Ernawati, S.Pd.",
      fatherJob: "Engineer Telekomunikasi",
      motherJob: "Guru Swasta",
      whatsappFather: "082199003311",
      whatsappMother: "082199003322",
      address: "Jl. Bung Perintis Kemerdekaan KM 9",
      district: "Tamalanrea",
      city: "Kota Makassar",
      distanceRadius: "3-5km"
    },
    discoveryChannel: ["Referral Alumni/Teman", "Instagram/Medsos"],
    primaryReasons: ["Karakter & Tahfidz", "Zero Bullying & Aman", "Leadership Curriculum"],
    generalExpectations: {
      islamicHabits: 5,
      adabAndEtiquette: 5,
      tahfidzQuality: 4,
      deepLearningApproach: 4,
      leadershipSkills: 4,
      digitalLearningTech: 3,
      zeroBullyingSafeEnv: 5,
      cleanliness5R: 4,
      physicalSecurityCCTV: 4,
      digitalAdminLMS: 4,
      parentCommunication: 4,
      financialTransparency: 4
    },
    unitSpecificNeeds: {
      "Calistung menyenangkan tanpa paksaan": "Sangat Diharapkan",
      "Target tahfidz juz 30 & 29 mutqin": "Sangat Diharapkan",
      "Literasi & numerasi dasar berbasis proyek": "Sangat Diharapkan",
      "Pembiasaan shalat berjamaah & dhuha": "Sangat Diharapkan",
      "Ekskul bakat & minat (Robotics/Coding/Panahan)": "Sangat Diharapkan"
    },
    specialEducationNeeds: {
      hasAllergiesOrIllness: false,
      needsSpecialSupport: "regular",
      hobbiesAndTalents: "Menggambar komik, bermain catur"
    },
    supportServices: {
      healthyCatering: true,
      schoolShuttle: false,
      daycareAfterSchool: false,
      parentSynergyCommitments: ["Mengikuti Parenting Rutin", "Mendampingi Muraja'ah di Rumah"]
    },
    parentMessage: "Semoga ananda mendapatkan lingkungan terbaik untuk mengasah kepribadian islamnya.",
    npsScore: 10,
    internalVerification: {
      status: "Reguler",
      verifierName: "Arman, S.Pd.I., M.M., Gr.",
      notes: "Sangat siap masuk SDIT, kemampuan motorik dan kognitif sangat baik.",
      recommendedClass: "1 Khalifah Usman",
      verifiedAt: "2026-09-16T16:00:00.000Z"
    }
  }
];
