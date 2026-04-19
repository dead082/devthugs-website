import React from 'react';
import { OurWorks } from '../components/startup/OurWorks';
import { WhatWeOffer } from '../components/startup/WhatWeOffer';
import { StartupPartnerships } from '../components/startup/StartupPartnerships';
export function StartUp() {
  return (
    <main className="pt-20 bg-dark-base min-h-screen">
      <OurWorks />
      <WhatWeOffer />
      <StartupPartnerships />
    </main>);

}