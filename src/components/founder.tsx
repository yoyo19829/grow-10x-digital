import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="relative py-20 px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
            Meet The Founder
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep leading-tight">
            The person behind{" "}
            <span className="text-gradient-orange">10X Digital.</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Engineering mindset. Marketing experience. Technology-driven
            growth.
          </p>
        </div>

        {/* FOUNDER CONTENT */}
        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">

          {/* FOUNDER IMAGE */}
          <div className="relative max-w-md mx-auto lg:mx-0 w-full">

            {/* IMAGE GLOW */}
            <div className="absolute -inset-3 rounded-[2rem] bg-orange/15 blur-2xl" />

            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
              <img
                src="/founder.jpeg"
                alt="Aashutosh Sharma - Founder of 10X Digital"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* EXPERIENCE BADGE */}
            <div className="absolute bottom-5 right-5 rounded-2xl border border-border bg-card/95 backdrop-blur-sm px-5 py-4 shadow-soft">
              <div className="text-2xl font-extrabold text-navy-deep">
                10+
              </div>

              <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                Years Experience
              </div>
            </div>
          </div>

          {/* FOUNDER INFORMATION */}
          <div>

            {/* LABEL */}
            <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold">
              Founder
            </div>

            {/* NAME */}
            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy-deep">
              Aashutosh Sharma
            </h3>

            {/* TITLE */}
            <div className="mt-1 text-sm font-medium text-muted-foreground">
              Growth Strategist • Technology • Performance Marketing
            </div>

            {/* STORY */}
            <div className="mt-6 space-y-4">

              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Aashutosh started out with an engineering degree, but it
                didn't take long for him to realize his real passion lived at
                the cross-section of code, market trends, and advertising.
                Over the past 10+ years, he's turned that mix of analytical
                thinking and strategic testing into a system that consistently
                drives real growth.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                His take on technology and marketing is straightforward:
                none of the fancy tools or fancy copy matter if you aren't
                reaching the right person at the exact moment they need you.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Living by that rule, he's helped businesses generate over{" "}
                <span className="font-bold text-navy-deep">
                  1 Lakh+ high-quality leads
                </span>{" "}
                across Meta, Google, and WhatsApp — while maintaining an
                average{" "}
                <span className="font-bold text-orange">
                  7x ROAS.
                </span>
              </p>
            </div>

            {/* STATS */}
            <div className="mt-7 grid grid-cols-3 gap-3">

              {/* ROAS */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <TrendingUp className="h-5 w-5 text-orange mb-2" />

                <div className="text-xl font-extrabold text-navy-deep">
                  7x
                </div>

                <div className="text-[10px] md:text-xs text-muted-foreground">
                  Average ROAS
                </div>
              </div>

              {/* LEADS */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <Users className="h-5 w-5 text-orange mb-2" />

                <div className="text-xl font-extrabold text-navy-deep">
                  1L+
                </div>

                <div className="text-[10px] md:text-xs text-muted-foreground">
                  Leads Generated
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <Zap className="h-5 w-5 text-orange mb-2" />

                <div className="text-xl font-extrabold text-navy-deep">
                  10+
                </div>

                <div className="text-[10px] md:text-xs text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>

            {/* PHILOSOPHY */}
            <div className="mt-7 rounded-2xl border border-orange/20 bg-orange/5 p-5">
              <div className="flex gap-3">

                <CheckCircle2 className="h-5 w-5 text-orange shrink-0 mt-0.5" />

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange">
                    His Philosophy
                  </div>

                  <p className="mt-2 text-sm md:text-base italic leading-relaxed text-navy-deep">
                    "Your marketing expectations always have to line up with
                    the budget you bring to the table."
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-gradient px-6 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform"
            >
              Talk to Aashutosh
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
