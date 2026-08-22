import {
  Megaphone,
  UserCheck,
  Cpu,
  CheckCircle2,
  Zap,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

type Stage = {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isRevenue?: boolean;
};

const stages: Stage[] = [
  {
    step: "01",
    title: "Traffic",
    description:
      "Reach the right audience through Google, Meta, organic channels, and targeted digital campaigns.",
    icon: Megaphone,
  },
  {
    step: "02",
    title: "Leads",
    description:
      "Convert attention into qualified enquiries through websites, landing pages, forms, and lead-generation campaigns.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Qualification",
    description:
      "Identify high-intent prospects using lead qualification, AI, automation, and intelligent follow-ups.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Conversion",
    description:
      "Turn qualified prospects into customers through better customer journeys, communication, and sales processes.",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Automation",
    description:
      "Automate repetitive marketing and customer processes using AI, WhatsApp automation, and intelligent workflows.",
    icon: Zap,
  },
  {
    step: "06",
    title: "Revenue",
    description:
      "Measure the business outcome and continuously optimize the system for better ROI, customer acquisition, and scalable growth.",
    icon: TrendingUp,
    isRevenue: true,
  },
];

export function GrowthJourney() {
  return (
    <section className="relative py-28 px-6 bg-secondary/40 overflow-hidden">
      {/* Glow effects */}
      <div className="pointer-events-none absolute top-1/2 -left-24 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-24 h-96 w-96 rounded-full bg-navy/15 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-orange font-bold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Systematic Growth Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep leading-tight">
            How We <span className="text-gradient-orange">Drive Growth</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            We connect marketing, technology, and AI into one integrated growth system—designed to take a potential customer from the first interaction to measurable business revenue.
          </p>
        </div>

        {/* Growth Pathway Interactive Bar for Large Screens */}
        <div className="mt-14 hidden xl:flex items-center justify-between glass rounded-2xl px-6 py-4 border border-border shadow-soft">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div key={stage.step} className="flex items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`h-8 w-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                      stage.isRevenue
                        ? "bg-orange-gradient text-white shadow-glow"
                        : "bg-navy-deep text-white shadow-navy"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span
                    className={`text-sm font-bold tracking-tight ${
                      stage.isRevenue ? "text-orange font-black" : "text-navy-deep"
                    }`}
                  >
                    {stage.step} {stage.title}
                  </span>
                </div>
                {idx < stages.length - 1 && (
                  <div className="flex items-center text-muted-foreground/40 mx-1">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-border via-orange/40 to-border" />
                    <ArrowRight className="h-3.5 w-3.5 -ml-1 text-orange/80" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 6 Stage Cards - Horizontal grid on desktop, interconnected flow on mobile */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 relative">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === stages.length - 1;

            return (
              <div key={stage.step} className="flex flex-col relative group">
                <div
                  className={`relative h-full rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    stage.isRevenue
                      ? "bg-navy-deep text-primary-foreground shadow-navy border-2 border-orange hover:shadow-glow hover:-translate-y-1.5"
                      : "bg-card border border-border shadow-soft hover:shadow-navy hover:-translate-y-1.5 hover:border-orange/40"
                  }`}
                >
                  {/* Subtle top glow highlight */}
                  <div
                    className={`absolute -top-12 -right-12 h-28 w-28 rounded-full blur-2xl transition-opacity ${
                      stage.isRevenue
                        ? "bg-orange/30 group-hover:bg-orange/45"
                        : "bg-orange/10 group-hover:bg-orange/20"
                    }`}
                  />

                  {/* Top Bar: Step Number + Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full ${
                          stage.isRevenue
                            ? "bg-orange/20 text-orange border border-orange/40"
                            : "bg-muted text-muted-foreground border border-border"
                        }`}
                      >
                        {stage.step}
                      </span>

                      <div
                        className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          stage.isRevenue
                            ? "bg-orange-gradient text-white shadow-glow"
                            : "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-2 mb-3">
                      <h3
                        className={`text-xl font-bold tracking-tight ${
                          stage.isRevenue ? "text-white" : "text-navy-deep"
                        }`}
                      >
                        {stage.title}
                      </h3>
                      {stage.isRevenue && (
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-orange-gradient text-white px-2 py-0.5 rounded-full shadow-glow">
                          Goal
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        stage.isRevenue ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Pathway Indicator */}
                  <div className="mt-6 pt-4 border-t border-border/15 flex items-center justify-between text-xs">
                    <span
                      className={`font-semibold ${
                        stage.isRevenue ? "text-orange" : "text-navy-deep/60 group-hover:text-orange"
                      }`}
                    >
                      {stage.isRevenue ? "Scalable ROI" : `Phase ${stage.step}`}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                        stage.isRevenue ? "text-orange" : "text-muted-foreground group-hover:text-orange"
                      }`}
                    />
                  </div>
                </div>

                {/* Mobile/Tablet down arrow connector between cards */}
                {!isLast && (
                  <div className="xl:hidden flex justify-center py-2 text-orange/60">
                    <ArrowDown className="h-5 w-5 animate-bounce" style={{ animationDuration: "2.5s" }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}