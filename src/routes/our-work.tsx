import { createFileRoute } from "@tanstack/react-router";

import { PageHero, ClosingCta } from "@/components/site/Sections";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work — Programmes in Agriculture, Nutrition and Livelihoods" },
      {
        name: "description",
        content:
          "WPTO programme areas in Dowa, Malawi: food and nutrition security, nutrition health and education, and climate-resilient livelihoods. Goals, participants, activities and expected results.",
      },
      { property: "og:title", content: "WPTO Programmes" },
      {
        property: "og:description",
        content:
          "How WPTO delivers food and nutrition security, better nutrition and education, and climate-resilient livelihoods in Dowa, Malawi.",
      },
    ],
  }),
  component: OurWork,
});

const areas = [
  {
    outcome: "Outcome 1",
    title: "Food and nutrition security",
    goal: "Help households produce, store and eat enough nutritious food through the whole year.",
    serves:
      "Women farmers, single mothers, widows, refugee and host community households with small plots.",
    activities: [
      "Training in improved crop production and post-harvest storage",
      "Small-scale irrigation and nutrition gardens",
      "Seed and input support through farmer groups",
      "Cooking and feeding sessions using local foods",
    ],
    result: "Fewer months of food shortage and more diverse diets in participating households.",
  },
  {
    outcome: "Outcome 2",
    title: "Improved nutrition, health and education",
    goal: "Link better food and steadier income to healthier children who stay in school.",
    serves: "Mothers, children, youth and caregivers in Dowa and at Dzaleka Refugee Camp.",
    activities: [
      "Nutrition education for mothers and caregivers",
      "Referrals and joint work with health and social welfare offices",
      "School support for children from vulnerable households",
      "Hygiene and safe food handling sessions",
    ],
    result: "Better feeding practices at home and fewer children dropping out for food or income reasons.",
  },
  {
    outcome: "Outcome 3",
    title: "Climate-resilient and sustainable livelihoods",
    goal: "Build income sources that survive drought, floods and price shocks.",
    serves: "Women's groups, youth, smallholder farmers and small business owners.",
    activities: [
      "Climate-smart agriculture and soil and water conservation",
      "Vocational and business skills training",
      "Savings groups and links to finance",
      "Market linkage support for group produce and products",
    ],
    result: "Households keep earning across seasons and rebuild faster after shocks.",
  },
];

function OurWork() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Three outcomes, delivered through practical programmes"
        intro="Every WPTO programme sits under one of three outcomes. Here is the goal, who it serves, what we do, and what we expect to change."
      />

      <section className="section-pad">
        <div className="container-page space-y-8">
          {areas.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft md:p-10"
            >
              <p className="eyebrow">{a.outcome}</p>
              <h2 className="mt-3 text-2xl md:text-3xl">{a.title}</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    Goal
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.goal}</p>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground">
                    Who it serves
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.serves}</p>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground">
                    Expected result
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.result}</p>
                </div>
                <div className="rounded-xl bg-secondary/60 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    Main activities
                  </h3>
                  <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {a.activities.map((act) => (
                      <li key={act} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingCta
        title="Fund a programme area"
        text="Choose an outcome that matches your priorities. We will share the programme plan, budget and reporting approach."
      />
    </>
  );
}
