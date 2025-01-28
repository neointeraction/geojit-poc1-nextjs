import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import FeaturesCards from './FeaturesCards';

const mockdata = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
  },
];

export default {
  title: 'Page Components/FeaturesCards',
  args: {
    superTitle: 'Best company ever',
    title: 'Integrate effortlessly with any technology stack',
    subtitle:
      ' Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.',
    data: mockdata,
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

const FeaturesCardsStory: StoryFn<any> = (args) => <FeaturesCards {...args} />;

export { FeaturesCardsStory };
