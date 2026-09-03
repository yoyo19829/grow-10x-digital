import { clients } from "@/data/landing-data";

export function Brands() {
  const sliderClients = [...clients, ...clients];

  return (
    <section id="brands" className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* HEADER */}
        <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
          Trusted by
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep">
          Brands we're scaling <span className="text-gradient-brand">right now.</span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          From new companies to established brands.
        </p>

        {/* LOGO SLIDER */}
        <div className="relative mt-10 overflow-hidden">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* MOVING TRACK */}
          <div
            className="flex w-max"
            style={{
              animation: "brandSlider 35s linear infinite",
            }}
          >
            {sliderClients.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="group mx-2 w-[220px] md:w-[260px] h-[190px] rounded-2xl border border-border bg-card px-6 py-6 hover:border-orange hover:shadow-glow transition-all flex flex-col items-center justify-center gap-3"
              >
                <div className="h-24 w-full flex items-center justify-center">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-20 max-w-[85%] object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="text-sm font-display font-semibold text-navy-deep/80 group-hover:text-navy-deep tracking-wide text-center">
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes brandSlider {
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
