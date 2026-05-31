import type { Metadata } from "next";
import { Tajawal, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

// خط العناوين: قوي وحديث
const display = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

// خط المتن: واضح ومريح للقراءة
const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Page AI Auditor — افحص صفحتك بالذكاء الاصطناعي",
  description:
    "افحص صفحة الهبوط الخاصة بك بالذكاء الاصطناعي خلال ثوانٍ، واكتشف ما يُضعف تحويلاتك ويُهدر ميزانيتك الإعلانية — مع توصيات عملية لزيادة مبيعاتك.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
