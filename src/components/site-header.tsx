import { useState } from "react";
import { BrandLockup } from "@/components/brand-lockup";
import { Button } from "@/components/ui/button";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

const NAV_LINKS = [
  { name: "Início", link: "#inicio" },
  { name: "Quem Somos", link: "#quem-somos" },
  { name: "Serviços", link: "#servicos" },
  { name: "Diferenciais", link: "#diferenciais" },
  { name: "Conteúdo", link: "#conteudo" },
  { name: "Contato", link: "#contato" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <BrandLockup />
        <NavItems items={NAV_LINKS} />
        <Button className="relative z-20 h-10 px-5 text-xs font-semibold tracking-[0.14em] uppercase">
          Solicitar Orçamento
        </Button>
      </NavBody>

      <MobileNav>
        <MobileNavHeader className="px-4">
          <BrandLockup />
          <MobileNavToggle
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMenuOpen}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.link}
              href={link.link}
              className="w-full py-1 text-sm font-medium tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-gold-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="mt-3 h-11 w-full text-xs font-semibold tracking-[0.14em] uppercase">
            Solicitar Orçamento
          </Button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
