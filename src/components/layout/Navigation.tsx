"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-80px)]">
        <nav className="text-white">
          <ul className="space-y-6">
            <li>
              <Link href="/" className="text-3xl" onClick={onClose}>HOME</Link>
            </li>
            <li>
              <Link href="/research" className="text-3xl" onClick={onClose}>RESEARCH</Link>
            </li>
            <li>
              <Link href="/publications" className="text-3xl" onClick={onClose}>PUBLICATIONS</Link>
            </li>
            <li>
              <Link href="/people" className="text-3xl" onClick={onClose}>PEOPLE</Link>
            </li>
            <li>
              <Link href="/contactus" className="text-3xl" onClick={onClose}>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-site-nav/85 backdrop-blur-lg">
          <div className="max-w-[1024px] h-[44px] mx-auto flex items-center justify-between px-5 md:px-8">
            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex space-x-7 justify-center flex-1">
              <Link href="/" className="text-white text-lg nav-link">HOME</Link>
              <Link href="/research" className="text-white text-lg nav-link">RESEARCH</Link>
              <Link href="/publications" className="text-white text-lg nav-link">PUBLICATIONS</Link>
              <Link href="/people" className="text-white text-lg nav-link">PEOPLE</Link>
              <Link href="/contactus" className="text-white text-lg nav-link">CONTACT</Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden absolute top-0 right-0 p-3">
          <button
            className="text-white p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
