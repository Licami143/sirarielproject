import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Download, MapPin, Mail as MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about John Herman — a passionate Web Developer building modern, performant web applications.",
};

const experience = [
  {
    role: "Jollibee crew",
    type: "Onsite",
    period: "2025 – Present",
    description:
      "Working as a crew in a fastfood chain",
  }
];

const techStacks = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Prisma"],
  Tools: ["Git", "VS Code", "Figma", "Vercel"],
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left – text */}
            <div className="animate-fade-in-up space-y-6">
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                About Me
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                I am {" "}
                <span className="gradient-text">John Hernan Licami</span>
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi there, I am John Hernan, a passionate Web Developer
                  dedicated to building websites and web applications that are
                  not only highly functional but also visually captivating.
                </p>
                <p>
                  I specialize in designing and building scalable, user-centric
                  solutions using modern technologies like React, Next.js, and
                  TypeScript. My focus is on performance, accessibility, and
                  delivering exceptional user experiences.
                </p>
                <p>
                  With several years of experience spanning freelance and
                  corporate projects, I have worked on everything from sleek
                  marketing websites to enterprise-grade applications — always
                  rooted in efficiency, scalability, and innovation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  Philippines
                </span>
                <span className="flex items-center gap-1.5">
                  <MailIcon className="h-4 w-4 text-primary" />
                  john@herman.dev
                </span>
              </div>

              <Button variant="outline" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Right – Custom Image */}
            <div className="animate-slide-in-right delay-200 flex justify-center">
              <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-2xl glow-violet">
                <Image 
                  src="/hern.jpg" /* Replace with your actual image path in the public folder */
                  alt="Portrait of John Hernan Licami"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Timeline ── */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>

          <div className="relative space-y-8 pl-8 before:absolute before:top-0 before:left-3 before:h-full before:w-px before:bg-border">
            {experience.map((item, i) => (
              <div
                key={item.role}
                className={`animate-fade-in-up delay-${(i + 1) * 100} relative`}
              >
                {/* Dot */}
                <div className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <Briefcase className="h-3 w-3 text-primary" />
                </div>

                <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.role}</h3>
                    {item.type && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.period}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stacks ── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stacks
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(techStacks).map(([category, techs], i) => (
              <div
                key={category}
                className={`animate-fade-in-up delay-${(i + 1) * 200} rounded-xl border border-border bg-card p-6`}
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}