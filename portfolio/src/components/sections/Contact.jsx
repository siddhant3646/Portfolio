import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formspree integration
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdveldg';
    
    // Create an AbortController for timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again or email me directly at siddhant3646@gmail.com');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        alert('Request timed out. Please email me directly at siddhant3646@gmail.com');
      } else {
        console.error('Error sending message:', error);
        alert('Error sending message. Please email me directly at siddhant3646@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'siddhant3646@gmail.com',
      href: 'mailto:siddhant3646@gmail.com',
      color: '#ff006e',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7905828880',
      href: 'tel:+917905828880',
      color: '#8338ec',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, India',
      href: 'https://maps.google.com/?q=Noida,India',
      color: '#00f5ff',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/siddhant3646', label: 'GitHub', color: '#fff' },
    { icon: Linkedin, href: 'https://linkedin.com/in/siddhant3646', label: 'LinkedIn', color: '#0a66c2' },
    { icon: Twitter, href: 'https://x.com/siddhant3646', label: 'Twitter', color: '#1da1f2' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff006e]/5 to-[#8338ec]/10" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass text-[#8338ec] text-sm font-medium mb-4"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Let's{' '}
            <span className="text-gradient-sunset">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's build something amazing together</h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you have a question about my work, want to discuss a project, 
                or just want to say hi, I'm always open to connecting with fellow developers and creators.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl glass cursor-hover"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 0 30px ${item.color}20`
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-[#ff006e] transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className="ml-auto text-slate-500 group-hover:text-white transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-500 mb-4">Or connect with me on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl glass text-slate-400 hover:text-white transition-colors cursor-hover"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: `${social.color}20`
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard tiltAmount={5} glowColor="rgba(255, 0, 110, 0.1)">
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="text-[#ffbe0b]" size={20} />
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle size={64} className="text-green-400 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <motion.label
                        className="absolute left-4 transition-all pointer-events-none"
                        animate={{
                          top: focusedField === 'name' || formData.name ? -10 : 14,
                          fontSize: focusedField === 'name' || formData.name ? 12 : 16,
                          color: focusedField === 'name' ? '#ff006e' : '#cbd5e1',
                        }}
                        style={{ padding: '0 4px' }}
                      >
                        Your Name
                      </motion.label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 bg-transparent border border-slate-700 rounded-xl text-white focus:border-[#ff006e] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <motion.label
                        className="absolute left-4 transition-all pointer-events-none"
                        animate={{
                          top: focusedField === 'email' || formData.email ? -10 : 14,
                          fontSize: focusedField === 'email' || formData.email ? 12 : 16,
                          color: focusedField === 'email' ? '#ff006e' : '#cbd5e1',
                        }}
                        style={{ padding: '0 4px' }}
                      >
                        Email Address
                      </motion.label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 bg-transparent border border-slate-700 rounded-xl text-white focus:border-[#ff006e] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <motion.label
                        className="absolute left-4 transition-all pointer-events-none"
                        animate={{
                          top: focusedField === 'message' || formData.message ? -10 : 14,
                          fontSize: focusedField === 'message' || formData.message ? 12 : 16,
                          color: focusedField === 'message' ? '#ff006e' : '#cbd5e1',
                        }}
                        style={{ padding: '0 4px' }}
                      >
                        Your Message
                      </motion.label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        className="w-full px-4 py-4 bg-transparent border border-slate-700 rounded-xl text-white focus:border-[#ff006e] focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff006e] to-[#8338ec] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-hover"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 0, 110, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send size={20} />
                        </motion.div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  </div>
                )}
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
