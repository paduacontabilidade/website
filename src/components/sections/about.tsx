import {
  Award,
  Building2,
  Briefcase,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

const STATS = [
  { icon: Award, value: "+15", label: "Anos de experiência" },
  { icon: Building2, value: "500+", label: "Empresas atendidas" },
  { icon: Briefcase, value: "Diversos", label: "Segmentos atendidos" },
  { icon: CalendarCheck, value: "Compromisso", label: "Com prazos e resultados" },
] as const;

type StatProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

function Stat({ icon: Icon, value, label }: StatProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex size-10 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/10 text-gold-500">
        <Icon className="size-5" strokeWidth={1.5} />
      </span>
      <span className="text-lg leading-tight font-bold text-white">
        {value}
      </span>
      <span className="text-xs leading-snug font-normal text-white/60">
        {label}
      </span>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="quem-somos" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            {/* Placeholder: substituir por foto própria da seção (sala de reunião) */}
            <img
              src="/backgrounds/hero-desktop.png"
              alt="Escritório da Pádua Contabilidade"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[70%_center]"
            />
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-gold-500 uppercase">
              Quem Somos
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Excelência, compromisso e confiança desde 2010.
            </h2>

            <div className="mt-6 hidden space-y-4 text-base leading-relaxed text-white/70 md:block">
              <p>
                A Pádua Contabilidade LTDA foi fundada em 20 de setembro de
                2010 com o propósito de oferecer soluções contábeis e
                empresariais com qualidade, ética e responsabilidade.
              </p>
              <p>
                Ao longo destes anos, construímos uma história baseada em
                relacionamentos sólidos, atendimento personalizado e
                resultados que fazem a diferença para nossos clientes.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-6">
              {STATS.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
