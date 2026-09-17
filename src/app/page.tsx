'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  BarChart3,
  ShieldCheck,
  HeartHandshake,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-square.png"
              alt="Logo SIT Ar-Rahmah"
              width={48}
              height={48}
              className="rounded-xl shadow-xs"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                  ISO 21001:2018 EOMS
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Akreditasi Unggul</span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                SIT Ar-Rahmah Makassar
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-900 hover:bg-slate-100 transition"
            >
              Portal SPMB
            </Link>
            <Link
              href="/form"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-xs transition flex items-center gap-1.5"
            >
              <span>Isi Asesmen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-900 text-xs font-bold border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            Penerimaan Murid Baru & Pemetaan Ekspektasi Mutu Pendidikan
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Membentuk Generasi Berkarakter <span className="text-teal-800">RAHMAH</span>, Cerdas & Berdaya Saing Global
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Sistem asesmen berbasis standar internasional <strong>ISO 21001:2018 (EOMS)</strong> untuk menjembatani
            kebutuhan spesifik ananda dan harapan orang tua mulai dari jenjang PAUD, SDIT, SMPIT, hingga SMAIT.
          </p>

          {/* Action Hub Cards */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            {/* Card 1: Form Calon Siswa */}
            <Link
              href="/form"
              className="group p-6 rounded-2xl bg-white border-2 border-teal-600/30 hover:border-teal-700 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-700 group-hover:text-white transition">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                  Untuk Calon Orang Tua Murid
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Formulir Asesmen Kebutuhan & SPMB
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Kuesioner 6-langkah responsif untuk memetakan ekspektasi mutu kurikulum, kesiapan belajar, riwayat kesehatan, dan kebutuhan inklusi anak.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-teal-800 font-bold text-xs">
                <span>Mulai Pengisian Form</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Dashboard Admin SPMB */}
            <Link
              href="/dashboard"
              className="group p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-500 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                  Untuk Manajemen & Panitia SPMB
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Dashboard Manajemen & Audit Mutu
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pusat kendali eksekutif: pelacakan KPI real-time, skor Net Promoter Score (NPS), skrining Inklusi/SEN, verifikasi CRM pendaftar, dan ekspor dokumen ISO.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-amber-800 font-bold text-xs">
                <span>Buka Dashboard SPMB</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* 4 Pilar ISO 21001:2018 EOMS */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Pilar Penjaminan Mutu Organisasi Pendidikan
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Standar ISO 21001:2018 memastikan layanan pendidikan berpusat pada murid dan pembelajar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-teal-100 text-teal-800">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Budaya RAHMAH</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Religius, Amanah, Humanis, Mandiri, Adaptif, dan Harmonis dalam segenap adab keseharian.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-amber-100 text-amber-800">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Deep Learning</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pembelajaran mendalam yang mengasah nalar kritis, rasa ingin tahu, dan ketuntasan hafalan Quran.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-emerald-100 text-emerald-800">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Zero Bullying & 5R</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Perlindungan ramah anak dengan pemantauan terpadu serta pembiasaan lingkungan Ringkas, Rapi, Resik.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-cyan-100 text-cyan-800">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Audit & Akuntabilitas</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pemantauan berkala kepuasan orang tua (NPS) dan keterbukaan layanan akademik berbasis digital.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white text-center text-xs text-slate-500 space-y-1">
        <p className="font-semibold text-slate-800">
          Yayasan Ar-Rahmah Sulawesi &bull; Sekolah Islam Terpadu (SIT) Ar-Rahmah Makassar
        </p>
        <p>
          Kampus PAUD &bull; SDIT &bull; SMPIT &bull; SMAIT &bull; Jl. Paccerakkang, Biringkanaya, Kota Makassar
        </p>
      </footer>
    </div>
  );
}
