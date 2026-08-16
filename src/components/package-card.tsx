import { ArrowRight, Check } from "lucide-react";
import { Pkg } from "@/data/landing-data";

export function PackageCard({ pkg, index }: { pkg: Pkg; index: number }) {

  return (
    <div
      className={`group relative h-full rounded-3xl border p-8 shadow-soft hover:shadow-navy hover:-translate-y-1 transition-all overflow-hidden flex flex-col ${
        pkg.highlight
          ? "bg-navy-deep text-primary-foreground border-navy-deep"
          : "bg-card border-border"
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {pkg.highlight && (
        <div className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest bg-orange-gradient text-white rounded-full px-3 py-1 shadow-glow">
          Most Popular
        </div>
      )}
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-orange/10 blur-2xl group-hover:bg-orange/25 transition" />

      <div className="relative flex flex-1 flex-col">
        <div className={`text-[10px] font-bold uppercase tracking-widest ${pkg.highlight ? "text-white/50" : "text-muted-foreground"}`}>
          {pkg.category}
        </div>
        <div className="mt-2 text-3xl">{pkg.emoji}</div>
        <h3 className={`mt-3 text-2xl font-bold ${pkg.highlight ? "text-white" : "text-navy-deep"}`}>
          {pkg.name}
        </h3>
        <p className={`mt-2 min-h-[2.75rem] text-sm leading-relaxed ${pkg.highlight ? "text-white/70" : "text-muted-foreground"}`}>
          {pkg.tagline}
        </p>

        <div className="mt-6 min-h-[1rem]" />

        <a
          href="#contact"
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
            pkg.highlight
              ? "bg-orange-gradient text-white shadow-glow hover:opacity-90"
              : "bg-navy-deep text-primary-foreground hover:bg-navy shadow-navy"
          }`}
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-8 flex-1 space-y-6">
          {pkg.sections.map((sec) => (
            <div key={sec.title}>
              <div className="text-xs font-bold uppercase tracking-widest mb-3 text-orange">
                {sec.title}
              </div>
              <ul className="space-y-2">
                {sec.items.map((it) => (
                  <li key={it} className={`flex items-start gap-2 text-sm ${pkg.highlight ? "text-white/85" : "text-foreground/85"}`}>
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {pkg.note && (
          <div className={`mt-6 text-xs italic ${pkg.highlight ? "text-white/60" : "text-muted-foreground"}`}>
            Note: {pkg.note}
          </div>
        )}
      </div>
    </div>
  );
}