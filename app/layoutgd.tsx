import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider"; 

const font = Be_Vietnam_Pro({ 
  subsets: ["vietnamese"], 
  weight: ["400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
  title: "MediShop - Thiết Bị Y Tế Chính Hãng",
  description: "Hệ thống cung cấp thiết bị y tế uy tín.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning> 
      <body className={`${font.className} flex flex-col min-h-screen dark:bg-slate-900 transition-colors duration-300`}> 
        <ThemeProvider>
          <Header />
          <main className="grow w-full max-w-7xl mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster 
            position="top-right" 
            reverseOrder={false} 
            toastOptions={{
              style: {
                borderRadius: '12px',
                background: '#333',
                color: '#fff',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
