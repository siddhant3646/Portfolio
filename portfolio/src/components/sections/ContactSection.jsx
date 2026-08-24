import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle2, Copy, Check, Mail, Phone, MapPin, FileText } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('siddhant3646@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdveldg';
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        alert('Could not send message. Please write directly to siddhant3646@gmail.com');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Contact form error:', error);
      alert('Error sending message. Please email directly to siddhant3646@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden paper-texture">
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="font-hand text-sm uppercase tracking-widest text-[#ff4d4d] font-bold block mb-1">
            📬 SECTION 06 — GET IN TOUCH
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#2d2d2d]">
            Let&apos;s Build Something Great Together! ✍️
          </h2>
          <p className="font-hand text-lg sm:text-xl text-[#2d2d2d]/80 mt-2">
            Have a project, job opportunity, or just want to chat about backend distributed systems or AI? Drop me a note!
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left: Sticky Notes (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            {/* Email Sticky Note */}
            <div className="bg-[#fff9c4] border-[3px] border-[#2d2d2d] wobbly-md p-6 sketch-shadow-lg relative -rotate-2 hover:rotate-0 transition-transform">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 pin-tack" />
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-heading font-bold text-lg text-[#2d2d2d] flex items-center gap-1.5">
                  <Mail size={18} className="text-[#ff4d4d]" />
                  <span>Direct Email</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="font-hand text-sm bg-white border border-[#2d2d2d] wobbly px-2 py-0.5 hover:bg-[#ff4d4d] hover:text-white transition-colors"
                >
                  {isCopied ? 'Copied! ✓' : 'Copy 📋'}
                </button>
              </div>
              <a
                href="mailto:siddhant3646@gmail.com"
                className="font-hand text-xl font-bold text-[#2d5da1] underline block"
              >
                siddhant3646@gmail.com
              </a>
            </div>

            {/* Location & Phone Card */}
            <div className="bg-white border-[3px] border-[#2d2d2d] wobbly-md p-6 sketch-shadow-lg relative rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute -top-3 left-8 w-20 h-6 tape-strip" />
              <div className="font-heading font-bold text-lg text-[#2d2d2d] flex items-center gap-1.5 mb-2">
                <MapPin size={18} className="text-[#2d5da1]" />
                <span>Current Location</span>
              </div>
              <div className="font-hand text-xl text-[#2d2d2d] font-bold">
                Bangalore, Karnataka, India 🇮🇳
              </div>
              <div className="font-hand text-base text-[#2d2d2d]/70 mt-1 flex items-center gap-1.5">
                <Phone size={15} />
                <span>+91-7905828880</span>
              </div>
            </div>

            {/* Resume Note */}
            <div className="bg-[#e5e0d8] border-[3px] border-[#2d2d2d] wobbly-md p-5 sketch-shadow flex items-center justify-between gap-3">
              <div>
                <div className="font-heading font-bold text-base text-[#2d2d2d]">
                  Need a print copy?
                </div>
                <div className="font-hand text-sm text-[#2d2d2d]/70">
                  Siddhant_Singh_Resume.pdf
                </div>
              </div>
              <a
                href="/Portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#2d2d2d] wobbly px-3 py-1.5 font-heading font-bold text-xs text-[#2d2d2d] hover:bg-[#2d5da1] hover:text-white transition-all shadow-[2px_2px_0px_0px_#2d2d2d]"
              >
                Download 📄
              </a>
            </div>
          </motion.div>

          {/* Right: Notebook Contact Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div className="bg-white border-[3px] border-[#2d2d2d] wobbly-md p-6 sm:p-8 sketch-shadow-xl relative">
              {/* Tape strip */}
              <div className="absolute -top-3.5 right-12 w-24 h-6 tape-strip -rotate-1" />

              <div className="font-heading font-bold text-2xl text-[#2d2d2d] mb-6 pb-2 border-b-2 border-dashed border-[#2d2d2d]/30">
                📝 Send Me a Message
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <CheckCircle2 size={48} className="text-[#2d5da1] mb-3" />
                  <h3 className="font-heading font-bold text-2xl text-[#2d2d2d] mb-2">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="font-hand text-lg text-[#2d2d2d]/80 max-w-sm">
                    Thanks for writing to me! I&apos;ll check my inbox and get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-hand text-lg">
                  <div>
                    <label className="block text-[#2d2d2d] font-bold mb-1">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 bg-[#fdfbf7] border-2 border-[#2d2d2d] wobbly font-hand text-lg text-[#2d2d2d] placeholder:text-[#2d2d2d]/40 focus:border-[#2d5da1] focus:outline-none focus:ring-2 focus:ring-[#2d5da1]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2d2d2d] font-bold mb-1">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 bg-[#fdfbf7] border-2 border-[#2d2d2d] wobbly font-hand text-lg text-[#2d2d2d] placeholder:text-[#2d2d2d]/40 focus:border-[#2d5da1] focus:outline-none focus:ring-2 focus:ring-[#2d5da1]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2d2d2d] font-bold mb-1">
                      Your Message:
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or open role..."
                      className="w-full px-4 py-2.5 bg-[#fdfbf7] border-2 border-[#2d2d2d] wobbly font-hand text-lg text-[#2d2d2d] placeholder:text-[#2d2d2d]/40 focus:border-[#2d5da1] focus:outline-none focus:ring-2 focus:ring-[#2d5da1]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#ff4d4d] text-white border-[3px] border-[#2d2d2d] wobbly font-heading font-bold text-xl sketch-shadow hover:bg-[#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending Message... ✈️' : 'Send Message 📬'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
