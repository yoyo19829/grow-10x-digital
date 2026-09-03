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
  Users,
  Zap,
} from "lucide-react";

export function CaseStudies() {
  return (
    <>
      {/* =========================================================
          CASE STUDY SECTION
      ========================================================== */}
      <section
        id="case-studies"
        className="relative py-20 px-6 overflow-hidden"
      >
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

                <div className="flex flex-wrap items-center gap-3 md:gap-5">
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
                        built to attract the right audience and improve
                        campaign efficiency.
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

      {/* =========================================================
          FOUNDER SECTION
      ========================================================== */}
      <section
        id="founder"
        className="relative py-16 px-6 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange/[0.02] to-navy/[0.03]" />

        <div className="relative max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
              Meet The Founder
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep leading-tight">
              The person behind{" "}
              <span className="text-gradient-orange">
                10X Digital.
              </span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Engineering mindset. Marketing experience. Technology-driven
              growth.
            </p>
          </div>

          {/* FOUNDER CARD */}
          <div className="mt-10 rounded-[2rem] border border-border bg-white/90 shadow-soft overflow-hidden">
            <div className="p-6 md:p-8">

              <div className="grid md:grid-cols-[250px_1fr] gap-8 md:gap-10 items-center">

                {/* FOUNDER IMAGE */}
                <div className="relative w-full max-w-[250px] mx-auto md:mx-0">

                  <div className="absolute -inset-2 rounded-[1.5rem] bg-orange/10 blur-xl" />

                  <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card">
                    <img
                      src="/founder.jpeg"
                      alt="Aashutosh Sharma - Founder of 10X Digital"
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>

                </div>

                {/* FOUNDER CONTENT */}
                <div>

                  <div className="text-[10px] uppercase tracking-[0.18em] text-orange font-bold">
                    Founder
                  </div>

                  <h3 className="mt-1 text-2xl md:text-3xl font-extrabold text-navy-deep">
                    Aashutosh Sharma
                  </h3>

                  <div className="mt-1 text-xs md:text-sm font-medium text-muted-foreground">
                    Growth Strategist • Technology • Performance Marketing
                  </div>

                  {/* STORY */}
                  <div className="mt-5 space-y-3">

                    <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                      Aashutosh started out with an engineering degree, but
                      soon discovered his real passion at the cross-section
                      of code, market trends, and advertising. Over the past
                      10+ years, he has turned analytical thinking and
                      strategic testing into systems that drive real business
                      growth.
                    </p>

                    <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                      His philosophy is simple: technology and fancy copy mean
                      little if you aren't reaching the right person at the
                      right moment.
                    </p>

                    <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                      Following that principle, he has helped businesses
                      generate{" "}
                      <span className="font-bold text-navy-deep">
                        1 Lakh+ high-quality leads
                      </span>{" "}
                      across Meta, Google, and WhatsApp, while maintaining an
                      average{" "}
                      <span className="font-bold text-orange">
                        7x ROAS.
                      </span>
                    </p>

                  </div>

                  {/* STATS */}
                  <div className="mt-6 grid grid-cols-3 gap-2 md:gap-3">

                    {/* ROAS */}
                    <div className="rounded-xl border border-border bg-background/70 px-3 py-3">
                      <TrendingUp className="h-4 w-4 text-orange mb-1.5" />

                      <div className="text-lg font-extrabold text-navy-deep">
                        7x
                      </div>

                      <div className="text-[9px] md:text-[10px] text-muted-foreground">
                        Average ROAS
                      </div>
                    </div>

                    {/* LEADS */}
                    <div className="rounded-xl border border-border bg-background/70 px-3 py-3">
                      <Users className="h-4 w-4 text-orange mb-1.5" />

                      <div className="text-lg font-extrabold text-navy-deep">
                        1L+
                      </div>

                      <div className="text-[9px] md:text-[10px] text-muted-foreground">
                        Leads Generated
                      </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="rounded-xl border border-border bg-background/70 px-3 py-3">
                      <Zap className="h-4 w-4 text-orange mb-1.5" />

                      <div className="text-lg font-extrabold text-navy-deep">
                        10+
                      </div>

                      <div className="text-[9px] md:text-[10px] text-muted-foreground">
                        Years Experience
                      </div>
                    </div>

                  </div>

                  {/* PHILOSOPHY */}
                  <div className="mt-5 rounded-xl border border-orange/15 bg-orange/[0.035] px-4 py-3">
                    <div className="flex items-start gap-2.5">

                      <CheckCircle2 className="h-4 w-4 text-orange shrink-0 mt-0.5" />

                      <div>
                        <div className="text-[9px] uppercase tracking-wider font-bold text-orange">
                          His Philosophy
                        </div>

                        <p className="mt-1 text-xs italic leading-relaxed text-navy-deep">
                          "Your marketing expectations always have to line up
                          with the budget you bring to the table."
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-gradient px-5 py-2.5 text-xs font-bold text-white shadow-glow hover:opacity-95 transition"
                  >
                    Talk to Aashutosh
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   METRIC CARD
========================================================= */

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
