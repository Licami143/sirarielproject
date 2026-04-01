import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      {/* Back link */}
      <div className="animate-fade-in mb-8">
        <Button asChild variant="ghost" size="sm" className="group">
          <Link href="/blogs">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </Link>
        </Button>
      </div>

      {/* Header */}
      <header className="animate-fade-in-up mb-10 space-y-4">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {post.category}
        </span>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Cover image placeholder */}
      <div className="animate-fade-in-up delay-200 img-placeholder mb-10 h-64 w-full rounded-xl sm:h-80">
        <svg className="relative z-10 h-16 w-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      {/* Content */}
      <div className="animate-fade-in-up delay-400 prose prose-neutral max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-code:rounded prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-card">
        {/* Render content sections as HTML-like blocks */}
        {post.content.split("\n").map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <br key={i} />;
          if (trimmed.startsWith("## "))
            return (
              <h2 key={i} className="mt-10 mb-4 text-2xl">
                {trimmed.slice(3)}
              </h2>
            );
          if (trimmed.startsWith("### "))
            return (
              <h3 key={i} className="mt-8 mb-3 text-xl">
                {trimmed.slice(4)}
              </h3>
            );
          if (trimmed.startsWith("- **"))
            return (
              <li key={i} className="ml-4 list-disc text-muted-foreground">
                <span
                  dangerouslySetInnerHTML={{
                    __html: trimmed
                      .slice(2)
                      .replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-foreground">$1</strong>'
                      )
                      .replace(/`(.*?)`/g, "<code>$1</code>"),
                  }}
                />
              </li>
            );
          if (trimmed.startsWith("```")) return null;
          return (
            <p
              key={i}
              className="leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: trimmed
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-foreground">$1</strong>'
                  )
                  .replace(/`(.*?)`/g, "<code>$1</code>"),
              }}
            />
          );
        })}
      </div>

      {/* Bottom nav */}
      <div className="mt-16 border-t border-border pt-8">
        <Button asChild variant="outline" className="group">
          <Link href="/blogs">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all posts
          </Link>
        </Button>
      </div>
    </article>
  );
}
