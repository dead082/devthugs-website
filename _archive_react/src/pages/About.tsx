import React from 'react';
import { WhatIsDevthugs } from '../components/about/WhatIsDevthugs';
import { HowItStarted } from '../components/about/HowItStarted';
import { WhyDevthugs } from '../components/about/WhyDevthugs';
import { VisionMission } from '../components/about/VisionMission';
import { MeetTheTeam } from '../components/about/MeetTheTeam';
export function About() {
  return (
    <main className="pt-20">
      <WhatIsDevthugs />
      <HowItStarted />
      <WhyDevthugs />
      <VisionMission />
      <MeetTheTeam />
    </main>);

}