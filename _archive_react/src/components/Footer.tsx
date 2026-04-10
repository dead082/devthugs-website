import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Linkedin, Heart } from 'lucide-react';
export function Footer() {
  const socialLinks = [
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  },
  {
    icon: Github,
    href: '#',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }];

  return (
    <footer className="relative bg-dark-base border-t border-white/10 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <img
              src="/pasted-image.png"
              alt="Devthugz"
              className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2,
              duration: 0.6
            }}
            className="font-orbitron text-sm text-white/60 tracking-wider">
            
            CREATE. EXPLORE. EXPAND. CONQUER.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.4,
              duration: 0.6
            }}
            className="flex gap-6">
            
            {socialLinks.map((social, index) =>
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              whileHover={{
                scale: 1.2,
                y: -5
              }}
              whileTap={{
                scale: 0.9
              }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group">
              
                <social.icon
                className="text-white/60 group-hover:text-neon-cyan transition-colors"
                size={20} />
              
              </motion.a>
            )}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Copyright */}
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
              delay: 0.6,
              duration: 0.6
            }}
            className="flex items-center gap-2 text-white/50 text-sm font-inter">
            
            <span>© 2026 Devthugz. All rights reserved.</span>
            <Heart className="text-neon-cyan" size={14} fill="currentColor" />
          </motion.div>

          {/* Additional Info */}
          <motion.p
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
              delay: 0.8,
              duration: 0.6
            }}
            className="text-white/40 text-xs font-inter text-center max-w-md">
            
            Building the future of technology, one innovation at a time.
          </motion.p>
        </div>
      </div>
    </footer>);

}