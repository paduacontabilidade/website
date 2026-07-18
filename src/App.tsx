import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ConsultingHighlight } from "@/components/sections/consulting-highlight";
import { MethodologySection } from "@/components/sections/methodology";
import { AboutSection } from "@/components/sections/about";
import { SiteFooter } from "@/components/site-footer";

export function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <ConsultingHighlight />
        <MethodologySection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
