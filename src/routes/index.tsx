import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Utensils, Wrench, Users, HeartHandshake, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHead, InfoCard, ClosingCta } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { Photo, PhotoMosaic, PhotoBand, PhotoStrip } from "@/components/site/Media";
import heroImg from "@/assets/hero-women-farmers.jpg";
import harvestImg from "@/assets/harvest.jpg";
import storyGarden from "@/assets/story-garden.jpg";
import storyTraining from "@/assets/story-training.jpg";
import galleryFarmer from "@/assets/gallery-farmer.jpg";
import galleryIrrigation from "@/assets/gallery-irrigation.jpg";
import gallerySavings from "@/assets/gallery-savings.jpg";
import galleryNutrition from "@/assets/gallery-nutrition.jpg";
import galleryTailoring from "@/assets/gallery-tailoring.jpg";
import galleryTrainingField from "@/assets/gallery-training-field.jpg";
import gallerySchool from "@/assets/gallery-school.jpg";
import galleryMarket from "@/assets/gallery-market.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WPTO — Women, Agriculture and Resilient Livelihoods in Malawi" },
      {
        name: "description",
        content:
          "Women Palm Tree Organisation works with women, widows, single mothers, refugees and host communities in Dowa, Malawi on agriculture, nutrition and resilient livelihoods.",
      },
      { property: "og:title", content: "Women Palm Tree Organisation (WPTO)" },
      {
        property: "og:description",
        content:
          "We support women, refugees and vulnerable households in Dowa, Malawi through agriculture, food and nutrition security, and resilient livelihoods.",
      },
    ],
  }),
  component: Home,
});

const programs = [
  {
    title: "Food and nutrition support",
    icon: <Utensils className="size-5" />,
    text: "We help households grow and access more nutritious food, and we promote better feeding practices for children, mothers and older people.",
  },
  {
    title: "Agriculture and irrigation",
    icon: <Sprout className="size-5" />,
    text: "We work with smallholder farmers on better farming methods, small-scale irrigation and climate-smart practices that hold up in dry seasons.",
  },
  {
    title: "Livelihoods and skills",
    icon: <Wrench className="size-5" />,
    text: "We train women and youth in practical skills, support small businesses, and improve access to savings, finance and markets.",
  },
  {
    title: "Refugee and host community support",
    icon: <Users className="size-5" />,
    text: "We work in and around Dzaleka Refugee Camp so that refugee and host families plan, learn and grow together.",
  },
  {
    title: "Women's empowerment and resilience",
    icon: <HeartHandshake className="size-5" />,
    text: "We build the leadership of women, widows and single mothers so they lead groups, make decisions and speak for their communities.",
  },
];

