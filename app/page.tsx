import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Palette, Server, Smartphone, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "React", icon: Code2, color: "from-cyan-400 to-cyan-500" },
  { name: "Next.js", icon: Globe, color: "from-foreground to-foreground" },
  { name: "TypeScript", icon: Code2, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", icon: Palette, color: "from-teal-400 to-teal-500" },
  { name: "Node.js", icon: Server, color: "from-green-400 to-green-600" },
  { name: "PostgreSQL", icon: Database, color: "from-violet-400 to-violet-500" },
  { name: "React Native", icon: Smartphone, color: "from-cyan-400 to-violet-500" },
  { name: "REST APIs", icon: Server, color: "from-orange-400 to-orange-500" },
];

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, payment processing, and an admin dashboard.",
    tags: ["Next.js"],
    image: "/ss.png", // Updated to your screenshot file name
  }
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left – text */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Hello! I am{" "}
                <span className="gradient-text">John Hernan</span>
                <br />
                and I am a{" "}
                <span className="text-primary">Web Developer</span>
              </h1>

              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                I build beautiful, performant web experiences using modern
                technologies. Lets turn your ideas into reality.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>

            {/* Right – hero image placeholder */}
            <div className="animate-slide-in-right delay-200 flex justify-center">
              <div className="relative">
                <div className="relative h-80 w-80 overflow-hidden rounded-2xl glow-cyan sm:h-96 sm:w-96">
                  <Image 
                    src="/hern.jpg" /* Make sure hern.jpg is also in your public folder */
                    alt="Portrait of John Hernan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating decorative element */}
                <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-xl border border-primary/20 bg-primary/5 animate-float" />
                <div className="absolute -top-4 -left-4 h-14 w-14 rounded-lg border border-accent/20 bg-accent/5 animate-float delay-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills
            </h2>
            <p className="mt-3 text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`animate-fade-in-up delay-${(i + 1) * 100} group relative flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-md transition-transform group-hover:scale-110`}
                >
                  <skill.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects Preview ── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Recent Projects
              </h2>
              <p className="mt-3 text-muted-foreground">
                A selection of projects I have worked on recently
              </p>
            </div>
            <Link
              href="/projects"
              className="group hidden items-center gap-1 text-sm font-medium text-primary sm:flex"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <div
                key={project.title}
                className={`animate-fade-in-up delay-${(i + 1) * 200} group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl`}
              >
                {/* Custom Image Integration */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={`Preview of ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/projects">
                View all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need help building something?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you are looking for a dedicated partner to develop your
            project or simply need expert support, I am here to help.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Lets talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}