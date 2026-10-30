import { useEffect, useRef, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktopQuery = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = (event) => {
      if (event.matches) setMobileMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    desktopQuery.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktopQuery.removeEventListener('change', closeOnDesktop);
    };
  }, [mobileMenuOpen]);

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
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 px-3 min-[360px]:px-4 sm:px-8 py-4 pointer-events-none flex items-center justify-between gap-2 sm:gap-3">
        {/* Left Side: Hand-Drawn Stamp & Name */}
        <div className="flex min-w-0 items-center gap-3 pointer-events-auto">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex shrink-0 items-center gap-2 sm:gap-2.5 min-h-11 bg-surface border-2 border-outline wobbly px-2.5 sm:px-3.5 py-1.5 sketch-shadow hover:-rotate-1 transition-transform"
          >
            <span className="w-7 h-7 shrink-0 bg-postit border-2 border-outline wobbly-circle flex items-center justify-center font-heading font-bold text-sm text-ink">
              SS
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg text-ink leading-none whitespace-nowrap">
                Siddhant Singh
              </span>
              <span className="hidden min-[360px]:block font-hand text-xs text-blue-pen leading-none mt-0.5 whitespace-nowrap">
                SDE @ Everbridge 🚀
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex shrink-0 items-center gap-3 bg-surface/90 backdrop-blur-sm border-2 border-outline wobbly px-4 py-2 sketch-shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-hand text-base text-ink hover:text-red-pen hover:-rotate-2 transition-transform px-1 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Hand-Drawn Action Buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5 pointer-events-auto">
          {/* Keep the appearance control reachable at every viewport width. */}
          <div className="w-11 shrink-0">
            <ThemeToggle />
          </div>

          {/* Resume Button */}
          <a
            href="/Portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 bg-surface border-2 border-outline wobbly px-4 py-2 font-hand text-base text-ink sketch-shadow hover:bg-blue-pen hover:text-on-blue hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-shadow)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all whitespace-nowrap"
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
            className="hidden sm:flex bg-red-pen text-on-red border-2 border-outline wobbly px-4 xl:px-5 py-2 font-heading font-bold text-base sketch-shadow hover:bg-ink hover:text-paper hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-shadow)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all items-center gap-1 whitespace-nowrap"
          >
            <span>Let&apos;s Talk! ✏️</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="xl:hidden flex items-center justify-center w-11 h-11 shrink-0 bg-surface text-ink border-2 border-outline wobbly p-2 sketch-shadow hover:bg-postit transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Card */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-1 top-17 z-40 xl:hidden p-3 max-h-[calc(100dvh-4.25rem)] overflow-y-auto"
          >
            <div className="bg-postit border-[3px] border-outline wobbly-md p-5 sm:p-6 sketch-shadow-lg relative">
              {/* Tape strip at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape-strip -rotate-1" />

              <div className="font-heading font-bold text-xl text-ink mb-4 pb-2 border-b-2 border-dashed border-outline">
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
                    className="p-2.5 bg-surface border-2 border-outline wobbly font-hand text-lg text-ink hover:bg-red-pen hover:text-on-red transition-colors text-center"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t-2 border-dashed border-outline flex flex-wrap gap-3 justify-between items-center text-sm font-hand text-secondary">
                <span>📍 Bangalore, India</span>
                <a
                  href="/Portfolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-pen underline"
                >
                  Download CV
                </a>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
