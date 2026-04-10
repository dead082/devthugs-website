import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
export function HeroSection() {
  const handleScroll = () => {
    // Assuming the next section has id="featured-projects" or we just scroll down by window height
    const nextSection =
    document.getElementById('featured-projects') ||
    document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  // Generate some random particles
  const particles = Array.from({
    length: 8
  }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-base pt-20">
      {/* Animated Grid Background - Subtler */}
      <div className="absolute inset-0 animated-grid opacity-[0.06]"></div>

      {/* Floating Particles */}
      {particles.map((p) =>
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-white/20 pointer-events-none"
        style={{
          width: p.size,
          height: p.size,
          left: `${p.x}%`,
          top: `${p.y}%`
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, Math.random() * 50 - 25, 0],
          opacity: [0.1, 0.5, 0.1]
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: 'linear'
        }} />

      )}

      {/* Gradient Orbs - Dynamic Drift */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px]" />
      
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px]" />
      

      {/* Center Spotlight Glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-radial-gradient from-neon-cyan/5 via-neon-purple/5 to-transparent blur-[80px] pointer-events-none rounded-full"></div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Headline */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="flex flex-col gap-4 sm:gap-6 mb-10">
          
          <h1 className="font-orbitron text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              Delusion Inspires
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              Innovation Conquers
            </span>
          </h1>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="font-inter text-lg sm:text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
          
          Transforming visionary ideas into cutting-edge digital solutions. We
          architect the future, one line of code at a time with absolute
          precision and scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center w-full">
          
          {/* Primary Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{
              scale: 0.98
            }}
            className="group relative px-10 py-5 bg-neon-cyan text-dark-base font-orbitron font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] w-full sm:w-auto">
            
            <span className="relative z-10 flex items-center justify-center gap-3">
              Get in Touch
              <ArrowRight
                className="group-hover:translate-x-1.5 transition-transform duration-300"
                size={22} />
              
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-white/20 to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2
            }}
            whileTap={{
              scale: 0.98
            }}
            className="group relative px-10 py-5 border border-white/20 text-white font-orbitron font-bold text-lg rounded-xl transition-all duration-300 hover:border-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] w-full sm:w-auto overflow-hidden">
            
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore Projects
              <Sparkles
                className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 text-white/50 group-hover:text-neon-purple"
                size={22} />
              
            </span>
            {/* Border glow sweep effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]"></div>
            </div>
          </motion.button>
        </motion.div>

        {/* Rocket Scroll Cue */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2,
            duration: 1
          }}
          className="mt-24 flex flex-col items-center gap-4 cursor-pointer group"
          onClick={handleScroll}>
          
          <motion.div
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative">
            
            {/* Glow pulse behind container */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-md group-hover:bg-neon-cyan/40 group-hover:blur-lg transition-all duration-300" />
            

            <motion.div
              whileHover={{
                scale: 1.1
              }}
              className="relative w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] group-hover:border-neon-cyan/50 transition-all duration-300">
              
              <Rocket
                className="text-neon-cyan group-hover:text-white transition-colors duration-300"
                size={24}
                strokeWidth={1.5} />
              
            </motion.div>
          </motion.div>

          <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-neon-cyan/80 transition-colors duration-300">
            Launch Forward
          </span>
        </motion.div>
      </div>

      {/* Bottom Gradient Transition - blended */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-base via-dark-base/80 to-transparent pointer-events-none"></div>
    </section>);

}