const outcomes = [
  {
    title: "Food and nutrition security",
    text: "Households produce and keep more food through the year, and depend less on emergency support.",
  },
  {
    title: "Improved nutrition, health and education",
    text: "Better diets and steadier household income help children stay healthy and stay in school.",
  },
  {
    title: "Climate-resilient, sustainable livelihoods",
    text: "Farmers and small businesses use practices and income sources that survive drought, floods and price shocks.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Women farmers standing together in a maize field in Malawi"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="container-page relative py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <p className="rise-in eyebrow text-primary-foreground/75">
              Dzaleka Refugee Camp · Dowa · Malawi
            </p>
            <h1 className="rise-in mt-4 text-3xl leading-tight md:text-5xl">
              WPTO empowers women, widows, single mothers, refugees and vulnerable communities in
              Malawi.
            </h1>
            <p className="rise-in mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              We work through agriculture, food and nutrition security, and resilient livelihoods so
              families can feed themselves, earn an income and plan for the future.
            </p>
            <div className="rise-in mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="xl" className="bg-background text-primary hover:bg-background/90">
                <Link to="/partners">Support the Mission</Link>
              </Button>
              <Button asChild variant="ctaLight" size="xl">
                <Link to="/our-work">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About — text with a paired portrait + detail image */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="up">
            <SectionHead
              title="A community-led organisation, working where the need is"
              intro="Women Palm Tree Organisation (WPTO) is a registered Malawian organisation formed in 2020. We are based in Dowa District, at Dzaleka Refugee Camp."
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We work with women, single mothers, widows, youth, children, refugees and vulnerable
              households. Our focus is rural livelihoods, agriculture, food and nutrition security,
              climate resilience, skills development, and access to finance and markets. Our work is
              aligned with SDG 2 and SDG 17 and with Malawi's development priorities.
            </p>
            <Button asChild variant="ctaSoft" size="lg" className="mt-7">
              <Link to="/about">
                Read about us <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-5">
            <Reveal from="right" className="sm:col-span-3">
              <Photo
                src={galleryFarmer}
                alt="Woman farmer standing in her maize field in Dowa, Malawi"
                width={1200}
                height={1500}
                caption="A member of a WPTO farmer group in Dowa"
                className="h-72 sm:h-[26rem]"
              />
            </Reveal>
            <Reveal from="right" delay={120} className="sm:col-span-2 sm:self-end">
              <Photo
                src={harvestImg}
                alt="Hands holding freshly harvested maize and groundnuts"
                width={1600}
                height={900}
                caption="Harvest kept and stored by the household"
                className="h-48 sm:h-72"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad bg-sand">
        <div className="container-page">
          <Reveal>
            <SectionHead
              title="Five areas of practical, everyday work"
              intro="Each area answers a need that families in Dowa told us about."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} from="up" delay={i * 80}>
                <InfoCard title={p.title} icon={p.icon}>
                  {p.text}
                </InfoCard>
              </Reveal>
            ))}
          </div>


        </div>
      </section>


      {/* Outcomes */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHead
              title="Three outcomes guide every project"
              intro="We measure our work against these outcomes, not against activity counts."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} from="up" delay={i * 100}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-soft">
                  <span className="font-display text-3xl text-leaf">0{i + 1}</span>
                  <h3 className="mt-3 text-lg">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Button asChild variant="ctaSoft" size="lg" className="mt-10">
            <Link to="/impact">
              See our impact <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>


      {/* How we work */}
      <section className="section-pad bg-secondary/60">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            title="Local solutions, built with the people who use them"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <InfoCard title="We work in partnership">
              We plan with government departments, NGOs, development partners and community
              structures so our work fits what already exists.
            </InfoCard>
            <InfoCard title="We start with local solutions">
              Communities set the priorities. We use local seed, local knowledge and local groups
              before bringing anything in from outside.
            </InfoCard>
            <InfoCard title="We train, then hand over">
              Training is practical and repeated. Groups keep running after a project cycle ends.
            </InfoCard>
            <InfoCard title="We build resilience">
              We plan for dry spells, floods and price changes so gains are not lost in a bad
              season.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHead
              title="The work, seen up close"
              intro="Short updates from the women and households we work with."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                img: storyGarden,
                tag: "Nutrition gardens",
                title: "A garden that feeds a household through the dry months",
                text: "Members of a women's group in Dowa manage small irrigated vegetable plots. They eat from the plot first, then sell what is left at the local market.",
              },
              {
                img: storyTraining,
                tag: "Skills and savings",
                title: "Training that turns into income",
                text: "At Dzaleka, refugee and host community women learn tailoring and business basics together, then join savings groups to grow small enterprises.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} from={i === 0 ? "left" : "right"} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <Photo
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={1024}
                    rounded={false}
                    className="h-60"
                  />
                  <div className="p-7">
                    <p className="eyebrow">{s.tag}</p>
                    <h3 className="mt-3 text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>



          <Button asChild variant="ctaSoft" size="lg" className="mt-10">
            <Link to="/stories">
              Read more stories <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>


      {/* Partners */}
      <section className="section-pad bg-sand">
        <div className="container-page">
          <SectionHead
            title="We grow through partnership"
            intro="WPTO works with partners across government, civil society and the community. Partnership is how we reach more households without duplicating effort."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Government", d: "District offices in agriculture, health, social welfare and education." },
              { t: "NGOs", d: "Local and international organisations delivering complementary services." },
              { t: "Development partners", d: "Funders and technical partners supporting food security and resilience." },
              { t: "Community structures", d: "Women's groups, farmer groups, refugee and host community leaders." },
            ].map((p) => (
              <div key={p.t} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="ctaSoft" size="lg" className="mt-10">
            <Link to="/partners">
              Partnership options <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
