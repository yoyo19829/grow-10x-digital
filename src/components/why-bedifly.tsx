import { ArrowRight } from "lucide-react";

const problems = [
  {
    q: "Not enough qualified leads?",
    a: "Your marketing may not be reaching the right audience.",
  },
  {
    q: "Getting traffic but no conversions?",
    a: "Your website may not be turning visitors into customers.",
  },
  {
    q: "Spending too much time on repetitive work?",
    a: "Your business may need smarter automation.",
  },
  {
    q: "Using disconnected tools and systems?",
    a: "Your technology should work together—not against you.",
  },
  {
    q: "Struggling to scale?",
    a: "You need a growth system built around measurable results.",
  },
];

export function WhyBedifly() {
  return (
    <section className="relative py-24 px-6 bg-navy-deep text-primary-foreground overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute top-0 -left-24 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left: heading + intro + CTA */}
        <div className="text-center lg:text-left">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-bold mb-4">
            Why Bedifly
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
            Your Business Needs More Than Just Marketing
          </h2>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/70 max-w-md">
            Getting customers today requires more than running ads or having a
            website.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-orange font-semibold text-lg">
            That's where Bedifly comes in.
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>

        {/* Right: problem list */}
        <div className="space-y-3">
          {problems.map((p) => (
            <div
              key={p.q}
              className="rounded-2xl p-5 bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-orange/40 transition-colors"
            >

              <div className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <p className="font-semibold text-primary-foreground/95">{p.q}</p>
                  <p className="text-sm text-primary-foreground/65 mt-1">{p.a}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
