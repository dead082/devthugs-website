import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Home,
  Trophy,
  FileCheck,
  MapPin } from
'lucide-react';
const milestones = [
{
  date: 'October 2025',
  title: 'The Founding',
  description:
  'The company was founded in an old boarding house — a small group of passionate developers united by a shared vision to build technology that matters.',
  colorClass: 'text-neon-cyan',
  icon: Home,
  iconColor: 'text-neon-cyan',
  image: "/TheFounding.jpg"

},
{
  date: 'Late 2025',
  title: 'First Competition',
  description:
  'Participated in a university-wide competition, putting our skills to the test and proving that Devthugs had what it takes to compete.',
  colorClass: 'text-neon-purple',
  icon: Trophy,
  iconColor: 'text-neon-purple',
  image: "/FirstCompetition.jpg"

},
{
  date: 'January 13, 2026',
  title: 'Official Registration',
  description:
  'Officially registered the company with the Department of Trade and Industry (DTI), marking our transition from a passion project to a legitimate business.',
  colorClass: 'text-neon-blue',
  icon: FileCheck,
  iconColor: 'text-neon-blue',
  image: "/OfficialRegistration.jpg"

},
{
  date: 'March 2026',
  title: 'Regional Stage',
  description:
  'Participated in a regional competition, expanding our reach and establishing Devthugs as a rising force in the tech ecosystem.',
  colorClass: 'text-neon-cyan',
  icon: MapPin,
  iconColor: 'text-neon-cyan',
  image: "/RegionalStage.jpg"

}];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  })
};
export function HowItStarted() {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  function paginate(newDirection: number) {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex < 0 || nextIndex >= milestones.length) return;
    setSlide([nextIndex, newDirection]);
  }
  const milestone = milestones[currentIndex];
  const Icon = milestone.icon;
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
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
          className="text-center mb-4">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            How It Started
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-2xl mx-auto">
            From a boarding house to the regional stage — this is how Devthugs
            came to be.
          </p>
        </motion.div>

        {/* Carousel */}
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
          className="mt-12">
          
          <div className="relative">
            {/* Carousel Content */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}>
                  
                  {/* Image */}
                  <div className="relative w-full h-[280px] sm:h-[380px] overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-dark-secondary/30 to-transparent" />
                  </div>

                  {/* Description */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2 rounded-lg bg-white/5 ${milestone.iconColor}`}>
                        
                        <Icon size={20} />
                      </div>
                      <span
                        className={`font-orbitron text-sm font-semibold ${milestone.colorClass} uppercase tracking-wider`}>
                        
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-inter text-white/60 leading-relaxed text-base sm:text-lg max-w-2xl">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => paginate(-1)}
                disabled={currentIndex === 0}
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:text-white/70"
                aria-label="Previous milestone">
                
                <ChevronLeftIcon size={20} />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-3">
                {milestones.map((m, i) =>
                <button
                  key={i}
                  onClick={() => setSlide([i, i > currentIndex ? 1 : -1])}
                  className="relative p-1"
                  aria-label={`Go to ${m.title}`}>
                  
                    <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-neon-cyan scale-125 shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-white/20 hover:bg-white/40'}`} />
                  
                  </button>
                )}
              </div>

              <button
                onClick={() => paginate(1)}
                disabled={currentIndex === milestones.length - 1}
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:text-white/70"
                aria-label="Next milestone">
                
                <ChevronRightIcon size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}