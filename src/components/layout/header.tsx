"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://framerusercontent.com/images/QSnPPL0e2KLTLcA1TAaimRWcAlc.png?scale-down-to=512"
              alt="DTECK Maintenance & Installation"
              width={100}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#hero-section" className="text-navy font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/#services" className="text-navy font-medium hover:text-primary">
            Our Services
          </Link>
          <Link href="/#why-dtech" className="text-navy font-medium hover:text-primary">
            Why DTECK
          </Link>
          <Link href="/#faqs" className="text-navy font-medium hover:text-primary">
            FAQs
          </Link>
          <Link
            href="/#contact"
            className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white absolute w-full left-0 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] border-b border-gray-100' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link href="/#hero-section" className="text-navy font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/#services" className="text-navy font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
            Our Services
          </Link>
          <Link href="/#why-dtech" className="text-navy font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
            Why DTECK
          </Link>
          <Link href="/#faqs" className="text-navy font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
            FAQs
          </Link>
          <Link
            href="/#contact"
            className="bg-primary text-white px-4 py-2 rounded-md font-medium text-center hover:bg-primary/90 transition-colors"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
