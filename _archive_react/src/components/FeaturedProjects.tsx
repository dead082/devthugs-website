import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const projects = [
{
  title: 'RobotX Studio',
  tag: 'Robotics / IoT',
  hexColor: '#00f0ff',
  description:
  'One-stop maker platform for robotics, IoT, and automation that helps users design, build, and bring intelligent machines to life.',
  image: "/RobotX_Studio_platform_on_sleek_devices.png"

},
{
  title: 'AquaSure',
  tag: 'Smart Fisheries',
  hexColor: '#2dd4bf',
  description:
  'Smart fishing platform that empowers fisheries through real-time monitoring, marine insights, and data-driven decision support.',
  image: "/Smart_fishing_with_AquaSure_platform.png"

},
{
  title: 'FireGuard',
  tag: 'Safety Tech',
  hexColor: '#ef4444',
  description:
  'Next-generation fire prevention platform with real-time detection, rapid alerts, and intelligent monitoring for safer communities.',
  image: "/FireGuards_next-gen_fire_prevention_demo.png"

},
{
  title: 'NearBuy',
  tag: 'Location Intelligence',
  hexColor: '#34d399',
  description:
  'Interactive business location intelligence platform that helps users discover strategic zones using maps, satellite data, and spatial insights.',
  image: "/Exploring_business_zones_with_NearBuy.png"

},
{
  title: 'AgriSenso',
  tag: 'Smart Agriculture',
  hexColor: '#22c55e',
  description:
  'Smart farming platform powered by AI-driven monitoring, environmental insights, and data-supported farm management.',
  image: "/The_future_of_smart_farming.png"

}];

const getPosition = (index: number, current: number, length: number) => {
  if (index === current) return 'center';
  if (index === (current - 1 + length) % length) return 'left';
  if (index === (current + 1) % length) return 'right';
  if (index === (current - 2 + length) % length) return 'leftHidden';
  if (index === (current + 2) % length) return 'rightHidden';
  return 'hidden';
};
const desktopVariants = {
  center: {
    x: '0%',
    scale: 1,
    opacity: 1,
    zIndex: 30
  },
  left: {
    x: '-55%',
    scale: 0.8,
    opacity: 0.4,
    zIndex: 20
  },
  right: {
    x: '55%',
    scale: 0.8,
    opacity: 0.4,
    zIndex: 20
  },
  leftHidden: {
    x: '-100%',
    scale: 0.6,
    opacity: 0,
    zIndex: 10
  },
  rightHidden: {
    x: '100%',
    scale: 0.6,
    opacity: 0,
    zIndex: 10
  },
  hidden: {
    x: '0%',
    scale: 0.6,
    opacity: 0,
    zIndex: 10
  }
};
const mobileVariants = {
  center: {
    x: '0%',
    scale: 1,
    opacity: 1,
    zIndex: 30
  },
  left: {
    x: '-110%',
    scale: 0.85,
    opacity: 0,
    zIndex: 20
  },
  right: {
    x: '110%',
    scale: 0.85,
    opacity: 0,
    zIndex: 20
  },
  leftHidden: {
    x: '-200%',
    scale: 0.8,
    opacity: 0,
    zIndex: 10
  },
  rightHidden: {
    x: '200%',
    scale: 0.8,
    opacity: 0,
    zIndex: 10
  },
  hidden: {
    x: '0%',
    scale: 0.8,
    opacity: 0,
    zIndex: 10
  }
};
export function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  return (
    <section
      id="featured-projects"
      className="relative py-32 bg-dark-base overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 animated-grid opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Featured Projects
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions shaping the future
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative h-[480px] sm:h-[550px] lg:h-[600px] w-full flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          
          {projects.map((project, index) => {
            const position = getPosition(index, currentIndex, projects.length);
            const isCenter = position === 'center';
            return (
              <motion.div
                key={project.title}
                initial={false}
                animate={
                isMobile ?
                mobileVariants[position] :
                desktopVariants[position]
                }
                transition={{
                  type: 'spring',
                  stiffness: 250,
                  damping: 25,
                  mass: 0.8
                }}
                onClick={() => !isCenter && setCurrentIndex(index)}
                className={`absolute w-full max-w-[92%] sm:max-w-[80%] lg:max-w-[850px] h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden ${isCenter ? 'cursor-default' : 'cursor-pointer'} group`}
                style={{
                  zIndex:
                  position === 'center' ?
                  30 :
                  position === 'left' || position === 'right' ?
                  20 :
                  10,
                  boxShadow: isCenter ?
                  `0 20px 50px -10px rgba(0,0,0,0.5), 0 0 40px ${project.hexColor}25` :
                  '0 10px 30px -10px rgba(0,0,0,0.5)',
                  border: `1px solid ${isCenter ? project.hexColor + '50' : 'rgba(255,255,255,0.05)'}`,
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(10px)'
                }}>
                
                {/* Project Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105" />
                  
                </div>

                {/* Top Subtle Gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-base/60 to-transparent pointer-events-none"></div>

                {/* Bottom Heavy Gradient for Text Readability */}
                <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent pointer-events-none"></div>

                {/* Content Area */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 transition-all duration-500 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'}`}>
                  
                  <div className="flex flex-col items-start">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-inter font-semibold tracking-wider uppercase mb-4 sm:mb-5 shadow-lg"
                      style={{
                        color: project.hexColor
                      }}>
                      
                      {project.tag}
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-white/70 font-inter text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12 relative z-40">
          <button
            onClick={handlePrev}
            className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-white/50 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous project">
            
            <ChevronLeftIcon size={24} />
          </button>

          <div className="flex gap-3 sm:gap-4 items-center">
            {projects.map((p, i) =>
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out ${i === currentIndex ? 'w-10 sm:w-12' : 'w-2 sm:w-3 bg-white/20 hover:bg-white/40'}`}
              style={{
                backgroundColor: i === currentIndex ? p.hexColor : undefined,
                boxShadow:
                i === currentIndex ? `0 0 15px ${p.hexColor}80` : 'none'
              }}
              aria-label={`Go to project ${i + 1}`} />

            )}
          </div>

          <button
            onClick={handleNext}
            className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-white/50 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next project">
            
            <ChevronRightIcon size={24} />
          </button>
        </div>
      </div>
    </section>);

}