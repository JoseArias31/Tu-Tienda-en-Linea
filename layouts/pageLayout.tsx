'use client'
// ui
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import {whatsappProps} from '@/ui/whatsApp/whatsappConfig'

// hooks
import { RootContextProvider } from "@/hooks/rootContext";

interface PageLayoutProps {
  root: boolean;
  children: React.ReactNode;
}

export default function PageLayout({ root, children }: PageLayoutProps) {
  return (
    <>
      <RootContextProvider root={root}>
        <Navbar />
        <FloatingWhatsApp {...whatsappProps}
    
    />
      </RootContextProvider>
      <main>{children}</main>
      <Footer />
    </>
  );
}
