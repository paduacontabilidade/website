import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ConsultingHighlight } from "@/components/sections/consulting-highlight";
import { MethodologySection } from "@/components/sections/methodology";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ConsultingHighlight />
      <MethodologySection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
