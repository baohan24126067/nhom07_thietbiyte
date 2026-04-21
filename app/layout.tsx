import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: "Medicare | Thiết Bị Y Tế Tại Nhà",
    template: "%s | Medicare",
  },
  description:
    "Medicare là nền tảng giới thiệu và phân phối thiết bị y tế gia đình với giao diện hiện đại, rõ ràng và đáng tin cậy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${manrope.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-surface)] text-[var(--color-ink)]">
        <div className="relative flex min-h-full flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(30,136,229,0.22),_transparent_58%)]" />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
