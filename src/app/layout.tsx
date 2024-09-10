// src/app/layout.tsx
import Head from 'next/head';

import './globals.css'
import { ReactNode } from 'react';
import Navbar from './components/Nav';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
              <Head>
              <title>Next.js Marketing Example</title>
        <meta name="description" content="Marketing page built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='min-h-screen flex flex-col'>      
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
