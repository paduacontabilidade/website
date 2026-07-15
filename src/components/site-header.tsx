import { useState } from "react";
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

function BrandLockup() {
  return (
    <a href="#inicio" className="relative z-20 flex flex-col leading-none">
      <span className="text-lg font-bold tracking-[0.22em] text-white">
        PÁDUA
      </span>
      <span className="text-[0.6rem] font-medium tracking-[0.3em] text-gold-500">
        CONTABILIDADE
      </span>
      <span className="mt-1 text-[0.5rem] font-normal tracking-[0.08em] text-white/50">
        Auditoria e Consultoria Empresarial
      </span>
    </a>
  );
}

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
