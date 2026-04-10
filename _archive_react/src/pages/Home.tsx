import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { WhyUs } from '../components/WhyUs';
import { Partnerships } from '../components/Partnerships';
import { PersuasiveCTA } from '../components/PersuasiveCTA';
export function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <WhyUs />
      <Partnerships />
      <PersuasiveCTA />
    </main>);

}