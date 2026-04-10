import React from 'react';
import { LocationSection } from '../components/contact/LocationSection';
import { ContactForm } from '../components/contact/ContactForm';
export function Contact() {
  return (
    <main className="pt-20 bg-dark-base min-h-screen">
      <LocationSection />
      <ContactForm />
    </main>);

}