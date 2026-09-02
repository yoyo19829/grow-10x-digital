import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { useEffect, useState } from "react";

type WordPressPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    ["wp:term"]?: Array<
      Array<{
        name: string;
      }>
    >;
  };
};

export const Route = createFileRoute("/blogs/")({
  component: BlogsPage,
});

function BlogsPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://www.bedifly.com/wp-json/wp/v2/posts?status=publish&per_page=12&_embed"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("WordPress API error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-hero">
      <Nav />

      <section className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">

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

          {loading && (
            <div className="mt-12 text-center text-muted-foreground">
              Loading blogs...
            </div>
          )}

          {error && (
            <div className="mt-12 text-center text-muted-foreground">
              Unable to load blogs right now. Please try again later.
            </div>
          )}

          {!loading && !error && (
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

function BlogCard({
  post,
}: {
  post: WordPressPost;
}) {
  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name ||
    "Business Growth";

  const excerpt = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;/g, "...")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, "&");

  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft hover:shadow-navy hover:-translate-y-1 transition-all">

      {image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={post.title.rendered}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">

        <div className="flex items-center justify-between gap-3">
          <div className="text-[10px] uppercase tracking-wider font-bold text-orange">
            {category}
          </div>

          <div className="text-[11px] text-muted-foreground">
            {date}
          </div>
        </div>

        <h2
          className="mt-3 text-xl font-bold text-navy-deep leading-tight"
          dangerouslySetInnerHTML={{
            __html: post.title.rendered,
          }}
        />

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        <Link
          to="/blogs/$slug"
          params={{ slug: post.slug }}
          className="inline-flex mt-5 text-sm font-semibold text-navy-deep hover:text-orange transition-colors"
        >
          Read article →
        </Link>

      </div>
    </article>
  );
}
