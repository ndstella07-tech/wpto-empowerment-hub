import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionHead, InfoCard, ClosingCta } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { Photo, PhotoStrip, PhotoBand } from "@/components/site/Media";
import harvestImg from "@/assets/harvest.jpg";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";
import galleryNutrition from "@/assets/gallery-nutrition.jpg";
import gallerySchool from "@/assets/gallery-school.jpg";
import gallerySavings from "@/assets/gallery-savings.jpg";
import galleryMarket from "@/assets/gallery-market.jpg";

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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Food and nutrition security",
                d: "Households that join our farming and garden groups report more food available in the lean season and a wider range of foods on the plate.",
                img: galleryIrrigation,
                alt: "Irrigated vegetable beds growing in the dry season",
                cap: "Gardens producing outside the rains",
              },
              {
                t: "Improved nutrition, health and education",
                d: "Mothers and caregivers apply what they learn in nutrition sessions. Households with steadier income keep children in school more consistently.",
                img: gallerySchool,
                alt: "Pupils in uniform arriving at a primary school",
                cap: "Children staying in class",
              },
              {
                t: "Climate-resilient livelihoods",
                d: "Farmers using conservation and irrigation practices continue producing when rainfall is poor. Savings groups give members a buffer after a shock.",
                img: gallerySavings,
                alt: "Women contributing to a community savings box",
                cap: "A buffer against shocks",
              },
            ].map((o, i) => (
              <Reveal key={o.t} from="up" delay={i * 100}>
                <div className="flex h-full flex-col gap-4">
                  <Photo
                    src={o.img}
                    alt={o.alt}
                    width={1400}
                    height={1000}
                    caption={o.cap}
                    className="h-44"
                  />
                  <InfoCard title={o.t}>{o.d}</InfoCard>
                </div>
              </Reveal>
            ))}
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
          <Reveal from="right">
            <Photo
              src={harvestImg}
              alt="Harvested maize and groundnuts held in cupped hands"
              width={1600}
              height={900}
              caption="Harvest records kept by farmer groups"
              className="h-72 md:h-96"
            />
          </Reveal>
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

      <section className="section-pad pt-0">
        <div className="container-page">
          <PhotoStrip
            items={[
              {
                src: galleryNutrition,
                alt: "Caregiver feeding a young child a prepared meal",
                width: 1200,
                height: 1500,
                caption: "Diet diversity at home",
              },
              {
                src: galleryMarket,
                alt: "Produce displayed for sale at a local market",
                width: 1400,
                height: 1000,
                caption: "Sales recorded by groups",
              },
              {
                src: galleryIrrigation,
                alt: "Furrow irrigation feeding a vegetable plot",
                width: 1600,
                height: 1000,
                caption: "Production through dry spells",
              },
              {
                src: gallerySchool,
                alt: "Children outside a rural primary school",
                width: 1400,
                height: 1000,
                caption: "School attendance",
              },
            ]}
          />
        </div>
      </section>

      <PhotoBand
        src={gallerySavings}
        alt="Women meeting in a circle to review group records"
        eyebrow="Accountability"
        title="Community groups hold the records with us"
        text="Registers, harvest books and feedback meetings are kept by the groups themselves, so what we report can be checked at village level."
      />

      <ClosingCta
        title="Ask us for our reports"
        text="Partners and donors can request our programme records and reporting formats. We are happy to walk you through them."
      />
    </>
  );
}
