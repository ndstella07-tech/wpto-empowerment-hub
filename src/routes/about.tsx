import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionHead, InfoCard, ClosingCta } from "@/components/site/Sections";
import storyTraining from "@/assets/story-training.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WPTO — Who We Are and Why We Exist" },
      {
        name: "description",
        content:
          "WPTO is a registered Malawian organisation formed in 2020, based at Dzaleka Refugee Camp in Dowa. Read our vision, mission, values and where we work.",
      },
      { property: "og:title", content: "About WPTO" },
      {
        property: "og:description",
        content:
          "Our vision, mission, values and where we work: Dowa District and Dzaleka Refugee Camp, Malawi.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About WPTO"
        title="A Malawian organisation led by and for its community"
        intro="Women Palm Tree Organisation (WPTO) was formed in 2020 and is registered in Malawi. We are based in Dowa District, at Dzaleka Refugee Camp."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Who we are"
              title="We work with the households closest to the problem"
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              WPTO works with women, single mothers, widows, youth, children, refugees and
              vulnerable households. Many of the people we work with are farmers and small traders.
              They know what their households need. Our role is to bring training, tools,
              partnerships and market links so their plans can work.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our focus areas are rural livelihoods, agriculture, food and nutrition security,
              climate resilience, skills development, and access to finance and markets. Our work is
              aligned with SDG 2 (Zero Hunger) and SDG 17 (Partnerships for the Goals), and with
              Malawi's development priorities.
            </p>
          </div>
          <img
            src={storyTraining}
            alt="Women in a community training session in Malawi"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full rounded-2xl border border-border object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <InfoCard title="Vision">
            Communities in Malawi where women, refugees and vulnerable households have enough
            nutritious food, steady income and the confidence to lead.
          </InfoCard>
          <InfoCard title="Mission">
            To support women, single mothers, widows, youth and refugee and host communities through
            agriculture, food and nutrition security, skills development and resilient livelihoods.
          </InfoCard>
          <InfoCard title="Where we work">
            Dowa District, Malawi, with our base at Dzaleka Refugee Camp. We serve both refugee
            households and surrounding host communities.
          </InfoCard>
          <InfoCard title="Why WPTO was formed">
            In 2020, women in and around Dzaleka were carrying the heaviest load: feeding
            households, farming small plots and raising children with little support. WPTO was
            formed so that work would be organised, funded and led by the women doing it.
          </InfoCard>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHead
            eyebrow="Our values"
            title="What we hold to in every project"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Dignity", d: "We treat every person as a partner, not a case. People decide for themselves." },
              { t: "Community leadership", d: "Local groups plan, run and own the work." },
              { t: "Honesty", d: "We report what happened, including what did not work." },
              { t: "Inclusion", d: "Refugees and host communities take part on equal terms." },
              { t: "Practical results", d: "We aim for food on the table and income in the household." },
              { t: "Long view", d: "We build for the next dry season, not only for this one." },
            ].map((v) => (
              <div key={v.t} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Work with us"
        text="If our approach fits your priorities, we would like to talk. Support a programme, share technical expertise, or visit our work in Dowa."
      />
    </>
  );
}
