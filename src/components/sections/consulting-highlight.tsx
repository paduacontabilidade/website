import { ArrowRight } from "lucide-react";

export function ConsultingHighlight() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-gold-500 uppercase">
              Consultoria Empresarial
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Os números da empresa precisam ajudar na gestão.
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-white/70">
              A consultoria analisa informações financeiras, custos,
              indicadores, processos e riscos para ajudar o empresário a
              compreender a situação do negócio e definir prioridades.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-gold-500 uppercase transition-colors hover:text-gold-300"
            >
              Conhecer a Consultoria
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
