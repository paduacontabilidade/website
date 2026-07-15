import {
  ArrowRight,
  ChevronRight,
  FileSpreadsheet,
  FolderOpen,
  Handshake,
  SearchCheck,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const SERVICES = [
  {
    icon: FileSpreadsheet,
    title: "Contabilidade",
    description:
      "Escrituração contábil, demonstrações financeiras e obrigações acessórias com segurança e conformidade.",
  },
  {
    icon: Handshake,
    title: "Consultoria Empresarial",
    description:
      "Apoio estratégico à gestão, organização administrativa e tomada de decisões.",
  },
  {
    icon: SearchCheck,
    title: "Auditoria Contábil",
    description:
      "Análise de processos, controles internos e conformidade contábil para mais segurança.",
  },
  {
    icon: ShieldCheck,
    title: "Consultoria Tributária",
    description:
      "Planejamento tributário e orientação fiscal para reduzir riscos e aproveitar oportunidades.",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description:
      "Folha de pagamento, admissões, férias, rescisões e obrigações trabalhistas e legais.",
  },
  {
    icon: FolderOpen,
    title: "Perícia Contábil",
    description:
      "Serviços combinados de escritório e apoio administrativo para mais eficiência no dia a dia.",
  },
] as const;

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <li className="relative rounded-xl border border-foreground/10 bg-card">
      <GlowingEffect
        disabled={false}
        glow
        spread={40}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex h-full items-center gap-4 px-5 py-4 md:flex-col md:items-start md:gap-0 md:px-6 md:py-7">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/10 text-gold-600 md:size-12">
          <Icon className="size-5 md:size-6" strokeWidth={1.5} />
        </span>

        <h3 className="text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:mt-5">
          {title}
        </h3>

        <p className="hidden text-sm leading-relaxed text-muted-foreground md:mt-2 md:block">
          {description}
        </p>

        <a
          href="#"
          className="hidden items-center gap-1.5 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700 md:mt-auto md:inline-flex md:pt-5"
        >
          Saiba mais
          <ArrowRight className="size-4" />
        </a>

        <ChevronRight
          className="ml-auto size-4 shrink-0 text-gold-600 md:hidden"
          aria-hidden="true"
        />
      </div>
    </li>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.28em] text-gold-600 uppercase">
            Nossos Serviços
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Soluções completas para a gestão do seu negócio.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
