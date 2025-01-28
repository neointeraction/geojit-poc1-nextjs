import FeaturesCards from "@/component-storybook/FeaturesCards/FeaturesCards";
import styles from "./page.module.css";
import PageHeader from "@/component-storybook/PageHeader/PageHeader";
import { IconCookie, IconGauge, IconUser } from "@tabler/icons-react";
import Testimonials from "@/component-storybook/Testimonials/Testimonials";
import FAQ from "@/component-storybook/FAQ/FAQ";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
  },
];

const testimonials = [
  {
    cite: "– Forrest Gump",
    quote:
      "Life is like an npm install – you never know what you are going to get.",
  },
  {
    cite: "– Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    cite: "– Steve Jobs",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    cite: "– Maya Angelou",
    quote: "We may encounter many defeats, but we must not be defeated.",
  },
];

const faqData = [
  {
    faqQuestion: "How can I reset my password?",
    faqAnswer:
      "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.",
  },
  {
    faqQuestion: "Can I create more than one account?",
    faqAnswer:
      "It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.",
  },
  {
    faqQuestion: "How can I subscribe to the monthly newsletter?",
    faqAnswer:
      "It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
  },
  {
    faqQuestion: "Do you store credit card information securely?",
    faqAnswer:
      "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.",
  },
  {
    faqQuestion: "What payment systems do you work with?",
    faqAnswer:
      "It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <PageHeader
          title="Automated AI code reviews for any stack"
          subtitle="Build more reliable software with AI companion. AI is also trained to detect lazy developers who do nothing and just complain on Twitter."
        />
      </section>
      <section className={styles.sectionBg}>
        <FeaturesCards
          superTitle="Best company ever"
          title="Integrate effortlessly with any technology stack"
          subtitle=" Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon."
          data={mockdata}
        />
      </section>
      <section className={styles.sectionSlider}>
        <Testimonials title="What our clients say" data={testimonials} />
      </section>
      <section className={styles.sectionFAQ}>
        <FAQ title="Frequently Asked Questions" data={faqData} />
      </section>
    </>
  );
}
