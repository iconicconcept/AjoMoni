// import Link from 'next/link'
// import React from 'react'

// const Header = () => {
//   return (
//       <header className='bg-[#EEF8E9] text-[#57B524] w-full px-8 py-4'>
//         <div className='bg-background border border-b backdrop-blur-[2px] border-gray-300/50 px-3 md:px-7 lg:px-7 fixed w-full py-4 flex justify-between items-center top-0 z-99 '></div>
//         <div className='flex items-center justify-between w-full max-w-[1250px] mx-auto px-2'>
//             <h1 className='text-40 font-bold'>AJO MONI</h1>
//             <ul className='flex gap-8'>
//                 <li>Home</li>
//                 <li>How it works</li>
//                 <li>Features</li>
//                 <li>Testimonials</li>
//                 <li>FAQS</li>
//             </ul>
//             <button>
//                 <Link href='/' className='flex gap-1'>
//                     <span>Download the App</span>
//                 </Link>
//             </button>
//         </div>
//     </header>
//   )
// }

// export default Header

"use client";

import { useState } from "react";
// import { Button } from '@/components/ui/button';
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#EEF8E9] text-[#57B524] w-full px-4 md:px-7 lg:px-11 py-3 md:py-5 backdrop-blur-md sticky top-0 z-50 mx-auto">
      <div className="container-fintech max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h2 className="text-[#57B524] text-2xl font-semibold">AJO MONI</h2>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:underline text-[16px] hover:text-[#57B524] hover:underline-offset-7 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#work"
              className="text-gray-600 hover:underline text-[16px] hover:text-[#57B524] hover:underline-offset-7 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:underline text-[16px] hover:text-[#57B524] hover:underline-offset-7 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:underline text-[16px] hover:text-[#57B524] hover:underline-offset-7 transition-colors font-medium"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:underline text-[16px] hover:text-[#57B524] hover:underline-offset-7 transition-colors font-medium"
            >
              FAQ
            </a>
          </nav>

          {/* download button */}
          <button className="px-2.5 py-1.5 shadow-xs shadow-gray-600 cursor-pointer hover:bg-[#57B524]/80 hover:scale-3d border border-gray-200 hidden md:flex md:gap-2 md:justify-center md:items-center bg-[#57B524] text-white rounded-full">
            <div className="flex justify-center items-center">
              <img src="/playstore.png" alt="playstore" className="h-5 w-5 mt-0.5" /> 
              <span className="text-[14px] font-extralight">|</span>
              <img src="/AppleLogo1.png" alt="playstore" className="h-3 w-3 ml-1 mb-0.3" />
            </div>
            <p className="font-medium text-[14px]">Download App</p>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden shadow-xs shadow-gray-400 border-t border-gray-100 py-8 px-2 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-600 text-[16px] hover:text-[#57B524] transition-colors font-medium px-4 py-2 rounded-lg hover:underline"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#work"
                className="text-gray-600 text-[16px] hover:text-[#57B524] transition-colors font-medium px-4 py-2 rounded-lg hover:underline"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-gray-600 text-[16px] hover:text-[#57B524] transition-colors font-medium px-4 py-2 rounded-lg hover:underline"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 text-[16px] hover:text-[#57B524] transition-colors font-medium px-4 py-2 rounded-lg hover:underline"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-[#57B524] transition-colors font-medium px-4 py-2 rounded-lg hover:underline"
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <div className="px-2 pt-2">
                <button className="px-2.5 w-full py-1.5 shadow-xs shadow-gray-600 cursor-pointer hover:bg-[#57B524]/85 hover:scale-3d border border-gray-200 flex justify-center items-center gap-2 bg-[#57B524] text-white rounded-full">
                  <div className="flex justify-center items-center">
                    <img src="/playstore.png" alt="playstore" className="h-5 w-5 mt-0.5" /> 
                    <span className="text-[14px] font-extralight">|</span>
                    <img src="/AppleLogo1.png" alt="playstore" className="h-3 w-3 ml-1 mb-0.3" />
                  </div>
                  <p className="font-medium text-[14px]">Download App</p>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
