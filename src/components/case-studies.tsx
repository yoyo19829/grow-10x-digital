import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Palette,
  Target,
  TrendingDown,
  TrendingUp,
  ClipboardCheck,
} from "lucide-react";

export function CaseStudies() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange/[0.02] to-navy/[0.04]" />

      <div className="relative max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-bold mb-3">
            ✣ Case Study
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep leading-tight">
            Proven Growth.{" "}
            <span className="text-gradient-orange">
              Measurable Results.
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            How strategic performance marketing reduced acquisition costs,
            improved lead quality, and increased conversions.
          </p>
        </div>

        {/* CASE STUDY CARD */}
        <div className="mt-12 rounded-[2rem] border border-border bg-white/90 shadow-soft overflow-hidden">

          <div className="p-6 md:p-8">

            {/* CLIENT HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white border border-border shadow-soft grid place-items-center shrink-0">
                  <Building2 className="h-6 w-6 text-navy-deep" />
                </div>

                <div>
                  <div className="flex items-center gap-2 text-orange text-[10px] font-bold uppercase tracking-wider">
                    <Building2 className="h-3.5 w-3.5" />
                    Real Estate
                  </div>

                  <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-navy-deep">
                    Indian Property Expert
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="text-xs md:text-sm font-semibold text-navy-deep">
                  Project Value:{" "}
                  <span className="text-orange">
                    ₹1.5 Crore / ~$156.7K
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-4 py-2.5 text-xs font-bold text-white">
                  <Clock3 className="h-3.5 w-3.5 text-orange" />
                  30-day improvement
                </div>
              </div>
            </div>

            <div className="mt-7 h-px bg-border" />

            {/* CHALLENGE + SOLUTION */}
            <div className="mt-7 grid md:grid-cols-2 gap-5">

              {/* CHALLENGE */}
              <div className="rounded-2xl border border-orange/15 bg-orange/[0.035] p-5">

                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange" />

                  <span className="text-xs font-bold uppercase tracking-wider text-orange">
                    The Challenge
                  </span>
                </div>

                <h4 className="mt-3 text-lg font-extrabold text-navy-deep">
                  High CPL. Low conversion.
                </h4>

                <div className="mt-3 space-y-2">

                  <div className="flex items-center gap-2 text-xs text-navy-deep">
                    <span className="text-orange">•</span>
                    CPL was too high for the target city
                  </div>

                  <div className="flex items-center gap-2 text-xs text-navy-deep">
                    <span className="text-orange">•</span>
                    Low percentage of leads were converting
                  </div>

                  <div className="flex items-center gap-2 text-xs text-navy-deep">
                    <span className="text-orange">•</span>
                    Too many low-intent enquiries
                  </div>

                </div>
              </div>

              {/* SOLUTION */}
              <div className="rounded-2xl border border-border bg-background/70 p-5">

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange" />

                  <span className="text-xs font-bold uppercase tracking-wider text-orange">
                    Our Solution
                  </span>
                </div>

                <h4 className="mt-3 text-lg font-extrabold text-navy-deep">
                  Better creatives. Better leads.
                </h4>

                <div className="mt-3 space-y-3">

                  <div className="flex items-start gap-2">
                    <Palette className="h-4 w-4 text-orange mt-0.5 shrink-0" />

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-navy-deep">
                        New hooks & creatives
                      </strong>{" "}
                      built to attract the right audience and improve campaign
                      efficiency.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <ClipboardCheck className="h-4 w-4 text-orange mt-0.5 shrink-0" />

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-navy-deep">
                        4 qualifying questions
                      </strong>{" "}
                      added before submission to filter low-intent leads.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-orange mt-0.5 shrink-0" />

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Focus shifted from{" "}
                      <strong className="text-navy-deep">
                        lead quantity to lead quality
                      </strong>{" "}
                      and conversion potential.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* METRICS */}
            <div className="mt-6 grid md:grid-cols-2 gap-5">

              <MetricCard
                title="Cost Per Lead"
                improvement="67.57% lower"
                improvementIcon={TrendingDown}
                before="₹370"
                after="₹120"
              />

              <MetricCard
                title="Conversion Rate"
                improvement="125% improvement"
                improvementIcon={TrendingUp}
                before="2%"
                after="4.5%"
              />

            </div>

            {/* ROAS */}
            <div className="mt-6 rounded-2xl bg-navy-deep px-6 py-5 text-white">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-orange">
                    Return on Ad Spend
                  </div>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-extrabold">
                      50X
                    </span>

                    <span className="text-xl font-bold text-orange">
                      ROAS
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-gradient px-5 py-3 text-xs font-bold text-white shadow-glow hover:opacity-95 transition"
                >
                  Scale Your Brand
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  title,
  improvement,
  improvementIcon: ImprovementIcon,
  before,
  after,
}: {
  title: string;
  improvement: string;
  improvementIcon: React.ComponentType<{ className?: string }>;
  before: string;
  after: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/70 px-5 py-5">

      <div className="flex items-center justify-between gap-3">

        <div className="text-xs font-bold uppercase tracking-wider text-navy-deep">
          {title}
        </div>

        <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
          <ImprovementIcon className="h-3 w-3" />
          {improvement}
        </div>

      </div>

      <div className="mt-5 flex items-center justify-between">

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Before
          </div>

          <div className="mt-1 text-3xl font-extrabold text-navy-deep/60 line-through decoration-orange">
            {before}
          </div>
        </div>

        <ArrowRight className="h-6 w-6 text-orange" />

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-orange">
            After
          </div>

          <div className="mt-1 text-3xl font-extrabold text-navy-deep">
            {after}
          </div>
        </div>

      </div>
    </div>
  );
}
