import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
function StatCounter({
  end,
  suffix,
  label




}: {end: number;suffix: string;label: string;}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);
  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-orbitron text-3xl font-bold text-neon-cyan">
        {count}
        {suffix}
      </span>
      <span className="font-inter text-sm text-white/50">{label}</span>
    </div>);

}
const showcaseImages = ["/WeAreDevthugs_1.jpg", "/WeAreDevthugs_2.jpg", "/WeAreDevthugs_3.jpg", "/WeAreDevthugs_4.jpg", "/WeAreDevthugs_5.jpg"];






const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};
export function WhatIsDevthugs() {
  const [[currentSlide, slideDirection], setSlide] = useState([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const nextSlide = useCallback(() => {
    setSlide(([prev]) => [(prev + 1) % showcaseImages.length, 1]);
  }, []);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text & Stats */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
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
              ease: 'easeOut'
            }}
            className="flex-1 flex flex-col items-start text-left">
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-inter tracking-widest uppercase mb-6">
              ABOUT US
            </div>

            <h1 className="font-orbitron text-5xl sm:text-6xl font-bold mb-6 text-white">
              We Are{' '}
              <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                Devthugs
              </span>
            </h1>

            {/* Animated Gradient Divider */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0
              }}
              whileInView={{
                width: 80,
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.4,
                duration: 0.8
              }}
              className="h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mb-8" />
            

            <p className="font-inter text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-12">
              An innovation engine transforming bold ideas into scalable digital
              realities. We build at the intersection of cutting-edge technology
              and fearless creativity.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-10 sm:gap-16">
              <StatCounter end={13} suffix="+" label="Team Members" />
              <StatCounter end={4} suffix="+" label="Partners" />
              <StatCounter end={2025} suffix="" label="Founded" />
            </div>
          </motion.div>

          {/* Right Side: Image Slider */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
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
              ease: 'easeOut',
              delay: 0.2
            }}
            className="flex-1 w-full max-w-lg lg:max-w-none">
            
            <div
              className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] bg-dark-secondary"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}>
              
              {/* Sliding Images */}
              <AnimatePresence
                initial={false}
                custom={slideDirection}
                mode="wait">
                
                <motion.img
                  key={currentSlide}
                  src={showcaseImages[currentSlide]}
                  alt={`Devthugs showcase ${currentSlide + 1}`}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="absolute inset-0 w-full h-full object-cover" />
                
              </AnimatePresence>

              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-base/40 via-transparent to-transparent pointer-events-none z-10" />

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {showcaseImages.map((_, i) =>
                <button
                  key={i}
                  onClick={() => setSlide([i, i > currentSlide ? 1 : -1])}
                  className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 h-1.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Go to image ${i + 1}`} />

                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}