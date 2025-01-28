import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import FAQ from './FAQ';

const faqData = [
  {
    faqQuestion: 'How can I reset my password?',
    faqAnswer:
      'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.',
  },
  {
    faqQuestion: 'Can I create more than one account?',
    faqAnswer:
      'It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.',
  },
  {
    faqQuestion: 'How can I subscribe to the monthly newsletter?',
    faqAnswer:
      'It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.',
  },
  {
    faqQuestion: 'Do you store credit card information securely?',
    faqAnswer:
      'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.',
  },
  {
    faqQuestion: 'What payment systems do you work with?',
    faqAnswer:
      'It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.',
  },
];

export default {
  title: 'Page Components/FAQ',
  args: {
    title: 'Frequently Asked Questions',
    data: faqData,
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
} as Meta;

const FAQStory: StoryFn<any> = (args) => <FAQ {...args} />;

export { FAQStory };
