import { createFileRoute } from "@tanstack/react-router";

import { PageHero, ClosingCta } from "@/components/site/Sections";
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
  component: Stories;
});

function Stories() {
  return <></>;
}
