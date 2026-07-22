import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { BrandLockup } from "@/components/brand-lockup";
import { SOLUTIONS } from "@/data/solutions";

const QUICK_LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Conteúdo", href: "/#conteudo" },
  { label: "Contato", href: "/#contato" },
] as const;

const LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "#" },
  { label: "LGPD", href: "#" },
] as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
      {children}
    </h3>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
          <div>
            <BrandLockup className="inline-flex" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Soluções contábeis, fiscais, trabalhistas e empresariais para
              impulsionar o seu negócio com segurança e estratégia.
            </p>
          </div>

          <nav aria-label="Links rápidos">
            <FooterHeading>Links Rápidos</FooterHeading>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Serviços">
            <FooterHeading>Serviços</FooterHeading>
            <ul className="mt-5 space-y-3">
              {SOLUTIONS.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    to={`/solucoes/${solution.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-gold-300"
                  >
                    {solution.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>Contato</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-gold-500"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  Rua Caracas, 280, Jardim das Américas, Cuiabá/MT, 78060-907
                </address>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-gold-500"
                  aria-hidden="true"
                />
                <a
                  href="tel:+5565996810330"
                  className="transition-colors hover:text-gold-300"
                >
                  (65) 99681-0330
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-gold-500"
                  aria-hidden="true"
                />
                <a
                  href="mailto:padua@paduacontabil.com.br"
                  className="transition-colors hover:text-gold-300"
                >
                  padua@paduacontabil.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Pádua Contabilidade LTDA. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/50 transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
