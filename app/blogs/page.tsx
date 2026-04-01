import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read blog posts by John Herman about web development, JavaScript, CSS, and modern frameworks.",
};

export default function BlogsPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="animate-fade-in-up mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Blog
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Blogs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Articles, guides, and insights on web development
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug.join("/")}
              href={`/blogs/${post.slug.join("/")}`}
              className={`animate-fade-in-up delay-${(i + 1) * 200} group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl`}
            >
              {/* Image placeholder */}
              <div className="img-placeholder h-44 w-full transition-all group-hover:brightness-110">
                <svg className="relative z-10 h-12 w-12 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>

              <div className="flex flex-1 flex-col p-6">
                {/* Category badge */}
                <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>

                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
