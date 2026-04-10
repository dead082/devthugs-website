import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
export function VisionMission() {
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-[0.03] pointer-events-none"></div>

      {/* Background Glow Orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-16 flex flex-col items-center">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our Purpose
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto mb-8">
            The driving forces behind everything we build
          </p>

          {/* Decorative Diamond Element */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-cyan/50"></div>
            <div className="w-2 h-2 rotate-45 bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-cyan/50"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="group relative p-10 rounded-3xl border border-white/10 overflow-hidden hover:border-neon-cyan/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all duration-500">
            
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Vision Background"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-dark-base/90"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 group-hover:bg-neon-cyan/20 transition-colors duration-500">
                  <Eye className="text-neon-cyan" size={28} />
                </div>
                <h2 className="font-orbitron text-3xl font-bold text-white">
                  Vision
                </h2>
              </div>
              <p className="font-inter text-xl text-white/80 leading-relaxed font-light mb-6">
                To be the leading force in technological innovation, creating
                digital ecosystems that empower businesses and individuals to
                thrive in an interconnected future.
              </p>
              <p className="font-inter text-sm text-neon-cyan/80 italic border-l-2 border-neon-cyan/30 pl-4">
                "Seeing beyond the horizon of what's possible today."
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="group relative p-10 rounded-3xl border border-white/10 overflow-hidden hover:border-neon-purple/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500">
            
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Mission Background"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-dark-base/90"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-colors duration-500">
                  <Target className="text-neon-purple" size={28} />
                </div>
                <h2 className="font-orbitron text-3xl font-bold text-white">
                  Mission
                </h2>
              </div>
              <p className="font-inter text-xl text-white/80 leading-relaxed font-light mb-6">
                To deliver cutting-edge, scalable solutions through relentless
                innovation, agile methodologies, and a deep commitment to
                excellence and community impact.
              </p>
              <p className="font-inter text-sm text-neon-purple/80 italic border-l-2 border-neon-purple/30 pl-4">
                "Executing with precision to turn vision into reality."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}