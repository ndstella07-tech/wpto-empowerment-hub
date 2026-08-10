import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionHead, ClosingCta } from "@/components/site/Sections";
import storyGarden from "@/assets/story-garden.jpg";
import storyTraining from "@/assets/story-training.jpg";
import harvestImg from "@/assets/harvest.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — Women, Farmers and Families in Dowa" },
      {
        name: "description",
        content:
          "Short field stories from WPTO's work in Dowa and Dzaleka Refugee Camp: nutrition gardens, skills training, savings groups and farmer groups.",
      },
      { property: "og:title", content: "Stories from WPTO's work" },
      {
        property: "og:description",
        content:
          "Human-centred field updates from women, farmers, refugees and host communities in Dowa, Malawi.",
      },
    ],
  }),
  component: Stories,
});

const stories = [
  {
    img: storyGarden,
    alt: "Woman tending an irrigated vegetable garden",
    tag: "Nutrition gardens",
    title: "A garden that carries a household through the dry months",
    body: [
      "In a village in Dowa, a women's group manages small irrigated vegetable plots close to a water point. Members take turns watering and share the workload.",
      "The rule the group set for itself is simple: the household eats first, then the surplus goes to market. In the dry months, the plot keeps vegetables on the plate and a little cash in hand.",
    ],
  },
  {
    img: storyTraining,
    alt: "Women in a skills training session under a tree",
    tag: "Skills and savings",
    title: "Training that turns into income",
    body: [
      "At Dzaleka Refugee Camp, refugee and host community women train together in tailoring and business basics. They learn pricing, record-keeping and how to serve customers.",
      "After training, members join savings groups. Small, regular contributions become working capital, and the group decides together who borrows next.",
    ],
  },
  {
    img: harvestImg,
    alt: "Harvested maize and groundnuts in cupped hands",
    tag: "Farmer groups",
    title: "Better storage means fewer hungry weeks",
    body: [
      "Farmers in our groups learn how to dry, treat and store grain properly. Losses after harvest fall, so the same field feeds a household for longer.",
      "Groups also market together. Selling as a group gives smallholder farmers a stronger position when traders arrive.",
    ],
  },
];

function Stories() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="The work in the words of the people doing it"
        intro="These are short field updates from Dowa District and Dzaleka Refugee Camp. They describe how our programmes work day to day."
      />

      <section className="section-pad">
        <div className="container-page space-y-12">
          {stories.map((s, i) => (
            <article
              key={s.title}
              className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:grid-cols-2 md:gap-0"
            >
              <img
                src={s.img}
                alt={s.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className={`h-64 w-full object-cover md:h-full ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div className="p-7 md:p-10">
                <p className="eyebrow">{s.tag}</p>
                <h2 className="mt-3 text-xl md:text-2xl">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="container-page max-w-3xl">
          <SectionHead
            eyebrow="A note on consent"
            title="We share stories with permission"
            intro="We do not publish names, photographs or personal details without consent. Where a household prefers privacy, we describe the work without identifying anyone."
          />
        </div>
      </section>

      <ClosingCta
        title="Help more households write a story like this"
        text="Your support pays for seed, training, irrigation equipment and the group work that holds it all together."
      />
    </>
  );
}
