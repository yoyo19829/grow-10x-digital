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
    description:
      "Reach the right audience through Google, Meta, organic channels, and targeted digital campaigns.",
    phase: "Phase 01",
  },
  {
    number: "02",
    title: "Leads",
    icon: UserRoundCheck,
    description:
      "Convert attention into qualified enquiries through websites, landing pages, forms, and lead-generation campaigns.",
    phase: "Phase 02",
  },
  {
    number: "03",
    title: "Qualification",
    icon: Cpu,
    description:
      "Identify high-intent prospects using lead qualification, AI, automation, and intelligent follow-ups.",
    phase: "Phase 03",
  },
  {
    number: "04",
    title: "Conversion",
    icon: CircleCheck,
    description:
      "Turn qualified prospects into customers through better customer journeys, communication, and sales processes.",
    phase: "Phase 04",
  },
  {
    number: "05",
    title: "Automation",
    icon: Zap,
    description:
      "Automate repetitive marketing and customer processes using AI, WhatsApp automation, and intelligent workflows.",
    phase: "Phase 05",
  },
  {
    number: "06",
    title: "Revenue",
    icon: TrendingUp,
    description:
      "Measure the business outcome and continuously optimize the system for better ROI, customer acquisition, and scalable growth.",
    phase: "Scalable ROI",
  },
];

export function GrowthSystem() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange/[0.02] to-navy/[0.04]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-bold mb-4">
            ✣ Systematic Growth Architecture
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-deep leading-[1.08]">
            How We <span className="text-gradient-orange">Drive Growth</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We connect marketing, technology, and AI into one integrated growth
            system—designed to take a potential customer from the first
            interaction to measurable business revenue.
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/70 shadow-soft px-5 py-5 overflow-x-auto">
          <div className="flex items-center min-w-[900px]">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLast = index === stages.length - 1;

              return (
                <div
                  key={stage.number}
                  className="flex items-center flex-1 min-w-0"
                >
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <div
                      className={`h-10 w-10 rounded-full grid place-items-center shrink-0 ${
                        isLast
                          ? "bg-orange text-white shadow-glow"
                          : "bg-navy-deep text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className={`text-sm font-bold ${
                        isLast ? "text-orange" : "text-navy-deep"
                      }`}
                    >
                      {stage.number} {stage.title}
                    </span>
                  </div>

                  {!isLast && (
                    <div className="relative flex-1 mx-4 h-px bg-gradient-to-r from-border to-orange/40">
                      <ArrowRight className="absolute right-0 -top-2.5 h-5 w-5 text-orange" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isRevenue = index === stages.length - 1;

            return (
              <div
                key={stage.number}
                className={`group relative min-h-[420px] rounded-[2rem] p-7 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  isRevenue
                    ? "bg-navy-deep border-2 border-orange shadow-glow text-white"
                    : "bg-white/90 border border-border shadow-soft hover:shadow-navy"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                      isRevenue
                        ? "bg-orange/20 text-orange"
                        : "bg-navy-deep/5 text-navy-deep"
                    }`}
                  >
                    {stage.number}
                  </span>

                  <div
                    className={`h-14 w-14 rounded-full grid place-items-center ${
                      isRevenue
                        ? "bg-orange text-white shadow-glow"
                        : "bg-orange/10 text-orange"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`text-xl font-bold ${
                        isRevenue ? "text-white" : "text-navy-deep"
                      }`}
                    >
                      {stage.title}
                    </h3>

                    {isRevenue && (
                      <span className="rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold text-white">
                        GOAL
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      isRevenue
                        ? "text-white/85"
                        : "text-muted-foreground"
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <div
                    className={`h-px w-full ${
                      isRevenue ? "bg-white/15" : "bg-border"
                    }`}
                  />

                  <div
                    className={`mt-5 flex items-center justify-between text-sm font-semibold ${
                      isRevenue ? "text-orange" : "text-navy-deep"
                    }`}
                  >
                    <span>{stage.phase}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
