import { Star } from "lucide-react";
import { testimonials } from "@/data/landing-data";

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 px-6 bg-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-bold mb-4">
            What founders say
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep">
            Real results. <span className="text-gradient-orange">Real founders.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass rounded-3xl p-8 shadow-soft hover:shadow-navy hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex gap-0.5 text-orange">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-foreground leading-relaxed">"{t.quote}"</p>
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-orange-gradient text-white grid place-items-center font-bold shadow-glow">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-navy-deep">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}