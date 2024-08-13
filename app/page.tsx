import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WorkingStep from "@/components/WorkingStep";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep />
      <Pricing  />
      <Testimonials />
    </div>
  );
}
