import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/siddhant3646', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/siddhant3646', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/siddhant3646', label: 'Twitter' },
    { icon: Mail, href: 'mailto:siddhant3646@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 px-4 sm:px-8 md:px-12 paper-texture border-t-2 border-dashed border-[#2d2d2d]/30 text-[#2d2d2d] relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-hand text-lg">
        {/* Brand Copyright */}
        <div className="flex items-center gap-2">
          <span>© {currentYear} Handcrafted with</span>
          <span className="text-[#ff4d4d] font-bold">♥</span>
          <span>by <strong>Siddhant Singh</strong> • Bangalore</span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white border-2 border-[#2d2d2d] wobbly px-3 py-1 text-sm font-hand font-bold text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white transition-colors sketch-shadow-sm"
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={scrollToTop}
            className="p-2 bg-white border-2 border-[#2d2d2d] wobbly hover:bg-[#fff9c4] transition-colors sketch-shadow-sm ml-1"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
