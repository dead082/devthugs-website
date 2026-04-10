import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon } from
'lucide-react';
const allProjects = [
{
  title: 'RobotX Studio',
  description:
  'One-stop maker platform for robotics, IoT, and automation that helps users design, build, and bring intelligent machines to life.',
  gradient: 'from-neon-cyan to-neon-blue',
  logo: "/RobotxStudioLogo.png",
  tag: 'Robotics / IoT',
  url: 'https://www.robotxstudio.space/',
  video: "/RobotX%20Studio.mp4"

},
{
  title: 'AquaSure',
  description:
  'Smart fishing platform that empowers fisheries through real-time monitoring, marine insights, and data-driven decision support.',
  gradient: 'from-neon-blue to-indigo-500',
  logo: "/AquSureLogo.png",
  tag: 'Smart Fisheries',
  url: 'https://aquasure.vercel.app/',
  video: "/AquaSure.mp4"

},
{
  title: 'FireGuard',
  description:
  'Next-generation fire prevention platform with real-time detection, rapid alerts, and intelligent monitoring for safer communities.',
  gradient: 'from-orange-400 to-red-500',
  logo: "/FireGuard3Logo.png",
  tag: 'Safety Tech',
  url: 'https://fireguard-3.vercel.app/',
  video: "/FireGuard.mp4"

},
{
  title: 'NearBuy',
  description:
  'Interactive business location intelligence platform that helps users discover strategic zones using maps, satellite data, and spatial insights.',
  gradient: 'from-neon-purple to-pink-500',
  logo: "/NearBuyLogo.png",
  tag: 'Location Intelligence',
  url: 'https://nearbuy3.vercel.app/',
  video: "/NearBuy.mp4"

},
{
  title: 'AgriSenso',
  description:
  'Smart farming platform powered by AI-driven monitoring, environmental insights, and data-supported farm management.',
  gradient: 'from-green-400 to-emerald-600',
  logo: "/AgriSensoLogo.png",
  tag: 'Smart Agriculture',
  url: 'https://agrisenso.vercel.app/',
  video: "/AgriSenso.mp4"

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
export function OurWorks() {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  function paginate(newDirection: number) {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex < 0 || nextIndex >= allProjects.length) return;
    setSlide([nextIndex, newDirection]);
  }
  const project = allProjects[currentIndex];
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-16">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our Works
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            A comprehensive showcase of our digital conquests across various
            domains.
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
          }}>
          
          <div className="relative">
            {/* Carousel Content */}
            <div className="relative overflow-hidden rounded-3xl border border-neon-cyan/20 bg-dark-secondary/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.08),0_0_60px_rgba(0,240,255,0.04),inset_0_1px_0_rgba(255,255,255,0.05)]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="flex flex-col md:flex-row cursor-pointer group/slide"
                  onClick={() =>
                  window.open(project.url, '_blank', 'noopener,noreferrer')
                  }>
                  
                  {/* Media Side */}
                  <div className="relative w-full md:w-3/5 h-[300px] md:h-[500px] overflow-hidden bg-dark-base group shadow-[4px_0_30px_rgba(0,240,255,0.06)]">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-30 transition-opacity duration-500 group-hover:opacity-40`} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-dark-secondary/50 md:to-dark-secondary" />

                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-1.5 rounded-full bg-dark-base/80 backdrop-blur-md border border-white/10 text-white/90 text-xs font-inter font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center relative">
                    {/* Subtle glow behind content */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.03] pointer-events-none`} />
                    

                    <div className="relative z-10">
                      <div
                        className={`mb-6 flex items-center justify-start ${project.title === 'RobotX Studio' ? 'h-28 md:h-32' : 'h-20 md:h-24'}`}>
                        
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-full w-auto max-w-[85%] object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.2)]" />
                        
                      </div>
                      <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">
                        {project.title}
                      </h3>
                      <p className="font-inter text-white/65 leading-relaxed text-base md:text-lg font-light">
                        {project.description}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-neon-cyan/60 group-hover/slide:text-neon-cyan transition-colors duration-300">
                        <span className="font-inter text-sm font-medium tracking-wide">
                          Visit Live Project
                        </span>
                        <ExternalLinkIcon
                          size={14}
                          className="group-hover/slide:translate-x-0.5 group-hover/slide:-translate-y-0.5 transition-transform duration-300" />
                        
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-10">
              <button
                onClick={() => paginate(-1)}
                disabled={currentIndex === 0}
                className="p-4 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:shadow-none disabled:cursor-not-allowed"
                aria-label="Previous project">
                
                <ChevronLeftIcon size={24} />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-3 overflow-x-auto px-4 max-w-[200px] sm:max-w-none no-scrollbar">
                {allProjects.map((_, i) =>
                <button
                  key={i}
                  onClick={() => setSlide([i, i > currentIndex ? 1 : -1])}
                  className="relative p-2 shrink-0 group"
                  aria-label={`Go to project ${i + 1}`}>
                  
                    <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.6)]' : 'w-2 bg-white/20 group-hover:bg-white/50 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]'}`} />
                  
                  </button>
                )}
              </div>

              <button
                onClick={() => paginate(1)}
                disabled={currentIndex === allProjects.length - 1}
                className="p-4 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:shadow-none disabled:cursor-not-allowed"
                aria-label="Next project">
                
                <ChevronRightIcon size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}