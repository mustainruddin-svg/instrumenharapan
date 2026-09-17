import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "SPMB & Asesmen Mutu ISO 21001:2018 - SIT Ar-Rahmah Makassar",
  description: "Aplikasi Asesmen Kebutuhan Pendidikan & Portal SPMB Terpadu Yayasan Ar-Rahmah Sulawesi berstandar EOMS ISO 21001:2018",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-teal-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}

