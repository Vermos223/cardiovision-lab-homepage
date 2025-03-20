"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
              <Link href="/groupmembers" className="text-3xl" onClick={onClose}>GROUP</Link>
            </li>
            <li>
              <Link href="/contactus" className="text-3xl" onClick={onClose}>CONTACT</Link>
            </li>
          </ul>
        </nav>

        {/* <div className="border-t border-gray-700 pt-6 flex items-center space-x-6">
          <button className="text-white" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <Link href="/shop/bag" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

interface NavDropdownProps {
  title: string;
  linkHref: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  linkHref,
  children,
  isActive,
  onClick
}) => {
  return (
    <div className="relative" onMouseEnter={onClick} onMouseLeave={() => {}}>
      <Link href={linkHref} className="text-white text-xs nav-link">
        {title}
      </Link>

      {isActive && (
        <div
          className="absolute top-[44px] left-0 right-0 bg-apple-nav backdrop-blur-md w-screen z-50"
          onMouseLeave={onClick}
        >
          <div className="max-w-6xl mx-auto py-8 text-white">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  // Close dropdowns when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  }, [isMobileMenuOpen]);

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
      <nav className="bg-apple-nav/85 backdrop-blur-lg">
          <div className="max-w-[1024px] h-[44px] mx-auto flex items-center justify-between px-5 md:px-8">
            {/* Fruit Logo */}
            <Link href="/" className="text-white" aria-label="Fruit">
              <Image
                src="/images/homepage/cv1.jpg"
                alt="cardiovisionlab"
                width={96}
                height={96}
                className="h-[32px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex space-x-7 justify-center flex-1">
              {/* <NavDropdown
                title="Store"
                linkHref="/store"
                isActive={activeDropdown === 'store'}
                onClick={() => handleDropdownToggle('store')}
              >
                <div className="grid grid-cols-5 gap-6">
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Shop</h3>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li><Link href="/store" className="hover:text-white">Shop the Latest</Link></li>
                      <li><Link href="/mac" className="hover:text-white">Mac</Link></li>
                      <li><Link href="/ipad" className="hover:text-white">iPad</Link></li>
                      <li><Link href="/iphone" className="hover:text-white">iPhone</Link></li>
                      <li><Link href="/fruit-watch" className="hover:text-white">Fruit Watch</Link></li>
                      <li><Link href="/fruit-vision-pro" className="hover:text-white">Fruit Vision Pro</Link></li>
                      <li><Link href="/accessories" className="hover:text-white">Accessories</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li><Link href="/find-a-store" className="hover:text-white">Find a Store</Link></li>
                      <li><Link href="/order-status" className="hover:text-white">Order Status</Link></li>
                      <li><Link href="/fruit-trade-in" className="hover:text-white">Fruit Trade In</Link></li>
                      <li><Link href="/financing" className="hover:text-white">Financing</Link></li>
                    </ul>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown
                title="Mac"
                linkHref="/mac"
                isActive={activeDropdown === 'mac'}
                onClick={() => handleDropdownToggle('mac')}
              >
                <div className="grid grid-cols-5 gap-6">
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Explore Mac</h3>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li><Link href="/mac" className="hover:text-white">Explore All Mac</Link></li>
                      <li><Link href="/macbook-air" className="hover:text-white">MacBook Air</Link></li>
                      <li><Link href="/macbook-pro" className="hover:text-white">MacBook Pro</Link></li>
                      <li><Link href="/imac" className="hover:text-white">iMac</Link></li>
                      <li><Link href="/mac-mini" className="hover:text-white">Mac mini</Link></li>
                      <li><Link href="/mac-studio" className="hover:text-white">Mac Studio</Link></li>
                      <li><Link href="/mac-pro" className="hover:text-white">Mac Pro</Link></li>
                      <li><Link href="/mac/compare" className="hover:text-white">Compare Mac</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Shop Mac</h3>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li><Link href="/shop/buy-mac" className="hover:text-white">Shop Mac</Link></li>
                      <li><Link href="/shop/mac/accessories" className="hover:text-white">Mac Accessories</Link></li>
                      <li><Link href="/shop/trade-in" className="hover:text-white">Fruit Trade In</Link></li>
                      <li><Link href="/shop/financing" className="hover:text-white">Financing</Link></li>
                    </ul>
                  </div>
                </div>
              </NavDropdown> */}
              <Link href="/" className="text-white text-lg nav-link">HOME</Link>
              <Link href="/research" className="text-white text-lg nav-link">RESEARCH</Link>
              <Link href="/publications" className="text-white text-lg nav-link">PUBLICATIONS</Link>
              <Link href="/groupmembers" className="text-white text-lg nav-link">GROUP</Link>
              <Link href="/contactus" className="text-white text-lg nav-link">CONTACT</Link>
            </div>

            {/* Search and Bag Icons */}
            {/* <div className="hidden md:flex items-center space-x-4">
              <button className="text-white" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="44" viewBox="0 0 15 44" className="fill-white">
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                </svg>
              </button>
              <button className="text-white" aria-label="Bag">
                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1167 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.117-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0166h-8.7069a1.0182 1.0182 0 0 1 -1.0167-1.0166v-7.7155a1.0178 1.0178 0 0 1 1.0167-1.0166h8.707a1.0178 1.0178 0 0 1 1.0166 1.0166z"></path>
                </svg>
              </button>
            </div> */}
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
