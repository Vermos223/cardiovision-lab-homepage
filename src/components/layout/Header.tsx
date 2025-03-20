// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Search, ShoppingBag } from 'lucide-react';

// const navItems = [
//   { name: 'Store', href: '/store' },
//   { name: 'Mac', href: '/mac' },
//   { name: 'iPad', href: '/ipad' },
//   { name: 'iPhoneiPhone', href: '/iphone' }, 
//   { name: 'Watch', href: '/watch' },
//   { name: 'Vision', href: '/apple-vision-pro' },
//   { name: 'AirPods', href: '/airpods' },
//   { name: 'TV & Home', href: '/tv-home' },
//   { name: 'Entertainment', href: '/entertainment' },
//   { name: 'Accessories', href: '/accessories' },
//   { name: 'Support', href: '/support' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
//         isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-[#1d1d1f]/90 backdrop-blur-md'
//       }`}
//     >
//       <nav className="flex items-center justify-center h-12 px-4 sm:px-6 max-w-[1024px] mx-auto">
//         <div className="flex items-center justify-between w-full">
//           {/* Apple Logo */}
//           <Link href="/" className="text-white">
//             <svg
//               className={`h-5 w-5 ${isScrolled ? 'text-black' : 'text-white'}`}
//               fill="currentColor"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
//               <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
//             </svg>
//           </Link>

//           {/* Main Navigation */}
//           <ul className="hidden lg:flex space-x-7 text-[12px] font-medium">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-6">
//             <Link href="/search" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>
//               <Search size={16} />
//             </Link>
//             <Link href="/bag" className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}>
//               <ShoppingBag size={16} />
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
