import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const inter = Inter ({
  subsets: ['latin'],
  display: 'swap',
});

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <body className="min-h-full flex flex-col">

      <main className="w-full"> 
        {children}
         </main>
      <Toaster />
      </body>
    </html>

  
  );
}
