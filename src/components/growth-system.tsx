import {
  Megaphone,
  UserRoundCheck,
  Cpu,
  CircleCheck,
  Zap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Traffic",
    icon: Megaphone,
    description: "Reach the right audience through Google, Meta, and targeted campaigns.",
  },
  {
    number: "02",
    title: "Leads",
    icon: UserRoundCheck,
    description: "Turn attention into enquiries through landing pages, forms, and campaigns.",
  },
  {
    number: "03",
    title: "Qualification",
    icon: Cpu,
    description: "Identify high-intent prospects using qualification, AI, and automation.",
  },
  {
    number: "04",
    title: "Conversion",
    icon: CircleCheck,
    description: "Turn qualified prospects into customers through better sales journeys.",
  },
  {
    number: "05",
    title: "Automation",
    icon: Zap,
    description: "Automate repetitive marketing and customer processes with AI.",
  },
  {
    number: "06",
    title: "Revenue",
    icon: TrendingUp,
    description: "Measure ROI and continuously optimize for scalable business growth.",
  },
];

export function GrowthSystem() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange/[0.02] to-navy/[0.04]" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
            ✦ Our Growth System
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep leading-tight">
            How We <span className="text-gradient-orange">Drive Growth</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We connect marketing, technology, and AI into one system that turns attention into
            measurable revenue.
          </p>
        </div>

        {/* GROWTH JOURNEY */}
        <div className="mt-10 rounded-[1.75rem] bg-white/80 backdrop-blur-xl border border-white/70 shadow-soft px-5 py-4 overflow-x-auto">
          <div className="flex items-center min-w-[850px]">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLast = index === stages.length - 1;

              return (
                <div key={stage.number} className="flex items-center flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 whitespace-nowrap">
                    <div
                      className={`h-9 w-9 rounded-full grid place-items-center shrink-0 ${
                        isLast ? "bg-orange text-white shadow-glow" : "bg-navy-deep text-white"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <span
                      className={`text-xs font-bold ${isLast ? "text-orange" : "text-navy-deep"}`}
                    >
                      {stage.number} {stage.title}
                    </span>
                  </div>

                  {!isLast && (
                    <div className="relative flex-1 mx-3 h-px bg-gradient-to-r from-border to-orange/40">
                      <ArrowRight className="absolute right-0 -top-2 h-4 w-4 text-orange" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* STAGE CARDS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isRevenue = index === stages.length - 1;

            return (
              <div
                key={stage.number}
                className={`group relative min-h-[270px] rounded-[1.5rem] p-5 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  isRevenue
                    ? "bg-navy-deep border-2 border-orange shadow-glow text-white"
                    : "bg-white/90 border border-border shadow-soft hover:shadow-navy"
                }`}
              >
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${
                      isRevenue ? "bg-orange/20 text-orange" : "bg-navy-deep/5 text-navy-deep"
                    }`}
                  >
                    {stage.number}
                  </span>

                  <div
                    className={`h-11 w-11 rounded-full grid place-items-center ${
                      isRevenue ? "bg-orange text-white shadow-glow" : "bg-orange/10 text-orange"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-7">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`text-lg font-bold ${isRevenue ? "text-white" : "text-navy-deep"}`}
                    >
                      {stage.title}
                    </h3>

                    {isRevenue && (
                      <span className="rounded-full bg-orange px-2 py-0.5 text-[9px] font-bold text-white">
                        GOAL
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 text-xs leading-relaxed ${
                      isRevenue ? "text-white/75" : "text-muted-foreground"
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>

                {/* ARROW */}
                <div
                  className={`mt-auto pt-5 flex justify-end ${
                    isRevenue ? "text-orange" : "text-navy-deep"
                  }`}
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
