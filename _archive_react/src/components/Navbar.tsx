import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Start Up',
    path: '/startup'
  },
  {
    name: 'Get in Touch',
    path: '/contact'
  }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-base/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent backdrop-blur-sm'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.05
            }}
            className="flex items-center space-x-3">
            
            <img
              src="/pasted-image.png"
              alt="Devthugz Logo"
              className="h-12 w-auto" />
            
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const isRouterLink = item.path.startsWith('/');
              return isRouterLink ?
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: -20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.1
                }}>
                
                  <Link
                  to={item.path}
                  className="text-white/80 hover:text-neon-cyan transition-colors duration-300 font-inter font-medium relative group inline-block">
                  
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div> :

              <motion.a
                key={item.name}
                href={item.path}
                initial={{
                  opacity: 0,
                  y: -20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.1
                }}
                className="text-white/80 hover:text-neon-cyan transition-colors duration-300 font-inter font-medium relative group">
                
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
                </motion.a>;

            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-neon-cyan transition-colors">
            
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-dark-base/95 backdrop-blur-xl border-t border-white/10">
          
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => {
              const isRouterLink = item.path.startsWith('/');
              return isRouterLink ?
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-neon-cyan transition-colors duration-300 font-inter font-medium py-2">
                
                    {item.name}
                  </Link> :

              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-neon-cyan transition-colors duration-300 font-inter font-medium py-2">
                
                    {item.name}
                  </a>;

            })}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}