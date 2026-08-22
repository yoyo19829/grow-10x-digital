import { ArrowRight } from "lucide-react";

type Service = {
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    title: "Performance Marketing",
    description:
      "Build campaigns around measurable growth, not vanity metrics. From strategy and audience research to optimization and reporting, we focus on improving the numbers that actually matter to your business.",
    tags: [
      "10+ Years Experience",
      "100+ Businesses Served",
      "ROI-Focused Campaigns",
      "Continuous Optimization",
    ],
  },
  {
    title: "Website Development",
    description:
      "Create a website that works as a 24/7 business and sales asset. We build responsive, fast, conversion-focused websites designed to turn visitors into inquiries, leads, and customers.",
    tags: [
      "Mobile-First",
      "Conversion-Focused",
      "SEO-Ready",
      "Fast & Responsive",
      "Business & E-commerce",
    ],
  },
  {
    title: "AI Automation",
    description:
      "Replace repetitive manual work with intelligent systems. We use AI and automation to streamline lead management, customer communication, internal workflows, and everyday business operations.",
    tags: [
      "24/7 Automation",
      "AI-Powered Workflows",
      "Lead Qualification",
      "Automated Follow-Ups",
      "Time-Saving Systems",
    ],
  },
  {
    title: "Lead Generation",
    description:
      "Build a predictable pipeline of potential customers through targeted acquisition systems. We focus on improving both lead volume and lead quality, so your sales team spends more time talking to genuine prospects.",
    tags: [
      "Multi-Channel Acquisition",
      "Qualified Leads",
      "Lead Tracking",
      "Automated Follow-Ups",
      "Conversion-Focused Systems",
    ],
  },
  {
    title: "Google & Meta Ads",
    description:
      "Reach customers across the two largest digital advertising ecosystems. We combine audience strategy, creative testing, campaign optimization, and conversion tracking to continuously improve advertising performance.",
    tags: [
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Retargeting",
      "Conversion Tracking",
      "Performance Optimization",
    ],
  },
  {
    title: "WhatsApp Automation",
    description:
      "Turn WhatsApp into an automated customer acquisition and communication channel. Respond instantly, qualify prospects, follow up automatically, and keep conversations moving—even outside business hours.",
    tags: [
      "24/7 Responses",
      "Instant Follow-Ups",
      "Lead Qualification",
      "AI Conversations",
      "Automated Reminders",
      "Customer Support",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-bold mb-4">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-navy-deep leading-tight whitespace-normal md:whitespace-nowrap">
            Everything You Need to <span className="text-gradient-orange">Grow 10X.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            6 core growth services working together across 3 key areas — Marketing, Technology & AI — to help you attract more customers, generate qualified leads, improve conversions, automate operations, and scale with measurable results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative h-full rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-navy hover:-translate-y-1 hover:border-orange/40 transition-all overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-orange/10 blur-2xl group-hover:bg-orange/25 transition" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-navy-deep">{s.title}</h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground flex-1">
                  {s.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-navy-deep/80 group-hover:bg-orange/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep group-hover:text-orange transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}