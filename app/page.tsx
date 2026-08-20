import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollFill from "@/components/ScrollFill";
import Treatments from "@/components/Treatments";
import Packages from "@/components/Packages";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <Hero />
      <ScrollFill />
      <Treatments />
      <Packages />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
