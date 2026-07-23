import { Link } from "react-router";
import { cn } from "@/lib/utils";

export function BrandLockup({ className }: { className?: string }) {
  return (
    <Link to="/#inicio" className={cn("flex items-center gap-3", className)}>
      <img src="/logo-padua.png" alt="" className="size-14 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-[0.22em] text-white">
          PÁDUA
        </span>
        <span className="text-[0.6rem] font-medium tracking-[0.3em] text-gold-500">
          CONTABILIDADE
        </span>
        <span className="mt-1 text-[0.5rem] font-normal tracking-[0.08em] text-white/50">
          Auditoria e Consultoria Empresarial
        </span>
      </span>
    </Link>
  );
}
