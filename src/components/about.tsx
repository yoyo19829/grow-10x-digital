import { Rocket, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-brand-gradient opacity-20 blur-3xl rounded-[3rem]" />
          <div className="relative rounded-[2rem] bg-brand-gradient p-1 shadow-navy">
            <div className="rounded-[calc(2rem-4px)] bg-navy-deep p-10 text-primary-foreground">
              <Rocket className="h-10 w-10 text-orange animate-float-slower" />
              <div className="mt-8 text-5xl md:text-6xl font-bold leading-none">
                10<span className="text-orange">x</span>
              </div>
              <p className="mt-2 text-white/70">Average growth of our top clients within 12 months.</p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange">98%</div>
                  <div className="text-xs text-white/60 uppercase tracking-widest mt-1">Client retention</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange">30+</div>
                  <div className="text-xs text-white/60 uppercase tracking-widest mt-1">Team of specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-semibold mb-4">
            About Bedifly
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep leading-[1.1]">
            We don't do <span className="line-through text-muted-foreground">vanity metrics</span>. <br />
            We do <span className="text-gradient-orange">revenue.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Bedifly is a full-stack performance marketing agency built for founders who care about
            profit, not just clicks. From strategy and media buying to creative production, our
            in-house team owns the whole growth funnel — so you don't have to juggle five vendors.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Senior strategists on every account — no juniors, no handoffs.",
              "Weekly transparent reporting on ROAS, CAC and LTV.",
              "In-house creative studio shipping 30+ ads per month.",
            ].map((t) => (
              <div key={t} className="flex gap-3">
                <TrendingUp className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                <p className="text-foreground/90">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}