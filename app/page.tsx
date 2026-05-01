import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Why } from "@/components/site/Why";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenido-principal">
        <Hero />
        <Services />
        <Why />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
