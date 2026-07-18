const STEPS = [
  {
    number: "01",
    title: "Entender",
    description: "Conhecer a empresa, a operação e as necessidades reais.",
  },
  {
    number: "02",
    title: "Organizar",
    description: "Reunir informações, corrigir falhas e identificar riscos.",
  },
  {
    number: "03",
    title: "Orientar",
    description: "Apresentar análises claras e recomendações aplicáveis.",
  },
  {
    number: "04",
    title: "Acompanhar",
    description: "Observar resultados e apoiar os próximos movimentos.",
  },
] as const;

export function MethodologySection() {
  return (
    <section id="metodologia" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.28em] text-gold-600 uppercase">
            Como Trabalhamos
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
            Proximidade para entender.
            <br />
            Técnica para orientar.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um processo simples para transformar informações em decisões
            práticas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
          {STEPS.map((step) => (
            <div key={step.number} className="lg:px-8 lg:first:pl-0">
              <p className="text-sm font-semibold tracking-[0.08em] text-gold-600">
                {step.number}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
