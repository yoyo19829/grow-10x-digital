import { Star } from "lucide-react";
import { testimonials } from "@/data/landing-data";

export function Testimonials() {
  const sliderTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="reviews"
      className="relative py-20 px-6 bg-hero overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
            What founders say
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep">
            Real results.{" "}
            <span className="text-gradient-orange">
              Real founders.
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            What businesses say about working with Bedifly.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-10 overflow-hidden">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* MOVING TRACK */}
          <div
            className="flex w-max"
            style={{
              animation: "testimonialSlider 45s linear infinite",
            }}
          >
            {sliderTestimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="glass mx-2 w-[290px] md:w-[330px] h-[270px] shrink-0 rounded-2xl p-6 shadow-soft hover:shadow-navy transition-all flex flex-col"
              >

                {/* STARS */}
                <div className="flex gap-0.5 text-orange">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className="h-3.5 w-3.5 fill-current"
                    />
                  ))}
                </div>

                {/* TESTIMONIAL */}
                <p className="mt-4 text-sm text-foreground leading-relaxed line-clamp-5">
                  "{t.quote}"
                </p>

                {/* FOUNDER */}
                <div className="mt-auto flex items-center gap-3 pt-5 border-t border-border">

                  <div className="h-10 w-10 shrink-0 rounded-full bg-orange-gradient text-white grid place-items-center font-bold shadow-glow">
                    {t.name[0]}
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-navy-deep">
                      {t.name}
                    </div>

                    <div className="text-[11px] text-muted-foreground truncate">
                      {t.role}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT-MOVING ANIMATION */}
      <style>{`
        @keyframes testimonialSlider {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
