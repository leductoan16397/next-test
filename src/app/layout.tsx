import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { Background } from '@/components/layout/Background';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { PageEffects } from '@/components/effects/PageEffects';
import './globals.css';

const sans = Space_Grotesk({ subsets: ['latin', 'vietnamese'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin', 'vietnamese'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Le Duc Toan',
  description: 'Le Duc Toan — Software Engineer & Technical Leader. Node.js, NestJS, React, AWS, microservices.',
};

// Applies the saved theme before first paint to avoid a light/dark flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Background />
        <Nav />
        {children}
        <Footer />
        <PageEffects />
      </body>
    </html>
  );
}
