import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, SmartphoneIcon } from 'lucide-react';
const meetingImages = [
{
  url: "/StrategicPlanningSession.jpg",
  alt: 'Strategic Planning Session'
},
{
  url: "/TeamCollaboration.jpg",
  alt: 'Team Collaboration'
},
{
  url: "/ClientPresentation.jpg",
  alt: 'Client Presentation'
}];

const testingImages = [
{
  url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  alt: 'Mobile App Testing'
},
{
  url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80',
  alt: 'UX Research'
},
{
  url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
  alt: 'Device Compatibility Check'
}];

export function StartupPartnerships() {
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

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
            Partnership in Action
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Collaboration is at the heart of what we do. See how we work closely
            with our partners to ensure excellence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Meetings Section */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
                <UsersIcon className="text-neon-cyan" size={28} />
              </div>
              <h3 className="font-orbitron text-3xl font-bold text-white">
                Strategic Meetings
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {meetingImages.map((img, idx) =>
              <motion.div
                key={idx}
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
                  delay: idx * 0.15
                }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-500">
                
                  <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-orbitron text-white font-medium text-lg drop-shadow-md">
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* App Testing Section */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20">
                <SmartphoneIcon className="text-neon-purple" size={28} />
              </div>
              <h3 className="font-orbitron text-3xl font-bold text-white">
                Rigorous Testing
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testingImages.map((img, idx) =>
              <motion.div
                key={idx}
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
                  delay: idx * 0.15
                }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-neon-purple/50 transition-all duration-500">
                
                  <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-orbitron text-white font-medium text-lg drop-shadow-md">
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}