import { ArrowRight } from "lucide-react";

type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    num: "01",
    title: "Performance Marketing",
    description:
      "Data-driven campaigns focused on profitable growth, better acquisition costs, and measurable ROI.",
    tags: [
      "ROI-Focused",
      "Audience Research",
      "Campaign Optimization",
      "Performance Tracking",
    ],
  },
  {
    num: "02",
    title: "Website Development",
    description:
      "Fast, responsive, conversion-focused websites designed to turn visitors into enquiries and customers.",
    tags: [
      "Mobile-First",
      "Conversion-Focused",
      "SEO-Ready",
      "Fast & Responsive",
    ],
  },
  {
    num: "03",
    title: "AI Automation",
    description:
      "Intelligent systems that automate lead management, customer communication, and repetitive business workflows.",
    tags: [
      "AI Workflows",
      "Lead Qualification",
      "Automated Follow-Ups",
      "24/7 Automation",
    ],
  },
  {
    num: "04",
    title: "Lead Generation",
    description:
      "Build a predictable pipeline of qualified prospects while improving both lead volume and lead quality.",
    tags: [
      "Qualified Leads",
      "Multi-Channel",
      "Lead Tracking",
      "Conversion-Focused",
    ],
  },
  {
    num: "05",
    title: "Google & Meta Ads",
    description:
      "Reach the right customers with strategic targeting, creative testing, conversion tracking, and optimization.",
    tags: [
      "Google Ads",
      "Meta Ads",
      "Retargeting",
      "Conversion Tracking",
    ],
  },
  {
    num: "06",
    title: "WhatsApp Automation",
    description:
      "Automate responses, qualification, follow-ups, reminders, and customer conversations on WhatsApp.",
    tags: [
      "24/7 Responses",
      "AI Conversations",
      "Lead Qualification",
      "Automated Follow-Ups",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
            What We Do
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep leading-tight">
            Everything you need to{" "}
            <span className="text-gradient-orange">
              grow 10x.
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Six core services working together to drive measurable business
            growth.
          </p>

        </div>

        {/* SERVICES */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {services.map((s, i) => (
            <div
              key={s.num}
              className="group relative rounded-[1.5rem] border border-border bg-card p-6 shadow-soft hover:shadow-navy hover:-translate-y-1 hover:border-orange/40 transition-all overflow-hidden"
              style={{ transitionDelay: `${i * 40}ms` }}
            >

              {/* SUBTLE ORANGE GLOW */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange/10 blur-3xl group-hover:bg-orange/20 transition" />

              <div className="relative">

                {/* NUMBER + TITLE */}
                <div className="flex items-center gap-3">

                  {/* VIBRANT NUMBER */}
                  <div className="relative flex items-center justify-center shrink-0">

                    <div className="absolute h-9 w-9 rounded-full bg-orange/10 blur-md group-hover:bg-orange/20 transition" />

                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-orange-gradient text-[11px] font-extrabold text-white shadow-glow">
                      {s.num}
                    </span>

                  </div>

                  <h3 className="text-lg font-bold text-navy-deep">
                    {s.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>

                {/* TAGS */}
                <div className="mt-5 flex flex-wrap gap-1.5">

                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-orange/10 px-2.5 py-1 text-[10px] font-medium text-navy-deep/80 group-hover:bg-orange/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-navy-deep group-hover:text-orange transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
