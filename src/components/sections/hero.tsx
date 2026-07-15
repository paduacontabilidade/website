import { Button } from "@/components/ui/button";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

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
        <div className="max-w-xl lg:max-w-3xl">
          <h1 className="text-4xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
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

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="h-12 px-7 text-xs font-semibold tracking-[0.14em] uppercase">
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              className="h-12 gap-2.5 border-white/25 bg-white/5 px-7 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-white/10 hover:text-white"
            >
              <WhatsAppIcon />
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
