import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { useEffect, useState } from "react";

type WordPressPost = {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
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

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();

  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `https://www.bedifly.com/wp-json/wp/v2/posts?slug=${encodeURIComponent(
            slug
          )}&_embed`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await response.json();

        if (!data.length) {
          throw new Error("Blog not found");
        }

        setPost(data[0]);
      } catch (err) {
        console.error("WordPress blog error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-hero">
        <Nav />

        <div className="pt-40 text-center text-muted-foreground">
          Loading article...
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-hero">
        <Nav />

        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy-deep">
              Article not found
            </h1>

            <a
              href="/blogs"
              className="inline-block mt-5 text-orange font-semibold"
            >
              ← Back to blogs
            </a>
          </div>
        </div>
      </main>
    );
  }

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const imageAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    post.title.rendered;

  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name ||
    "Business Growth";

  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-hero">
      <Nav />

      <article className="px-5 sm:px-6 pt-28 md:pt-32 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* ARTICLE HEADER */}

          <header className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center rounded-full border border-orange/20 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-orange font-bold">
              {category}
            </div>

            <h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-deep leading-[1.08] tracking-tight"
              dangerouslySetInnerHTML={{
                __html: post.title.rendered,
              }}
            />

            <div className="mt-6 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <span>Published {date}</span>
              <span className="hidden sm:inline">•</span>
              <span>Bedifly Insights</span>
            </div>
          </header>

          {/* FEATURED IMAGE */}

          {image && (
            <div className="max-w-5xl mx-auto mt-10 md:mt-12 overflow-hidden rounded-[1.75rem] shadow-soft">
              <img
                src={image}
                alt={imageAlt}
                className="block w-full h-auto object-cover"
              />
            </div>
          )}

          {/* ARTICLE */}

          <div className="mt-12 md:mt-16">

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            />

          </div>

          {/* END OF ARTICLE */}

          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border">

            <a
              href="/blogs"
              className="inline-flex items-center text-sm font-semibold text-navy-deep hover:text-orange transition-colors"
            >
              ← Back to all blogs
            </a>

          </div>

        </div>
      </article>
    </main>
  );
}
