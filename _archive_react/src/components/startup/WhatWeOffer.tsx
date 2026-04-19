import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2Icon,
  SmartphoneIcon,
  Gamepad2Icon,
  VideoIcon,
  BoxIcon,
  ServerIcon } from
'lucide-react';
const services = [
{
  title: 'Web Development',
  description:
  'Custom, responsive, and high-performance web applications built with modern frameworks to scale your business.',
  icon: Code2Icon,
  accentBg: 'bg-neon-cyan',
  hoverGradient: 'from-neon-cyan/10',
  glowClass:
  'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:border-neon-cyan/50',
  iconGlow:
  'group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]'
},
{
  title: 'App / Mobile Dev',
  description:
  'Native and cross-platform mobile experiences designed for seamless user engagement on iOS and Android.',
  icon: SmartphoneIcon,
  accentBg: 'bg-neon-purple',
  hoverGradient: 'from-neon-purple/10',
  glowClass:
  'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:border-neon-purple/50',
  iconGlow:
  'group-hover:text-neon-purple group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]'
},
{
  title: 'Game Development',
  description:
  'Immersive gaming experiences with stunning graphics, engaging mechanics, and optimized performance.',
  icon: Gamepad2Icon,
  accentBg: 'bg-pink-500',
  hoverGradient: 'from-pink-500/10',
  glowClass:
  'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group-hover:border-pink-500/50',
  iconGlow:
  'group-hover:text-pink-500 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]'
},
{
  title: 'Video Editing / Graphic Design',
  description:
  'Compelling visual storytelling through professional video production, motion graphics, and brand identity design.',
  icon: VideoIcon,
  accentBg: 'bg-orange-400',
  hoverGradient: 'from-orange-400/10',
  glowClass:
  'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.15)] group-hover:border-orange-400/50',
  iconGlow:
  'group-hover:text-orange-400 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]'
},
{
  title: '3D Modeling / IOT',
  description:
  'Bridging the physical and digital worlds with precise 3D assets and intelligent connected device ecosystems.',
  icon: BoxIcon,
  accentBg: 'bg-neon-blue',
  hoverGradient: 'from-neon-blue/10',
  glowClass:
  'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-neon-blue/50',
  iconGlow:
  'group-hover:text-neon-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]'
},
{
  title: 'Backend & Cloud',
  description:
  'Robust server architectures, API development, and cloud infrastructure management for ultimate reliability.',
  icon: ServerIcon,
  accentBg: 'bg-emerald-400',
  hoverGradient: 'from-emerald-400/10',
  glowClass:
  'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] group-hover:border-emerald-400/50',
  iconGlow:
  'group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]'
}];

export function WhatWeOffer() {
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

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
            What We Offer
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and
            operational capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className={`group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${service.glowClass} overflow-hidden`}>
                
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${service.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                

                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                

                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-base border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    <Icon
                      className={`text-white/70 transition-all duration-500 ${service.iconGlow}`}
                      size={32}
                      strokeWidth={1.5} />
                    
                  </div>

                  <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-inter text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}