import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionHead, InfoCard, ClosingCta } from "@/components/site/Sections";
import harvestImg from "@/assets/harvest.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — What Changes Through WPTO's Work" },
      {
        name: "description",
        content:
          "WPTO reports impact honestly. Qualitative outcomes in food security, nutrition, education and resilient livelihoods in Dowa, Malawi, and how we measure them.",
      },
      { property: "og:title", content: "WPTO Impact" },
      {
        property: "og:description",
        content:
          "How we track and report change in food security, nutrition, education and livelihoods in Dowa, Malawi.",
      },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="What changes, and how we know"
        intro="We report only what we can support with our own records and community feedback. Where verified numbers are not yet published, we describe the change in plain words."
      />

      <section className="section-pad">
        <div className="container-page">
          <SectionHead
            eyebrow="Outcome statements"
            title="Change we see in the households we work with"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <InfoCard title="Food and nutrition security">
              Households that join our farming and garden groups report more food available in the
              lean season and a wider range of foods on the plate.
            </InfoCard>
            <InfoCard title="Improved nutrition, health and education">
              Mothers and caregivers apply what they learn in nutrition sessions. Households with
              steadier income keep children in school more consistently.
            </InfoCard>
            <InfoCard title="Climate-resilient livelihoods">
              Farmers using conservation and irrigation practices continue producing when rainfall is
              poor. Savings groups give members a buffer after a shock.
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="How we measure"
              title="Simple, checkable measures"
              intro="We keep our monitoring light enough for community groups to run and clear enough for partners to verify."
            />
            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {[
                "Group registers of participants, training sessions and inputs received",
                "Household reports on months of adequate food and diet diversity",
                "Harvest and sales records kept by farmer and savings groups",
                "Feedback meetings with women's groups and community leaders",
                "Joint reviews with district offices and partner organisations",
              ].map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={harvestImg}
            alt="Harvested maize and groundnuts held in cupped hands"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full rounded-2xl border border-border object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <SectionHead
            eyebrow="Our commitment"
            title="No invented numbers"
            intro="WPTO does not publish figures it cannot show. As programme data is verified with our partners and district offices, we will publish it here with the period and source it comes from."
          />
        </div>
      </section>

      <ClosingCta
        title="Ask us for our reports"
        text="Partners and donors can request our programme records and reporting formats. We are happy to walk you through them."
      />
    </>
  );
}
