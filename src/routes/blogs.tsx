import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <main className="min-h-screen bg-hero">

      {/* NAVBAR */}
      <Nav />

      {/* BLOG CONTENT */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">

            <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
              Insights
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-deep">
              Bedifly{" "}
              <span className="text-gradient-orange">
                Blogs
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Practical insights on marketing, AI, websites, lead generation,
              and business growth.
            </p>

          </div>

          {/* BLOGS */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <BlogCard
              title="How to Generate Better Quality Leads"
              category="Lead Generation"
            />

            <BlogCard
              title="Meta Ads: What's Changed and What Businesses Should Do"
              category="Performance Marketing"
            />

            <BlogCard
              title="How AI Automation Can Save Your Business Time"
              category="AI Automation"
            />

          </div>

        </div>
      </section>

    </main>
  );
}

function BlogCard({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft hover:shadow-navy hover:-translate-y-1 transition-all">

      <div className="text-[10px] uppercase tracking-wider font-bold text-orange">
        {category}
      </div>

      <h2 className="mt-3 text-xl font-bold text-navy-deep">
        {title}
      </h2>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        Practical strategies, insights, and ideas to help your business grow
        more efficiently.
      </p>

      <div className="mt-5 text-sm font-semibold text-navy-deep">
        Read article →
      </div>

    </article>
  );
}
