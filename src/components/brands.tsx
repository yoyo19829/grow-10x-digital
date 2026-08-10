import { clients } from "@/data/landing-data";

export function Brands() {
  return (
    <section id="brands" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-orange font-semibold mb-4">
          Trusted by
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-navy-deep">
          Brands we're scaling <span className="text-gradient-brand">right now.</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          From New Companies to Big brands.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className="group rounded-2xl border border-border bg-card px-6 py-8 hover:border-orange hover:shadow-glow transition-all flex flex-col items-center justify-center gap-4"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              <div className="h-24 flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="max-h-24 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-sm md:text-base font-display font-semibold text-navy-deep/80 group-hover:text-navy-deep tracking-wide text-center">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}