import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, CheckCircleIcon } from 'lucide-react';
export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            Send a Message
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Fill out the form below and we'll
            get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm relative overflow-hidden">
          
          {/* Subtle grid background for the form card */}
          <div className="absolute inset-0 animated-grid opacity-[0.05] pointer-events-none" />

          {isSuccess ?
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="flex flex-col items-center justify-center py-16 text-center">
            
              <div className="w-20 h-20 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-6 border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <CheckCircleIcon className="text-neon-cyan" size={40} />
              </div>
              <h3 className="font-orbitron text-3xl font-bold text-white mb-4">
                Message Sent!
              </h3>
              <p className="font-inter text-white/60 text-lg max-w-md">
                Thank you for reaching out. Our team will review your message
                and get back to you shortly.
              </p>
            </motion.div> :

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                  htmlFor="name"
                  className="font-inter text-sm font-medium text-white/70 ml-1">
                  
                    Full Name
                  </label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-dark-base border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                  placeholder="John Doe" />
                
                </div>
                <div className="space-y-2">
                  <label
                  htmlFor="email"
                  className="font-inter text-sm font-medium text-white/70 ml-1">
                  
                    Email Address
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-dark-base border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                  placeholder="john@example.com" />
                
                </div>
              </div>

              <div className="space-y-2">
                <label
                htmlFor="subject"
                className="font-inter text-sm font-medium text-white/70 ml-1">
                
                  Subject
                </label>
                <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formState.subject}
                onChange={handleChange}
                className="w-full bg-dark-base border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                placeholder="How can we help you?" />
              
              </div>

              <div className="space-y-2">
                <label
                htmlFor="message"
                className="font-inter text-sm font-medium text-white/70 ml-1">
                
                  Message
                </label>
                <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-dark-base border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 resize-none"
                placeholder="Tell us about your project..." />
              
              </div>

              <motion.button
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}
              disabled={isSubmitting}
              type="submit"
              className="w-full group relative px-8 py-4 bg-neon-cyan text-dark-base font-orbitron font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] disabled:opacity-70 disabled:cursor-not-allowed mt-4">
              
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting &&
                <SendIcon
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  size={20} />

                }
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-white/20 to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </form>
          }
        </motion.div>
      </div>
    </section>);

}