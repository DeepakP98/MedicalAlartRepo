import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Comparison from "../components/Comparison";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import FloatingCall from "../components/FloatingCall";
import ContactModal from "../components/ContactModal"; 

export default function Home() {
  const [open, setOpen] = useState(false); 

  return (
    <>
  
      <Navbar onGetStarted={() => setOpen(true)} />

      <Hero onGetStarted={() => setOpen(true)} />

      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Comparison />
      <FAQ />

     <CTA onGetStarted={() => setOpen(true)} />

      <FloatingCall />

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}