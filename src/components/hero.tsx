import { ArrowRight, Sparkles } from "lucide-react";
import { Counter } from "./counter";

export function Hero() {
  return (
    <section className="bg-hero relative pt-40 pb-28 px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange/30 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-navy/25 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-navy-deep mb-8">
          <Sparkles className="h-3.5 w-3.5 text-orange" />
          ROI-Driven Growth Company
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
          <span className="text-gradient-brand">Grow 10X</span>
          <span className="text-navy-deep"> with Marketing, Technology & AI</span>
          <span className="text-orange">.</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're Bedifly—a ROI-driven growth company helping businesses scale with
          performance marketing, technology, and AI. With 10+ years of combined
          experience, 100+ businesses served, and 7X+ average ROAS, we focus on
          generating measurable leads, sales, and profitable growth.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group bg-navy-deep text-primary-foreground rounded-full px-7 py-4 text-base font-semibold shadow-navy hover:shadow-glow transition-all inline-flex items-center gap-2"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#services"
            className="bg-white/70 backdrop-blur border border-border text-navy-deep rounded-full px-7 py-4 text-base font-semibold hover:bg-white transition"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { target: 10, suffix: "+", label: "Years scaling brands" },
            { target: 100, suffix: "+", label: "Brands served" },
            { target: 10, prefix: "", suffix: "Cr+", label: "Ad spend managed" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-gradient-brand">
                <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}