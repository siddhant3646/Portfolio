import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollDirection, useActiveSection } from '../../hooks/useScrollProgress';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const sectionIds = navLinks.map(link => link.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (scrollY < 100) {
      setIsVisible(true);
    } else {
      setIsVisible(scrollDirection === 'up');
    }
  }, [scrollDirection, scrollY]);

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          backgroundColor: scrollY > 50 ? 'rgba(10, 10, 15, 0.9)' : 'rgba(10, 10, 15, 0)',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
        style={{
          borderColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-bold font-display"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
            >
              <span className="text-gradient-sunset">S</span>
              <span className="text-white">S</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-[#ff006e]/20 to-[#8338ec]/20 rounded-full border border-[#ff006e]/30"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff006e] to-[#8338ec] text-white font-medium text-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(255, 0, 110, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="absolute top-24 left-4 right-4 glass rounded-2xl p-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#ff006e]/20 to-[#8338ec]/20 text-white border border-[#ff006e]/30' 
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
