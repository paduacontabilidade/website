import {
  FileSpreadsheet,
  FolderOpen,
  Handshake,
  SearchCheck,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  icon: LucideIcon;
  shortTitle: string;
  cardDescription: string;
  heroHeadline?: string;
  heroDescription?: string;
  included?: {
    headline: string;
    checklist: string[];
    whenItHelps: string[];
    ctaLabel: string;
  };
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "contabilidade-empresarial",
    icon: FileSpreadsheet,
    shortTitle: "Contabilidade",
    cardDescription:
      "A Pádua cuida dos registros, demonstrações e obrigações contábeis com atenção à conformidade e à qualidade das informações entregues à gestão.",
    heroHeadline:
      "Contabilidade organizada para mostrar o que acontece na empresa.",
    heroDescription:
      "A Pádua cuida dos registros, demonstrações e obrigações contábeis com atenção à conformidade e à qualidade das informações entregues à gestão.",
    included: {
      headline: "Atuação organizada conforme a necessidade da empresa.",
      checklist: [
        "Escrituração e conciliações contábeis",
        "Demonstrações financeiras",
        "Obrigações acessórias",
        "Fechamentos e relatórios",
        "Orientação sobre informações contábeis",
      ],
      whenItHelps: [
        "A empresa precisa organizar registros e documentos",
        "Os números contábeis não ajudam na tomada de decisão",
        "Existem dúvidas sobre obrigações e fechamentos",
      ],
      ctaLabel: "Quero organizar minha contabilidade",
    },
  },
  {
    slug: "consultoria-empresarial",
    icon: Handshake,
    shortTitle: "Consultoria Empresarial",
    cardDescription:
      "Apoio estratégico à gestão, organização administrativa e tomada de decisões.",
    heroHeadline:
      "Análise empresarial para transformar números em prioridades.",
    heroDescription:
      "A consultoria conecta informações contábeis, financeiras e operacionais para ajudar a administração a identificar riscos, oportunidades e decisões necessárias.",
    included: {
      headline: "Atuação organizada conforme a necessidade da empresa.",
      checklist: [
        "Diagnóstico da situação empresarial",
        "Análise de custos e resultados",
        "Fluxo de caixa e capital de giro",
        "Indicadores de gestão",
        "Plano de recomendações e acompanhamento",
      ],
      whenItHelps: [
        "O caixa não acompanha o resultado da empresa",
        "A gestão precisa de indicadores confiáveis",
        "Existem decisões importantes sem informações suficientes",
      ],
      ctaLabel: "Conversar sobre consultoria",
    },
  },
  {
    slug: "auditoria-contabil",
    icon: SearchCheck,
    shortTitle: "Auditoria Contábil",
    cardDescription:
      "Análise de processos, controles internos e conformidade contábil para mais segurança.",
    heroHeadline:
      "Confiança para enxergar riscos antes que eles cresçam.",
    heroDescription:
      "A auditoria examina registros, demonstrações e controles para avaliar a consistência das informações e apoiar melhorias nos processos da empresa.",
    included: {
      headline: "Atuação organizada conforme a necessidade da empresa.",
      checklist: [
        "Revisão de demonstrações e registros",
        "Testes e análise documental",
        "Avaliação de controles internos",
        "Identificação de riscos",
        "Relatório com constatações e recomendações",
      ],
      whenItHelps: [
        "Sócios e gestores precisam de maior segurança",
        "Existem falhas recorrentes nos controles",
        "A empresa passará por negociação ou prestação de contas",
      ],
      ctaLabel: "Conversar sobre auditoria",
    },
  },
  {
    slug: "consultoria-tributaria",
    icon: ShieldCheck,
    shortTitle: "Consultoria Tributária",
    cardDescription:
      "Planejamento tributário e orientação fiscal para reduzir riscos e aproveitar oportunidades.",
    heroHeadline:
      "Decisões tributárias baseadas na realidade da operação.",
    heroDescription:
      "O planejamento avalia o regime, a atividade e as operações da empresa para identificar riscos e alternativas legais que façam sentido para o negócio.",
    included: {
      headline: "Atuação organizada conforme a necessidade da empresa.",
      checklist: [
        "Revisão do enquadramento tributário",
        "Simulações entre regimes",
        "Análise das operações",
        "Identificação de riscos fiscais",
        "Recomendações e acompanhamento",
      ],
      whenItHelps: [
        "A carga tributária parece incompatível com a operação",
        "A empresa cresceu ou mudou sua forma de atuar",
        "É necessário planejar o próximo exercício",
      ],
      ctaLabel: "Solicitar uma análise tributária",
    },
  },
  {
    slug: "departamento-pessoal",
    icon: Users,
    shortTitle: "Departamento Pessoal",
    cardDescription:
      "Folha de pagamento, admissões, férias, rescisões e obrigações trabalhistas e legais.",
    heroHeadline:
      "Rotinas trabalhistas organizadas do início ao fim do vínculo.",
    heroDescription:
      "A Pádua acompanha admissões, folha, férias, afastamentos e desligamentos, além das obrigações relacionadas à gestão dos empregados.",
    included: {
      headline: "Atuação organizada conforme a necessidade da empresa.",
      checklist: [
        "Admissões e cadastros",
        "Folha de pagamento",
        "Férias e afastamentos",
        "Rescisões",
        "eSocial e obrigações trabalhistas",
      ],
      whenItHelps: [
        "A empresa está contratando empregados",
        "Existem dúvidas sobre prazos e documentos",
        "A gestão precisa reduzir falhas nas rotinas trabalhistas",
      ],
      ctaLabel: "Falar sobre Departamento Pessoal",
    },
  },
  {
    slug: "pericia-contabil",
    icon: FolderOpen,
    shortTitle: "Perícia Contábil",
    cardDescription:
      "A perícia contábil apoia a compreensão de fatos e valores em demandas específicas, conforme o objeto, a documentação disponível e a contratação realizada.",
    heroHeadline:
      "Análise técnica para situações que exigem precisão contábil.",
    heroDescription:
      "A perícia contábil apoia a compreensão de fatos e valores em demandas específicas, conforme o objeto, a documentação disponível e a contratação realizada.",
    included: {
      headline: "Atuação organizada conforme a necessidade da empresa.",
      checklist: [
        "Análise técnica documental",
        "Apuração e conferência de valores",
        "Cálculos contábeis",
        "Assistência técnica",
        "Laudos e pareceres conforme o escopo contratado",
      ],
      whenItHelps: [
        "Há divergência sobre valores ou registros",
        "Uma demanda exige análise contábil especializada",
        "É necessário apoio técnico em processo ou negociação",
      ],
      ctaLabel: "Apresentar meu caso",
    },
  },
];

export function getSolutionBySlug(slug: string | undefined) {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
