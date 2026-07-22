import { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { getSolutionBySlug } from "@/data/solutions";
import { SolutionHero } from "@/components/solutions/solution-hero";
import { SolutionIncluded } from "@/components/solutions/solution-included";
import { SolutionOtherCta } from "@/components/solutions/solution-other-cta";

export function SolutionPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = getSolutionBySlug(slug);

  useEffect(() => {
    if (solution) {
      document.title = `${solution.shortTitle} · Pádua Contabilidade`;
    }
  }, [solution]);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  const headline = solution.heroHeadline ?? `${solution.shortTitle}.`;
  const description = solution.heroDescription ?? solution.cardDescription;

  return (
    <>
      <SolutionHero headline={headline} description={description} />
      {solution.included && (
        <SolutionIncluded
          headline={solution.included.headline}
          checklist={solution.included.checklist}
          whenItHelps={solution.included.whenItHelps}
          ctaLabel={solution.included.ctaLabel}
        />
      )}
      <SolutionOtherCta />
    </>
  );
}
