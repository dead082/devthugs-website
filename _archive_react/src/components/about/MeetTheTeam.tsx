import React, { useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';
export const teamMembers = [
{
  name: 'Juan Dela Cruz',
  role: 'Chief Executive Officer',
  tagline: 'Visionary leader driving innovation.',
  skills: ['Leadership', 'Strategy', 'Innovation', 'Business Development'],
  projects: [
  {
    title: 'Project Nexus',
    description:
    'Led the strategic vision and successful launch of our flagship AI platform.'
  },
  {
    title: 'Global Expansion',
    description:
    'Spearheaded the initiative to open three new international offices.'
  }]

},
{
  name: 'Maria Santos',
  role: 'Chief Technology Officer',
  tagline: 'Architecting scalable futures.',
  skills: ['System Architecture', 'Cloud', 'AI/ML', 'DevOps'],
  projects: [
  {
    title: 'CloudForge Migration',
    description:
    'Architected the complete migration to a scalable microservices infrastructure.'
  },
  {
    title: 'Neural Network Hub',
    description:
    'Designed the core architecture for our collaborative ML platform.'
  }]

},
{
  name: 'Carlos Reyes',
  role: 'Lead Developer',
  tagline: 'Turning coffee into code.',
  skills: ['React', 'TypeScript', 'Node.js', 'System Design'],
  projects: [
  {
    title: 'DataFlow Engine',
    description:
    'Lead developer for the real-time data processing pipeline.'
  },
  {
    title: 'Core Component Library',
    description:
    'Built the foundational UI library used across all products.'
  }]

},
{
  name: 'Ana Gonzales',
  role: 'UI/UX Designer',
  tagline: 'Crafting pixel-perfect experiences.',
  skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
  projects: [
  {
    title: 'CyberShield Dashboard',
    description:
    'Redesigned the main user interface for improved usability.'
  },
  {
    title: 'Devthugs Design System',
    description:
    'Created and maintained the comprehensive design token system.'
  }]

},
{
  name: 'Miguel Torres',
  role: 'Backend Engineer',
  tagline: 'Master of databases and APIs.',
  skills: ['Python', 'PostgreSQL', 'REST APIs', 'Microservices'],
  projects: [
  {
    title: 'Auth Service V2',
    description:
    'Rewrote the authentication service to support OAuth and SSO.'
  },
  {
    title: 'High-Frequency Trading API',
    description: 'Optimized database queries reducing latency by 40%.'
  }]

},
{
  name: 'Sofia Ramos',
  role: 'Frontend Engineer',
  tagline: 'Bringing designs to life.',
  skills: ['React', 'CSS', 'JavaScript', 'Performance'],
  projects: [
  {
    title: 'Project Nexus Web App',
    description: 'Implemented the complex interactive dashboard features.'
  },
  {
    title: 'Performance Optimization',
    description:
    'Reduced initial load time by 60% across all web properties.'
  }]

},
{
  name: 'Diego Mendoza',
  role: 'DevOps Engineer',
  tagline: 'Automating all the things.',
  skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
  projects: [
  {
    title: 'Zero-Downtime Deployment',
    description:
    'Implemented blue-green deployment strategy for core services.'
  },
  {
    title: 'Infrastructure as Code',
    description: 'Migrated all infrastructure provisioning to Terraform.'
  }]

},
{
  name: 'Isabella Cruz',
  role: 'Project Manager',
  tagline: 'Keeping chaos organized.',
  skills: ['Agile', 'Scrum', 'Jira', 'Stakeholder Management'],
  projects: [
  {
    title: 'Q3 Product Launch',
    description:
    'Successfully managed the cross-functional delivery of 3 major features.'
  },
  {
    title: 'Agile Transformation',
    description:
    'Led the transition to agile methodologies across the engineering org.'
  }]

},
{
  name: 'Rafael Aquino',
  role: 'QA Engineer',
  tagline: 'Breaking things to make them better.',
  skills: ['Selenium', 'Jest', 'Cypress', 'Test Automation'],
  projects: [
  {
    title: 'E2E Test Suite',
    description:
    'Built the comprehensive automated testing framework from scratch.'
  },
  {
    title: 'Continuous Testing Pipeline',
    description: 'Integrated automated tests into the CI/CD pipeline.'
  }]

},
{
  name: 'Camille Bautista',
  role: 'Marketing Lead',
  tagline: 'Telling our story to the world.',
  skills: ['SEO', 'Content Strategy', 'Analytics', 'Branding'],
  projects: [
  {
    title: 'Rebranding Campaign',
    description:
    'Led the successful rollout of the new Devthugs brand identity.'
  },
  {
    title: 'Growth Marketing',
    description:
    'Increased inbound leads by 150% through targeted campaigns.'
  }]

},
{
  name: 'Marco Villanueva',
  role: 'Data Scientist',
  tagline: 'Finding patterns in the noise.',
  skills: ['Python', 'TensorFlow', 'Data Analysis', 'Visualization'],
  projects: [
  {
    title: 'Predictive Analytics Engine',
    description: 'Developed the ML model for predicting user churn.'
  },
  {
    title: 'Recommendation System',
    description: 'Built the personalized content recommendation algorithm.'
  }]

},
{
  name: 'Jasmine Flores',
  role: 'Product Designer',
  tagline: 'Designing for the user.',
  skills: ['Figma', 'Wireframing', 'User Testing', 'Interaction Design'],
  projects: [
  {
    title: 'Mobile App Redesign',
    description:
    'Led the UX research and redesign of the mobile application.'
  },
  {
    title: 'Accessibility Audit',
    description:
    'Ensured all products meet WCAG 2.1 AA compliance standards.'
  }]

},
{
  name: 'Gabriel Navarro',
  role: 'Security Specialist',
  tagline: 'Guarding the digital fortress.',
  skills: ['Penetration Testing', 'OWASP', 'Encryption', 'Compliance'],
  projects: [
  {
    title: 'SOC2 Compliance',
    description:
    'Led the technical initiatives to achieve SOC2 Type II certification.'
  },
  {
    title: 'Vulnerability Management',
    description:
    'Implemented automated security scanning across all repositories.'
  }]

}];

export function MeetTheTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null>(
    null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (selectedMember) return; // Pause carousel when modal is open
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsToShow, selectedMember]);
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);
  const maxIndex = Math.max(0, teamMembers.length - itemsToShow);
  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? maxIndex : prev - 1);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
  };
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
          className="text-center mb-16">
          
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">
            Meet Our Team
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto">
            The brilliant minds behind Devthugs
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden px-4 py-8">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (1.5 / itemsToShow)}rem)`
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}>
              
              {teamMembers.map((member, index) =>
              <div
                key={index}
                className={`flex-shrink-0 ${itemsToShow === 1 ? 'w-full' : itemsToShow === 2 ? 'w-[calc(50%-0.75rem)]' : 'w-[calc(25%-1.125rem)]'}`}>
                
                  <div
                  onClick={() => setSelectedMember(member)}
                  className="group relative rounded-2xl border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 cursor-pointer overflow-hidden aspect-[3/4] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  
                    {/* Background Image */}
                    <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name.replace(' ', '')}`}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover bg-dark-secondary" />
                  

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                      <h3 className="font-orbitron text-lg font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="font-inter text-sm text-white/70">
                        {member.role}
                      </p>
                    </div>

                    {/* Hover hint */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="text-neon-cyan" size={20} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300">
              
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 px-2">
              {Array.from({
                length: maxIndex + 1
              }).map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-neon-cyan w-8' : 'bg-white/15 w-2 hover:bg-white/30'}`} />

              )}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300">
              
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Modal */}
      <AnimatePresence>
        {selectedMember &&
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setSelectedMember(null)}
            className="absolute inset-0 bg-dark-base/90 backdrop-blur-xl cursor-pointer" />
          

            {/* Modal Content */}
            <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300
            }}
            className="relative w-full max-w-2xl bg-dark-secondary border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] z-10">
            
              <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors">
              
                <X size={20} />
              </button>

              <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
                <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden bg-dark-base border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedMember.name.replace(' ', '')}`}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover" />
                
                </div>
                <div>
                  <h3 className="font-orbitron text-3xl font-bold text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="font-inter text-neon-cyan font-medium text-lg mb-3">
                    {selectedMember.role}
                  </p>
                  <p className="font-inter text-white/60 italic leading-relaxed">
                    "{selectedMember.tagline}"
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-orbitron text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                    Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill) =>
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-inter">
                    
                        {skill}
                      </span>
                  )}
                  </div>
                </div>

                <div>
                  <h4 className="font-orbitron text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
                    Featured Projects
                  </h4>
                  <div className="grid gap-4">
                    {selectedMember.projects.map((project, idx) =>
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-dark-base border border-white/5">
                    
                        <h5 className="font-orbitron font-medium text-white mb-2">
                          {project.title}
                        </h5>
                        <p className="font-inter text-sm text-white/50 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                  )}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full py-4 rounded-xl border border-neon-cyan/50 text-neon-cyan font-orbitron font-bold flex items-center justify-center gap-2 hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                    View Full Portfolio
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </section>);

}