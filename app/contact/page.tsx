"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Send, RotateCcw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("sending");
    // Simulated send
    setTimeout(() => {
      setFormState("sent");
    }, 1500);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
    setFormState("idle");
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="animate-fade-in-up mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Lets talk about it.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left – form */}
          <div className="animate-fade-in-up delay-200">
            {formState === "sent" ? (
              <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold">Message sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I will get back to you soon.
                </p>
                <Button variant="outline" onClick={handleReset} className="mt-2">
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-xl border border-border bg-card p-8"
              >
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="flex-1 group"
                    disabled={formState === "sending"}
                  >
                    {formState === "sending" ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Ok
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    disabled={formState === "sending"}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right – image placeholder */}
          <div className="animate-slide-in-right delay-400 flex justify-center">
            <div className="img-placeholder h-80 w-full max-w-sm rounded-2xl glow-cyan">
              <svg className="relative z-10 h-24 w-24 text-cyan-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
