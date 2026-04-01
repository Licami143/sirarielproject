import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects built by John Herman — from full-stack web apps to responsive marketing sites.",
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, secure payment processing via Stripe, and a comprehensive admin dashboard for analytics and order management.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring drag-and-drop Kanban boards, real-time updates with WebSockets, team workspaces, and automated task assignment workflows.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "A dynamic analytics dashboard for tracking portfolio performance. Features interactive charts, real-time data feeds, dark/light themes, and custom reporting tools.",
    tags: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="animate-fade-in-up mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of projects I have built and contributed to
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`animate-fade-in-up delay-${(i + 1) * 200} group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl`}
            >
              {/* Image placeholder */}
              <div className="img-placeholder h-52 w-full transition-all group-hover:brightness-110">
                <svg className="relative z-10 h-16 w-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group/btn w-full"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Details
                      <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots (decorative, matching wireframe) */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
      </div>
    </section>
  );
}
