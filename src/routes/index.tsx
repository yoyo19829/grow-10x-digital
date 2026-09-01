import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { WhyBedifly } from "@/components/why-bedifly";
import { Services } from "@/components/services";
import { GrowthSystem } from "@/components/growth-system";
import { CaseStudies } from "@/components/case-studies";
import { About } from "@/components/about";
import { Brands } from "@/components/brands";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bedifly — Grow 10x With Performance Marketing" },
      {
        name: "description",
        content:
          "Bedifly is a performance-driven digital marketing agency helping brands grow 10x with paid ads, SEO, social media, and creative that converts.",
      },
      {
        property: "og:title",
        content: "Bedifly — Grow 10x With Performance Marketing",
      },
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

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <WhyBedifly />
      <Services />
      <GrowthSystem />
      <CaseStudies />
      <About />
      <Brands />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
