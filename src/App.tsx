import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { SiteFooter } from "@/components/site-footer";

export function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
