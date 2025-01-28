import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Testimonials from './Testimonials';

const testimonials = [
  {
    cite: '– Forrest Gump',
    quote:
      'Life is like an npm install – you never know what you are going to get.',
  },
  {
    cite: '– Albert Einstein',
    quote:
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
  },
  {
    cite: '– Steve Jobs',
    quote:
      'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.',
  },
  {
    cite: '– Maya Angelou',
    quote: 'We may encounter many defeats, but we must not be defeated.',
  },
];

export default {
  title: 'Page Components/Testimonials',
  args: {
    title: 'What our clients say',
    data: testimonials,
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

const TestimonialsStory: StoryFn<any> = (args) => <Testimonials {...args} />;

export { TestimonialsStory };
