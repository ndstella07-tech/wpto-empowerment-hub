import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, GraduationCap, Handshake, Sprout, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SectionHead, InfoCard, ClosingCta } from "@/components/site/Sections";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Fund, Support or Deliver With WPTO" },
      {
        name: "description",
        content:
          "Partner with WPTO in Dowa, Malawi through funding, technical support, programme delivery, agricultural support or community support. See what partnership involves.",
      },
      { property: "og:title", content: "Partner with WPTO" },
      {
        property: "og:description",
        content:
          "Five ways to work with WPTO: funding, technical support, programme delivery, agricultural support and community support.",
      },
    ],
  }),
  component: Partners,
});

const types = [
  {
    icon: <Banknote className="size-5" />,
    title: "Funding",
    text: "Fund a programme area or a specific activity such as irrigation equipment, seed, training or savings group start-up.",
  },
  {
    icon: <GraduationCap className="size-5" />,
    title: "Technical support",
    text: "Share expertise in agronomy, nutrition, climate adaptation, monitoring and evaluation, or financial management.",
  },
  {
    icon: <Handshake className="size-5" />,
    title: "Programme delivery",
    text: "Deliver jointly with us where our reach and yours overlap, so households receive one coordinated service.",
  },
  {
    icon: <Sprout className="size-5" />,
    title: "Agricultural support",
    text: "Provide seed, tools, irrigation equipment, extension support or market access for group produce.",
  },
  {
    icon: <Users className="size-5" />,
    title: "Community support",
    text: "Volunteer, host a training session, offer transport or space, or connect us with groups already doing the work.",
  },
];

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partnership is how this work grows"
        intro="WPTO works with government departments, NGOs, development partners and community structures in Dowa. We are open to new partners who share our outcomes."
      />

      <section className="section-pad">
        <div className="container-page">
          <SectionHead
            eyebrow="Ways to work with us"
            title="Five kinds of partnership"
            intro="Pick the one that fits your organisation. We will share a short concept note and a budget for it."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {types.map((t) => (
              <InfoCard key={t.title} title={t.title} icon={t.icon}>
                {t.text}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="What to expect"
              title="Clear agreements, honest reporting"
            />
            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {[
                "A written scope covering activities, timeline and budget",
                "Named contacts on both sides and agreed review meetings",
                "Programme records available for verification",
                "Reporting that states results and constraints plainly",
                "Coordination with the relevant district offices in Dowa",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl">Start a conversation</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us what you would like to support and we will respond with a concept note, a
              budget and the names of the district offices and community groups involved.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">Contact our team</Link>
              </Button>
              <Button asChild variant="ctaSoft" size="lg">
                <Link to="/our-work">Review our programmes</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              WPTO is a registered Malawian organisation. Registration documents are available to
              prospective partners and donors on request.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
