import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SOLUTIONS } from "@/data/solutions";

type ServiceCardProps = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceCard({ slug, icon: Icon, title, description }: ServiceCardProps) {
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

        <Link
          to={`/solucoes/${slug}`}
          className="hidden items-center gap-1.5 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700 md:mt-auto md:inline-flex md:pt-5"
        >
          Saiba mais
          <ArrowRight className="size-4" />
        </Link>

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
            Nossas soluções
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Uma estrutura contábil para acompanhar sua empresa de verdade
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <ServiceCard
              key={solution.slug}
              slug={solution.slug}
              icon={solution.icon}
              title={solution.shortTitle}
              description={solution.cardDescription}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
