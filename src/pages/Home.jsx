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
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Comparison />
      <FAQ />
      <CTA />
      <FloatingCall />
    </>
  );
}