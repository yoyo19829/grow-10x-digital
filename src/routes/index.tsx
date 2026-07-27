import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Megaphone,
  Search,
  ShoppingBag,
  Mail,
  MapPin,
  Phone,
  Star,
  Check,
  Rocket,
} from "lucide-react";
import logo from "@/assets/bedifly-logo.png";
import indianPropertyExpert from "@/assets/indian-property-expert.jpeg.asset.json";
import newLifeTherapy from "@/assets/new-life-therapy.png.asset.json";
import padmakshiJewels from "@/assets/padmakshi-jewels.png.asset.json";
import aneriCreation from "@/assets/aneri-creation.png.asset.json";
import justRealEstate from "@/assets/just-real-estate.png.asset.json";
import aawartanConstruction from "@/assets/aawartan-construction.png.asset.json";
import tirthTravels from "@/assets/tirth-travels.jpeg.asset.json";
import shantiJuniors from "@/assets/shanti-juniors.png.asset.json";
import iant from "@/assets/iant.png.asset.json";
import pinPointAstrology from "@/assets/pin-point-astrology.png.asset.json";

const clients = [
  { name: "Indian Property Expert", logo: indianPropertyExpert.url },
  { name: "New Life Therapy", logo: newLifeTherapy.url },
  { name: "Padmakshi Jewels", logo: padmakshiJewels.url },
  { name: "Aneri Creation", logo: aneriCreation.url },
  { name: "Just Real Estate", logo: justRealEstate.url },
  { name: "Aawartan Construction", logo: aawartanConstruction.url },
  { name: "Tirth Travels & Holiday", logo: tirthTravels.url },
  { name: "Shanti Juniors", logo: shantiJuniors.url },
  { name: "IANT", logo: iant.url },
  { name: "Pin Point Astrology", logo: pinPointAstrology.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bedifly — Grow 10x With Performance Marketing" },
      {
        name: "description",
        content:
          "Bedifly is a performance-driven digital marketing agency helping brands grow 10x with paid ads, SEO, social media, and creative that converts.",
      },
      { property: "og:title", content: "Bedifly — Grow 10x With Performance Marketing" },
      {
        property: "og:description",
        content:
          "Performance marketing, paid ads, SEO, and creative that scales brands 10x. Offices in Ahmedabad & Indore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});


const services = [
  {
    icon: Target,
    tag: "01 / Performance",
    title: "Performance Marketing",
    desc: "Meta, Google & YouTube ads engineered around your ROAS. We obsess over funnels, creatives and unit economics.",
    points: ["Meta & Google Ads", "Conversion-first funnels", "Weekly ROAS reporting"],
  },
  {
    icon: Search,
    tag: "02 / Organic",
    title: "SEO & Content",
    desc: "Rank for the searches that actually make you money. Technical SEO, content strategy and topical authority.",
    points: ["Technical SEO audits", "Content that ranks", "Backlink acquisition"],
  },
  {
    icon: Megaphone,
    tag: "03 / Creative",
    title: "Social & Creative Studio",
    desc: "Scroll-stopping reels, UGC and static creatives produced in-house — built to test, learn and scale fast.",
    points: ["Reels & UGC production", "Ad creative testing", "Brand social management"],
  },
];

const testimonials = [
  {
    quote:
      "Bedifly took our monthly revenue from ₹18L to ₹1.9Cr in under a year. Their creative testing engine is unreal.",
    name: "Ridhima Shah",
    role: "Founder, Luméa Skincare",
  },
  {
    quote:
      "The most transparent agency we've ever worked with. Real dashboards, real ROAS, real growth — no fluff.",
    name: "Karan Mehta",
    role: "CMO, Northwind Apparel",
  },
  {
    quote:
      "We finally have a team that thinks like founders. They shipped 40+ creatives in the first month.",
    name: "Ananya Kapoor",
    role: "Head of Growth, Orbital",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Brands />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}


function Nav() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass w-full max-w-6xl rounded-full px-4 py-2.5 flex items-center justify-between shadow-soft">
        <a href="#" className="flex items-center gap-2 pl-2">
          <img src={logo} alt="Bedifly" className="h-9 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#services" className="hover:text-orange transition">Services</a>
          <a href="#about" className="hover:text-orange transition">About</a>
          <a href="#brands" className="hover:text-orange transition">Clients</a>
          <a href="#reviews" className="hover:text-orange transition">Reviews</a>
          <a href="#contact" className="hover:text-orange transition">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-navy-deep text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-navy transition shadow-navy"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-hero relative pt-40 pb-28 px-6 overflow-hidden">
      {/* floating 3d blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange/30 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-navy/25 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-navy-deep mb-8">
          <Sparkles className="h-3.5 w-3.5 text-orange" />
          Performance marketing agency
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
          <span className="text-navy-deep">Grow </span>
          <span className="text-gradient-orange">10x</span>
          <span className="text-navy-deep"> in your business</span>
          <br />
          <span className="text-navy-deep">with </span>
          <span className="text-gradient-brand">performance marketing</span>
          <span className="text-orange">.</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
          We're Bedifly—a performance marketing agency that turns ad spend into
          profitable growth, achieving an average ROAS of 7x for service businesses
          and 20x for real estate.
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

        {/* stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { target: 10, suffix: "+", label: "Years scaling brands" },
            { target: 50, suffix: "+", label: "Brands served" },
            { target: 10, prefix: "₹", suffix: "Cr+", label: "Ad spend managed" },
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

function Counter({
  target,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}


function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-semibold mb-4">
            Our services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-deep leading-[1.1] tracking-tight">
            <span className="block">Lead Generation</span>
            <span className="block text-navy-deep/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-1">+</span>
            <span className="block">Social Media Management</span>
            <span className="block text-navy-deep/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-1">+</span>
            <span className="block text-gradient-orange">Website Development</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl">
            We help businesses grow with 10+ years of proven expertise. Every strategy is tailored to your goals for measurable results. Check out our packages.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-navy hover:-translate-y-2 transition-all overflow-hidden"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-orange/10 blur-2xl group-hover:bg-orange/25 transition" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-gradient text-white shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange/15 text-orange">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
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

function Brands() {
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

function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 px-6 bg-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-semibold mb-4">
            What founders say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep">
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

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-semibold mb-4">
            Let's talk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep leading-tight">
            Ready to <span className="text-gradient-orange">grow 10x?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your brand. We'll get back within 24 hours with an honest,
            no-fluff plan for the next 90 days.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow icon={MapPin} title="Ahmedabad Office">
              4th Floor, C Wing, Krish Cubical, Thaltej, Ahmedabad
            </ContactRow>
            <ContactRow icon={MapPin} title="Indore Office">
              4th Floor, Mangal City, Vijay Nagar, Indore
            </ContactRow>
            <ContactRow icon={Mail} title="Email us">
              hello@bedifly.com
            </ContactRow>
            <ContactRow icon={Phone} title="Call us">
              +91 00000 00000
            </ContactRow>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass rounded-3xl p-8 md:p-10 shadow-navy space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" placeholder="Ridhima Shah" />
            <Field label="Company" name="company" placeholder="Luméa Skincare" />
          </div>
          <Field label="Work email" name="email" type="email" placeholder="you@brand.com" />
          <Field label="Monthly ad budget" name="budget" placeholder="₹5L – ₹10L" />
          <div>
            <label className="block text-xs font-semibold text-navy-deep mb-2 uppercase tracking-wider">
              Tell us about your goals
            </label>
            <textarea
              rows={4}
              placeholder="We want to scale our D2C skincare brand from ₹40L to ₹2Cr / month…"
              className="w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-navy-deep hover:bg-navy text-primary-foreground rounded-full px-6 py-4 font-semibold shadow-navy hover:shadow-glow transition-all inline-flex items-center justify-center gap-2"
          >
            {sent ? "Thanks — we'll be in touch ✨" : (<>Send message <ArrowRight className="h-4 w-4" /></>)}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted by Bedifly. We never share your info.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 rounded-2xl bg-orange-gradient text-white grid place-items-center shrink-0 shadow-glow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-navy-deep">{title}</div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-navy-deep mb-2 uppercase tracking-wider"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/80 px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bedifly" className="h-11 w-auto bg-white rounded-xl p-1.5" />
            </div>
            <p className="mt-5 max-w-sm text-white/60 text-sm leading-relaxed">
              Bedifly is a performance marketing agency helping ambitious founders grow 10x
              with paid ads, creative and SEO that compounds.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-orange transition">About</a></li>
              <li><a href="#services" className="hover:text-orange transition">Services</a></li>
              <li><a href="#reviews" className="hover:text-orange transition">Reviews</a></li>
              <li><a href="#contact" className="hover:text-orange transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Offices</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Ahmedabad — 4th Floor, C Wing, Krish Cubical, Thaltej</li>
              <li>Indore — 4th Floor, Mangal City, Vijay Nagar</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Bedifly. All rights reserved.</div>
          <div>Made with <span className="text-orange">◆</span> in India.</div>
        </div>
      </div>
    </footer>
  );
}
