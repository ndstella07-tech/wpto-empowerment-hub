import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, SectionHead } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact WPTO — Dzaleka, Dowa District, Malawi" },
      {
        name: "description",
        content:
          "Contact Women Palm Tree Organisation in Dowa District, Malawi. Send a message about donating, volunteering or partnering with our programmes.",
      },
      { property: "og:title", content: "Contact WPTO" },
      {
        property: "og:description",
        content:
          "Reach WPTO in Dowa District, Malawi about donations, volunteering and partnerships.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team in Dowa"
        intro="Whether you want to donate, volunteer, partner or simply ask a question, we would like to hear from you."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft md:p-9">
            <SectionHead eyebrow="Send a message" title="We reply to every message" />
            <form
              className="mt-8 grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Thank you. Your message has been prepared for our team.");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Reason for contact</Label>
                <Input id="subject" name="subject" placeholder="Donation, volunteering, partnership or other" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required rows={6} placeholder="Tell us how you would like to work with WPTO." />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" variant="cta" size="lg">
                  Send message
                </Button>
                {sent && (
                  <p className="text-sm text-muted-foreground">
                    Message received. Our team will respond by email.
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="text-lg">Where to find us</h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    Women Palm Tree Organisation
                    <br />
                    Dzaleka Refugee Camp
                    <br />
                    Dowa District, Central Region, Malawi
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href="mailto:info@wpto.org" className="hover:text-foreground">
                    info@wpto.org
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>Phone number available on request</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map showing Dowa District, Malawi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=33.65%2C-14.05%2C34.05%2C-13.55&layer=mapnik"
                className="h-72 w-full border-0"
                loading="lazy"
              />
              <div className="bg-sand px-5 py-3 text-xs text-muted-foreground">
                Dowa District, Malawi. Contact us for exact directions before visiting.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary text-primary-foreground">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-2xl leading-tight md:text-4xl">Get in touch today</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
            Join us in building stronger households, safer food systems, and more resilient
            communities in Dowa and beyond.
          </p>
          <Button asChild variant="ctaLight" size="lg" className="mt-8">
            <a href="mailto:info@wpto.org">Email info@wpto.org</a>
          </Button>
        </div>
      </section>
    </>
  );
}
