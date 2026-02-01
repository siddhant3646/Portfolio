import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/siddhant3646', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/siddhant3646', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/siddhant3646', label: 'Twitter' },
    { icon: Mail, href: 'mailto:siddhant3646@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff006e]/50 to-transparent" />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff006e]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a href="#home" className="text-3xl font-bold font-display mb-4 inline-block">
              <span className="text-gradient-sunset">Siddhant</span>
              <span className="text-white"> Singh</span>
            </a>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Software Engineer passionate about building scalable systems 
              and exploring the frontiers of AI/ML. Let's create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl glass text-slate-400 hover:text-white transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(255, 0, 110, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#ff006e] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff006e] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="mailto:siddhant3646@gmail.com" className="hover:text-[#ff006e] transition-colors">
                  siddhant3646@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917905828880" className="hover:text-[#ff006e] transition-colors">
                  +91-7905828880
                </a>
              </li>
              <li>Noida, India</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {currentYear} Siddhant Singh. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <Heart size={14} className="text-[#ff006e] fill-[#ff006e]" />
            </motion.span>
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full glass text-slate-400 hover:text-white hover:bg-[#ff006e]/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
