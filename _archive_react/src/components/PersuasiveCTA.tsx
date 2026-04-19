import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function PersuasiveCTA() {
  return (
    <section className="relative py-40 bg-dark-base overflow-hidden">
      {/* Soft Animated Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-neon-cyan/10 via-neon-purple/10 to-transparent rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            duration: 1
          }}
          className="space-y-10">
          
          {/* Headline */}
          <h2 className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Let's Build the Future <br />
            <span className="text-white/40 italic font-light">Together</span>
          </h2>

          {/* CTA Button */}
          <motion.div
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="inline-block">
            
            <button className="group relative px-10 py-5 bg-white text-dark-base font-inter font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-3">
                Get in Touch
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20} />
                
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Transition to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-secondary to-transparent"></div>
    </section>);

}