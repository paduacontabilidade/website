import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICE_OPTIONS = [
  "Contabilidade Empresarial",
  "Consultoria Empresarial",
  "Planejamento Tributário",
  "Auditoria Contábil",
  "Departamento Pessoal",
  "Perícias Contábeis",
  "Outro assunto",
] as const;

const WHATSAPP_NUMBER = "5565996810330";

export function ContactSection() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [servico, setServico] = useState("");
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `Olá! Meu nome é ${nome}.`,
      empresa && `Empresa: ${empresa}`,
      servico && `Serviço de interesse: ${servico}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-gold-500 uppercase">
              Contato
            </p>
            <h2 className="mt-4 max-w-md text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
              Vamos entender o que a sua empresa precisa?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Preencha os dados ao lado. Ao enviar, uma conversa será aberta
              no WhatsApp da Pádua com as informações organizadas.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase">
                  Telefone e WhatsApp
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="mt-1 block text-white transition-colors hover:text-gold-300"
                >
                  (65) 99681-0330
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase">
                  E-mail
                </p>
                <a
                  href="mailto:padua@paduacontabil.com.br"
                  className="mt-1 block text-white transition-colors hover:text-gold-300"
                >
                  padua@paduacontabil.com.br
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase">
                  Endereço
                </p>
                <p className="mt-1 text-white">
                  Rua Caracas, 280, Jardim das Américas, Cuiabá, MT
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-6 shadow-xl sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contato-nome"
                  className="text-sm font-semibold text-foreground"
                >
                  Nome
                </label>
                <input
                  id="contato-nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contato-empresa"
                  className="text-sm font-semibold text-foreground"
                >
                  Empresa
                </label>
                <input
                  id="contato-empresa"
                  type="text"
                  value={empresa}
                  onChange={(event) => setEmpresa(event.target.value)}
                  placeholder="Nome da empresa"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contato-servico"
                  className="text-sm font-semibold text-foreground"
                >
                  Serviço de interesse
                </label>
                <div className="relative mt-2">
                  <select
                    id="contato-servico"
                    required
                    value={servico}
                    onChange={(event) => setServico(event.target.value)}
                    className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-3 pr-10 text-sm text-foreground focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 focus:outline-none"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <label className="mt-6 flex items-start gap-3 text-sm text-foreground">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-0.5 size-4 accent-gold-600"
              />
              Autorizo o uso destes dados para retorno do contato.
            </label>

            <Button
              type="submit"
              className="mt-6 h-12 w-full text-xs font-semibold tracking-[0.14em] uppercase"
            >
              Enviar pelo WhatsApp
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Os dados não são armazenados neste site. O envio acontece pelo
              WhatsApp após sua confirmação.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
