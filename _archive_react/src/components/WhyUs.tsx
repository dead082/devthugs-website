import React, { useEffect, useState, createElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Compass,
  TrendingUp,
  Target,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
const values = [
{
  icon: Sparkles,
  title: 'Create',
  description:
  'Crafting innovative solutions from the ground up, turning abstract concepts into tangible digital experiences.',
  color: 'text-neon-cyan',
  accent: 'neon-cyan',
  glow: 'drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]',
  bgGlow: 'bg-neon-cyan/5',
  borderGlow: 'group-hover:border-neon-cyan/30'
},
{
  icon: Compass,
  title: 'Explore',
  description:
  'Venturing into uncharted territories of technology, discovering new possibilities and pushing boundaries.',
  color: 'text-neon-blue',
  accent: 'neon-blue',
  glow: 'drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]',
  bgGlow: 'bg-neon-blue/5',
  borderGlow: 'group-hover:border-neon-blue/30'
},
{
  icon: TrendingUp,
  title: 'Expand',
  description:
  'Scaling your vision beyond limits, building systems that grow with your ambitions and adapt to change.',
  color: 'text-neon-purple',
  accent: 'neon-purple',
  glow: 'drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]',
  bgGlow: 'bg-neon-purple/5',
  borderGlow: 'group-hover:border-neon-purple/30'
},
{
  icon: Target,
  title: 'Conquer',
  description:
  'Dominating challenges with precision and expertise, delivering solutions that exceed expectations.',
  color: 'text-pink-500',
  accent: 'pink-500',
  glow: 'drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]',
  bgGlow: 'bg-pink-500/5',
  borderGlow: 'group-hover:border-pink-500/30'
}];

export function WhyUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % values.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);
  const handlePrev = () =>
  setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % values.length);
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]"></div>

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
          className="text-center mb-20">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our Approach
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Four pillars that define our approach to innovation
          </p>
        </motion.div>

        {/* Desktop: Clean card layout with hover glow */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {values.map((value, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.12,
              duration: 0.8
            }}
            className={`group relative rounded-2xl border border-white/5 ${value.borderGlow} p-8 transition-all duration-500 hover:-translate-y-2`}>
            
              {/* Hover background glow */}
              <div
              className={`absolute inset-0 rounded-2xl ${value.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
            </div>

              <div className="relative z-10">
                {/* Icon with glow ring */}
                <div className="mb-8 relative inline-block">
                  <div
                  className={`absolute inset-0 rounded-full scale-[2.5] ${value.bgGlow} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}>
                </div>
                  <value.icon
                  className={`relative ${value.color} ${value.glow} transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1`}
                  size={36}
                  strokeWidth={1.5} />
                
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors duration-500">
                  {value.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -50
              }}
              transition={{
                duration: 0.5
              }}
              className="flex flex-col items-center text-center px-4">
              
              {/* Accent bar */}
              <div
                className={`w-12 h-1 rounded-full bg-${values[currentIndex].accent} mb-8`}>
              </div>

              {/* Icon */}
              <div className="mb-8">
                {createElement(values[currentIndex].icon, {
                  className: `${values[currentIndex].color} ${values[currentIndex].glow}`,
                  size: 56,
                  strokeWidth: 1.5
                })}
              </div>

              <h3 className="font-orbitron text-3xl font-bold mb-4 text-white">
                {values[currentIndex].title}
              </h3>
              <p className="font-inter text-white/50 leading-relaxed max-w-sm">
                {values[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 text-white/30 hover:text-white hover:border-white/30 transition-all">
              
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-3">
              {values.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`} />

              )}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 text-white/30 hover:text-white hover:border-white/30 transition-all">
              
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>);

}