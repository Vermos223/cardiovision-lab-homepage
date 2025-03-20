"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

interface StickyProductNavProps {
  productName: string;
  navItems: NavItem[];
  buyLink: string;
}

export default function StickyProductNav({
  productName,
  navItems,
  buyLink
}: StickyProductNavProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make the nav sticky after scrolling past the main nav (44px) plus a bit more
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full bg-black z-40 transition-all duration-300 ${
        isSticky ? 'fixed top-0 shadow-md' : 'relative'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-6">
          <h3 className="text-lg font-semibold">{productName}</h3>
          <div className="hidden md:flex space-x-5">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-xs text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={buyLink}
          className="bg-apple-link-blue text-white text-xs font-semibold px-4 py-1 rounded-full"
        >
          Buy
        </Link>
      </div>
    </div>
  );
}
