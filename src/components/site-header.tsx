import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Contato", href: "#contato" },
] as const;

function BrandLockup() {
  return (
    <a href="#inicio" className="flex flex-col leading-none">
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
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-8 px-6 lg:px-10">
        <BrandLockup />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.16em] text-white/75 uppercase transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button className="hidden h-11 px-6 text-xs font-semibold tracking-[0.14em] uppercase lg:inline-flex">
          Solicitar Orçamento
        </Button>
      </div>
    </header>
  );
}
