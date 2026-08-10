import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="container-page py-16 md:py-20">
        <p className="eyebrow rise-in">{eyebrow}</p>
        <h1 className="rise-in mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">{title}</h1>
        <p className="rise-in mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-2xl leading-tight md:text-4xl">{title}</h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

export function InfoCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-primary/25">
      {icon && (
        <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-lg">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function ClosingCta({
  title = "Support the work in Dowa",
  text = "Join us in building stronger households, safer food systems, and more resilient communities in Dowa and beyond.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-pad bg-primary text-primary-foreground">
      <div className="container-page max-w-3xl text-center">
        <h2 className="text-2xl leading-tight md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
          {text}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="ctaLight" size="lg">
            <Link to="/partners">Donate</Link>
          </Button>
          <Button asChild variant="ctaLight" size="lg">
            <Link to="/contact">Volunteer</Link>
          </Button>
          <Button asChild variant="ctaLight" size="lg">
            <Link to="/partners">Partner With Us</Link>
          </Button>
          <Button asChild variant="ctaLight" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
