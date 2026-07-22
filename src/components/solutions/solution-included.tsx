import { Check } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function SolutionIncluded({
  headline,
  checklist,
  whenItHelps,
  ctaLabel,
}: {
  headline: string;
  checklist: string[];
  whenItHelps: string[];
  ctaLabel: string;
}) {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-gold-600 uppercase">
              O que está incluído
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
              {headline}
            </h2>

            <ul className="mt-10 divide-y divide-border border-t border-border">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 py-4">
                  <Check
                    className="size-4 shrink-0 text-gold-600"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-secondary p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
              Quando faz sentido
            </p>
            <h3 className="mt-3 text-2xl leading-snug font-semibold text-foreground">
              Este serviço pode ajudar quando:
            </h3>

            <ul className="mt-6 space-y-4">
              {whenItHelps.map((item) => (
                <li
                  key={item}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Button
              render={<Link to="/#contato" />}
              nativeButton={false}
              className="mt-8 h-12 w-full text-xs font-semibold tracking-[0.14em] uppercase"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
