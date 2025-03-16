import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="pt-[44px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
