import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Users, Rocket } from 'lucide-react';
const features = [
{
  icon: Zap,
  title: 'Innovation First',
  description:
  "We don't just follow trends; we set them. Our solutions are built using the latest tech stacks to ensure future-proof performance.",
  color: 'text-neon-cyan',
  borderColor: 'border-neon-cyan',
  image: "/whyDevthugs_1.jpg"

},
{
  icon: Rocket,
  title: 'Agile & Adaptive',
  description:
  'Speed meets precision. Our agile methodologies allow us to pivot quickly and deliver high-quality results in record time.',
  color: 'text-neon-purple',
  borderColor: 'border-neon-purple',
  image: "/whyDevthugs_2.jpg"

},
{
  icon: Shield,
  title: 'Full-Stack Expertise',
  description:
  'From rock-solid backend architectures to stunning frontend interfaces, we handle the entire digital lifecycle.',
  color: 'text-neon-blue',
  borderColor: 'border-neon-blue',
  image: "/whyDevthugs_3.jpg"

},
{
  icon: Users,
  title: 'Community Driven',
  description:
  'We believe in building technology that empowers people. Our community-centric approach ensures our products make a real impact.',
  color: 'text-pink-500',
  borderColor: 'border-pink-500',
  image: "/whyDevthugs_4.jpg"

}];

export function WhyDevthugs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
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
            Why Devthugs
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Our competitive edge in the digital landscape
          </p>
        </motion.div>

        {isDesktop /* Desktop: 2-Column Interactive Layout */ ?
        <div className="flex gap-12 items-center">
            {/* Left: Visual Area */}
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
            className="w-1/2">
            
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-secondary">
                <AnimatePresence mode="wait">
                  <motion.img
                  key={activeIndex}
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  initial={{
                    opacity: 0,
                    scale: 1.05
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.5
                  }}
                  className="absolute inset-0 w-full h-full object-cover" />
                
                </AnimatePresence>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-base/80 to-transparent z-10"></div>
              </div>
            </motion.div>

            {/* Right: Feature List */}
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
              duration: 0.8
            }}
            className="w-1/2 flex flex-col gap-4">
            
              {features.map((feature, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={feature.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex items-center gap-6 p-6 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${isActive ? `bg-white/10 ${feature.borderColor} shadow-lg` : 'bg-transparent border-transparent hover:bg-white/5'}`}>
                  
                    <div
                    className={`p-4 rounded-xl bg-dark-base border border-white/5 shrink-0 transition-all duration-300 ${isActive ? 'scale-110 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : ''}`}>
                    
                      <feature.icon
                      className={`${feature.color} transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_10px_currentColor]' : ''}`}
                      size={32} />
                    
                    </div>
                    <div>
                      <h3
                      className={`font-orbitron text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70'}`}>
                      
                        {feature.title}
                      </h3>
                      <p
                      className={`font-inter text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-white/40'}`}>
                      
                        {feature.description}
                      </p>
                    </div>
                  </div>);

            })}
            </motion.div>
          </div> /* Mobile/Tablet: 2x2 Grid Layout */ :

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) =>
          <motion.div
            key={feature.title}
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
            whileHover={{
              y: -8
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 overflow-hidden">
            
                {/* Top accent line on hover */}
                <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${feature.borderColor.replace('border-', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            </div>

                <div className="mb-6 inline-block p-4 rounded-xl bg-dark-base border border-white/5">
                  <feature.icon
                className={`${feature.color} transition-transform duration-500 group-hover:scale-110`}
                size={32} />
              
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
          )}
          </div>
        }
      </div>
    </section>);

}