import { Closing } from "@/components/site/Closing";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { MobilePanel } from "@/components/site/MobilePanel";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { SiteRuntime } from "@/components/site/SiteRuntime";
import { Topbar } from "@/components/site/Topbar";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SiteRuntime />
      <Topbar />
      <main id="contenido-principal">
        <Hero />
        <Manifesto />
        <Services />
        <Process />
        <Closing />
      </main>
      <MobilePanel />
      <WhatsAppButton />
    </>
  );
}
