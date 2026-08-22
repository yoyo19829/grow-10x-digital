import { packages } from "@/data/landing-data";
import { PackageCard } from "./package-card";

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-bold mb-4">
            Our services
          </div>
          <h2 className="font-extrabold text-navy-deep leading-[1.15] tracking-tight whitespace-nowrap overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-[clamp(0.72rem,2.4vw,2rem)] justify-center">
            <span className="whitespace-nowrap">Lead Generation</span>
            <span className="text-navy-deep/40 mx-0.5 sm:mx-1">+</span>
            <span className="whitespace-nowrap">Social Media Management</span>
            <span className="text-navy-deep/40 mx-0.5 sm:mx-1">+</span>
            <span className="text-gradient-orange whitespace-nowrap">Website Development</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            We help businesses grow with 10+ years of proven expertise. Every
            strategy is tailored to your goals for measurable results. Check out
            our packages.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {packages.map((p, i) => (
            <PackageCard key={p.name} pkg={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}