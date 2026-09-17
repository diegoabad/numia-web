import { Closing } from "@/components/site/Closing";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { MobilePanel } from "@/components/site/MobilePanel";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { SiteRuntime } from "@/components/site/SiteRuntime";
import { Topbar } from "@/components/site/Topbar";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Work } from "@/components/site/Work";

export default function Home() {
  return (
    <>
      <SiteRuntime />
      <Topbar />
      <main id="contenido-principal">
        <Hero />
        <Manifesto />
        <Services />
        <Work />
        <Process />
        <Closing />
      </main>
      <MobilePanel />
      <WhatsAppButton />
    </>
  );
}
