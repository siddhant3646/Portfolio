import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowUpRight, Menu, X, Sparkles, Pin } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Toolkit', href: '#skills' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 pointer-events-none flex items-center justify-between">
        {/* Left Side: Hand-Drawn Stamp & Name */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 bg-white border-2 border-[#2d2d2d] wobbly px-3.5 py-1.5 sketch-shadow hover:-rotate-1 transition-transform"
          >
            <span className="w-7 h-7 bg-[#fff9c4] border-2 border-[#2d2d2d] wobbly-circle flex items-center justify-center font-heading font-bold text-sm text-[#2d2d2d]">
              SS
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg text-[#2d2d2d] leading-none">
                Siddhant Singh
              </span>
              <span className="font-hand text-xs text-[#2d5da1] leading-none mt-0.5">
                SDE @ Everbridge 🚀
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 bg-white/90 backdrop-blur-sm border-2 border-[#2d2d2d] wobbly px-5 py-2 sketch-shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-hand text-base text-[#2d2d2d] hover:text-[#ff4d4d] hover:-rotate-2 transition-transform px-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Hand-Drawn Action Buttons */}
        <div className="flex items-center gap-2.5 pointer-events-auto">
          {/* Resume Button */}
          <a
            href="/Portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-white border-2 border-[#2d2d2d] wobbly px-4 py-2 font-hand text-base text-[#2d2d2d] sketch-shadow hover:bg-[#2d5da1] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            <FileText size={16} />
            <span>Resume.pdf</span>
          </a>

          {/* Let's Talk Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="bg-[#ff4d4d] text-white border-2 border-[#2d2d2d] wobbly px-5 py-2 font-heading font-bold text-base sketch-shadow hover:bg-[#2d2d2d] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-1"
          >
            <span>Let&apos;s Talk! ✏️</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-white border-2 border-[#2d2d2d] wobbly p-2 sketch-shadow hover:bg-[#fff9c4] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Card */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden"
          >
            <div className="bg-[#fff9c4] border-[3px] border-[#2d2d2d] wobbly-md p-6 sketch-shadow-lg relative">
              {/* Tape strip at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape-strip -rotate-1" />

              <div className="font-heading font-bold text-xl text-[#2d2d2d] mb-4 pb-2 border-b-2 border-dashed border-[#2d2d2d]">
                📌 Table of Contents
              </div>

              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="p-2.5 bg-white border-2 border-[#2d2d2d] wobbly font-hand text-lg text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white transition-colors text-center"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t-2 border-dashed border-[#2d2d2d] flex justify-between items-center text-sm font-hand text-[#2d2d2d]/70">
                <span>📍 Bangalore, India</span>
                <a
                  href="/Portfolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2d5da1] underline"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
