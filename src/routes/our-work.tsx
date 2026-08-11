import { createFileRoute } from "@tanstack/react-router";

import { PageHero, ClosingCta } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { Photo, PhotoBand, PhotoStrip } from "@/components/site/Media";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";
import galleryNutrition from "@/assets/gallery-nutrition.jpg";
import gallerySavings from "@/assets/gallery-savings.jpg";
import galleryFarmer from "@/assets/gallery-farmer.jpg";
import gallerySchool from "@/assets/gallery-school.jpg";
import galleryMarket from "@/assets/gallery-market.jpg";
import galleryTailoring from "@/assets/gallery-tailoring.jpg";
import galleryTrainingField from "@/assets/gallery-training-field.jpg";

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
    img: galleryIrrigation,
    imgAlt: "Water running along a furrow into a small irrigated vegetable garden",
    caption: "Irrigated nutrition gardens in Dowa",
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
    result:
      "Better feeding practices at home and fewer children dropping out for food or income reasons.",
    img: galleryNutrition,
    imgAlt: "Mother preparing a nutritious meal of porridge and vegetables for her child",
    caption: "Nutrition sessions with mothers and caregivers",
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
    img: gallerySavings,
    imgAlt: "Women seated in a circle counting contributions at a savings group meeting",
    caption: "A savings group meeting at Dzaleka",
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
          {areas.map((a, i) => (
            <Reveal key={a.title} from="up" delay={i * 90}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                {/* Programme photo leads each card, alternating side on desktop */}
                <div
                  className={
                    i % 2 === 1
                      ? "grid lg:grid-cols-[1.15fr_0.85fr] lg:[&>figure]:order-last"
                      : "grid lg:grid-cols-[0.85fr_1.15fr]"
                  }
                >
                  <Photo
                    src={a.img}
                    alt={a.imgAlt}
                    width={1400}
                    height={1000}
                    caption={a.caption}
                    rounded={false}
                    className="h-56 min-h-0 lg:h-full"
                  />
                  <div className="p-7 md:p-10">
                    <p className="eyebrow">{a.outcome}</p>
                    <h2 className="mt-3 text-2xl md:text-3xl">{a.title}</h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                          Goal
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {a.goal}
                        </p>
                        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground">
                          Who it serves
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {a.serves}
                        </p>
                        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground">
                          Expected result
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {a.result}
                        </p>
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
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PhotoBand
        src={galleryTrainingField}
        alt="Farmers gathered around a demonstration plot during a field training session"
        eyebrow="Delivery"
        title="Programmes run through groups that already exist"
        text="Farmer groups, women's groups and savings groups carry the training forward long after a project cycle closes."
      />

      <section className="section-pad">
        <div className="container-page">
          <PhotoStrip
            items={[
              {
                src: galleryFarmer,
                alt: "Woman farmer inspecting maize cobs in her field",
                width: 1200,
                height: 1500,
                caption: "Crop production",
              },
              {
                src: galleryTailoring,
                alt: "Woman sewing garments in a tailoring workshop",
                width: 1200,
                height: 1500,
                caption: "Vocational skills",
              },
              {
                src: galleryMarket,
                alt: "Vegetables laid out for sale on a market stall",
                width: 1400,
                height: 1000,
                caption: "Market linkages",
              },
              {
                src: gallerySchool,
                alt: "Pupils walking into a primary school classroom",
                width: 1400,
                height: 1000,
                caption: "School support",
              },
            ]}
          />
        </div>
      </section>

      <ClosingCta
        title="Fund a programme area"
        text="Choose an outcome that matches your priorities. We will share the programme plan, budget and reporting approach."
      />

    </>
  );
}
