import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon } from 'lucide-react';
export function LocationSection() {
  return (
    <section className="relative py-32 bg-dark-base overflow-hidden">
      {/* Background Glow Orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

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
          className="text-center mb-16">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            Find Us
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            Our headquarters is the epicenter of innovation. Come visit or reach
            out to us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map/Image Placeholder */}
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
            className="relative w-full aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,240,255,0.1)] group">
            
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Office Location"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent opacity-80" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="p-6 rounded-2xl bg-dark-base/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-4 mb-2">
                  <MapPinIcon className="text-neon-cyan" size={24} />
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    Headquarters
                  </h3>
                </div>
                <p className="font-inter text-white/70 pl-10">
                  Surigao City, Philippines
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
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
              duration: 0.8,
              delay: 0.2
            }}
            className="flex flex-col gap-8">
            
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors duration-300">
              <div className="p-4 rounded-xl bg-dark-base border border-white/5 shrink-0">
                <MapPinIcon className="text-neon-cyan" size={28} />
              </div>
              <div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">
                  Address
                </h4>
                <p className="font-inter text-white/60 leading-relaxed">
                  123 Innovation Drive, Tech District
                  <br />
                  Surigao City, 8400
                  <br />
                  Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/30 transition-colors duration-300">
              <div className="p-4 rounded-xl bg-dark-base border border-white/5 shrink-0">
                <MailIcon className="text-neon-purple" size={28} />
              </div>
              <div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">
                  Email
                </h4>
                <p className="font-inter text-white/60 leading-relaxed">
                  hello@devthugs.com
                  <br />
                  support@devthugs.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/30 transition-colors duration-300">
              <div className="p-4 rounded-xl bg-dark-base border border-white/5 shrink-0">
                <PhoneIcon className="text-neon-blue" size={28} />
              </div>
              <div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">
                  Phone
                </h4>
                <p className="font-inter text-white/60 leading-relaxed">
                  +63 (912) 345-6789
                  <br />
                  +63 (998) 765-4321
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors duration-300">
              <div className="p-4 rounded-xl bg-dark-base border border-white/5 shrink-0">
                <ClockIcon className="text-pink-500" size={28} />
              </div>
              <div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">
                  Business Hours
                </h4>
                <p className="font-inter text-white/60 leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM (PHT)
                  <br />
                  Weekend: Closed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}