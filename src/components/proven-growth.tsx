import {
  Sparkles,
  Building2,
  TrendingUp,
  ArrowRight,
  TrendingDown,
  Palette,
  Target,
  SlidersHorizontal,
  Clock,
  CheckCircle2,
} from "lucide-react";
import indianPropertyExpert from "@/assets/indian-property-expert.jpeg";

export function ProvenGrowth() {
  return (
    <section id="results" className="relative py-28 px-6 bg-background overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-navy/10 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-orange font-bold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Case Study
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-deep leading-tight">
            Proven Growth. <span className="text-gradient-orange">Measurable Results.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Real performance backed by verified metrics. Here is how strategic performance marketing
            scaled lead volume, cut acquisition costs, and dramatically improved conversion rates.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="mt-16 rounded-[2.5rem] border border-border bg-card shadow-soft p-8 md:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 bg-orange/10 rounded-full blur-3xl" />

          {/* Client Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-white border border-border p-2 flex items-center justify-center shadow-sm shrink-0">
                <img
                  src={indianPropertyExpert}
                  alt="Indian Property Expert"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange uppercase tracking-wider mb-1">
                  <Building2 className="h-3.5 w-3.5" /> Real Estate
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy-deep">
                  Indian Property Expert
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="glass px-4 py-2 rounded-2xl text-xs font-semibold text-navy-deep border border-border">
                Project Value: <span className="font-bold text-orange">₹1.5 Crore / ~$156.7K</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-navy-deep text-primary-foreground px-4 py-2 rounded-2xl text-xs font-semibold shadow-navy">
                <Clock className="h-3.5 w-3.5 text-orange" /> 30-day improvement
              </div>
            </div>
          </div>

          {/* Optimization Strategy Highlights */}
          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
              Key Optimizations
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-orange/15 text-orange flex items-center justify-center shrink-0">
                  <Palette className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-navy-deep">Ad Creatives</div>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/50 border border-border flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-orange/15 text-orange flex items-center justify-center shrink-0">
                  <Target className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-navy-deep">
                  Detailed Audience Targeting
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/50 border border-border flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-orange/15 text-orange flex items-center justify-center shrink-0">
                  <SlidersHorizontal className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-navy-deep">Budget Allocation</div>
              </div>
            </div>
          </div>

          {/* Before -> After Transformation Panels */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cost Per Lead Card */}
            <div className="rounded-3xl bg-secondary/40 border border-border p-7 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-navy-deep">
                  Cost Per Lead (CPL)
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <TrendingDown className="h-3.5 w-3.5" /> 67.57% lower lead cost
                </span>
              </div>

              <div className="mt-8 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Before
                  </div>
                  <div className="mt-1 text-2xl md:text-3xl font-extrabold text-muted-foreground line-through decoration-destructive/60">
                    ₹370
                  </div>
                  <div className="text-xs text-muted-foreground">$3.87 CPL</div>
                </div>

                <div className="flex flex-col items-center text-orange px-2">
                  <ArrowRight className="h-6 w-6 stroke-[2.5]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
                    30-day
                  </span>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-orange font-bold">
                    After
                  </div>
                  <div className="mt-1 text-4xl md:text-5xl font-black text-navy-deep">₹120</div>
                  <div className="text-xs font-semibold text-orange">$1.25 CPL</div>
                </div>
              </div>
            </div>

            {/* Conversion Rate Card */}
            <div className="rounded-3xl bg-secondary/40 border border-border p-7 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-navy-deep">
                  Conversion Rate
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <TrendingUp className="h-3.5 w-3.5" /> 125% conversion improvement
                </span>
              </div>

              <div className="mt-8 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Before
                  </div>
                  <div className="mt-1 text-2xl md:text-3xl font-extrabold text-muted-foreground line-through decoration-destructive/60">
                    2%
                  </div>
                  <div className="text-xs text-muted-foreground">Conversion</div>
                </div>

                <div className="flex flex-col items-center text-orange px-2">
                  <ArrowRight className="h-6 w-6 stroke-[2.5]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
                    30-day
                  </span>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-orange font-bold">
                    After
                  </div>
                  <div className="mt-1 text-4xl md:text-5xl font-black text-navy-deep">4.5%</div>
                  <div className="text-xs font-semibold text-orange">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Impact Stat Banner */}
          <div className="mt-8 rounded-3xl bg-navy-deep text-primary-foreground p-8 md:p-10 shadow-navy flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs uppercase tracking-widest font-bold text-orange">
                Return On Ad Spend
              </div>
              <div className="text-5xl md:text-6xl font-black tracking-tight text-white flex items-baseline justify-center md:justify-start gap-1">
                <span>50X</span>
                <span className="text-orange text-3xl font-extrabold">ROAS</span>
              </div>
              <p className="text-xs md:text-sm text-white/70">
                Generated from optimized Meta & Google performance marketing campaigns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 px-4 py-2.5 rounded-full border border-white/15">
                <CheckCircle2 className="h-4 w-4 text-orange" />
                ₹1.5 Crore / ~$156.7K project value
              </div>
              <a
                href="#contact"
                className="bg-orange-gradient text-white font-semibold text-sm px-6 py-3 rounded-full shadow-glow hover:opacity-95 transition-all inline-flex items-center gap-2"
              >
                Scale Your Brand
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
