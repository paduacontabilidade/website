import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden bg-ink"
    >
      <img
        src="/backgrounds/hero-mobile.png"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover md:hidden"
      />
      <img
        src="/backgrounds/hero-desktop.png"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 hidden size-full object-cover md:block"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink/80 via-ink/40 to-ink/80 md:bg-linear-to-r md:from-ink/85 md:via-ink/40 md:to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-24 lg:px-10">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contabilidade estratégica para empresas que buscam{" "}
            <span className="text-gold-500">
              segurança, organização e crescimento.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed font-normal text-white/70 sm:text-lg">
            Há mais de 15 anos oferecendo soluções contábeis, fiscais,
            trabalhistas, auditoria e consultoria empresarial para empresas de
            diversos segmentos.
          </p>

          <div className="mt-10">
            <Button
              render={<Link to="/#contato" />}
              nativeButton={false}
              className="h-12 px-7 text-xs font-semibold tracking-[0.14em] uppercase"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
