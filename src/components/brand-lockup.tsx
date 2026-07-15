import { cn } from "@/lib/utils";

export function BrandLockup({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("flex flex-col leading-none", className)}>
      <span className="text-lg font-bold tracking-[0.22em] text-white">
        PÁDUA
      </span>
      <span className="text-[0.6rem] font-medium tracking-[0.3em] text-gold-500">
        CONTABILIDADE
      </span>
      <span className="mt-1 text-[0.5rem] font-normal tracking-[0.08em] text-white/50">
        Auditoria e Consultoria Empresarial
      </span>
    </a>
  );
}
