import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function SolutionOtherCta() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-gold-500 uppercase">
              Outras Soluções
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl">
              Conheça a estrutura completa da Pádua.
            </h2>
          </div>

          <Button
            render={<Link to="/#servicos" />}
            nativeButton={false}
            variant="outline"
            className="h-11 shrink-0 border-white/25 bg-white/5 px-6 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-white/10 hover:text-white"
          >
            Ver todas as soluções
          </Button>
        </div>
      </div>
    </section>
  );
}
