import React from 'react';
import { motion } from 'framer-motion';
const partners = [
{
  name: 'DOST',
  fullName: 'Department of Science and Technology',
  logo: "/pasted-image.png"
},
{
  name: 'DICT',
  fullName: 'Department of Information and Communications Technology',
  logo: "/DICT-Logo-icon_only.png"
},
{
  name: 'DTI',
  fullName: 'Department of Trade and Industry',
  logo: "/DTI-Logo.jpg"
},
{
  name: 'NEMSU TBI',
  fullName:
  'North Eastern Mindanao State University Technology Business Incubator',
  logo: "/pasted-image-1.png"
}];

const topRowOrder = [partners[0], partners[1], partners[2], partners[3]];
const bottomRowOrder = [partners[2], partners[0], partners[3], partners[1]];
function PartnerLogo({ partner }: {partner: (typeof partners)[0];}) {
  return (
    <div className="flex-shrink-0 mx-8 sm:mx-12 group flex flex-col items-center text-center">
      <img
        src={partner.logo}
        alt={partner.name}
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all duration-500" />
      
      <h3 className="font-orbitron text-xs sm:text-sm font-semibold text-white/40 group-hover:text-white/80 transition-colors duration-500 mt-3">
        {partner.name}
      </h3>
    </div>);

}
function MarqueeRow({
  logos,
  direction



}: {logos: typeof partners;direction: 'left' | 'right';}) {
  const repeated = [
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos,
  ...logos];

  const animClass =
  direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  return (
    <div className="marquee-row relative overflow-hidden w-full">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-dark-base to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-dark-base to-transparent" />

      <div className={`flex w-max ${animClass}`}>
        {repeated.map((partner, i) =>
        <PartnerLogo key={`${partner.name}-${i}`} partner={partner} />
        )}
      </div>
    </div>);

}
export function Partnerships() {
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full">
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
          className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our Partners
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Collaborating with leading organizations to drive innovation
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1,
            delay: 0.3
          }}
          className="flex flex-col gap-10">
          
          {/* Top row — moves left to right */}
          <MarqueeRow logos={topRowOrder} direction="right" />

          {/* Bottom row — moves right to left */}
          <MarqueeRow logos={bottomRowOrder} direction="left" />
        </motion.div>
      </div>
    </section>);

}