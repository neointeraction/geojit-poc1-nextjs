import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import PageHeader from './PageHeader';

export default {
  title: 'Page Components/PageHeader',
  args: {
    onClick: () => {},
    title: 'Automated AI code reviews for any stack',
    subtitle:
      'Build more reliable software with AI companion. AI is also trained to detect lazy developers who do nothing and just complain on Twitter.',
    isDisabled: false,
    type: 'primary',
  },
  argTypes: {
    onClick: {
      description: 'Function to handle the click event on the button.',
      action: 'clicked',
    },
    ButtonText: {
      description: 'Text to be displayed inside the button.',
      control: { type: 'text' },
    },
    isDisabled: {
      description: 'Boolean to disable the button.',
      control: { type: 'boolean' },
    },
    type: {
      description:
        'Defines the style type of the button. Options include "primary", "secondary", and "link".',
      control: { type: 'select', options: ['primary', 'secondary', 'link'] },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
} as Meta;

const PageHeaderStory: StoryFn<any> = (args) => <PageHeader {...args} />;

export { PageHeaderStory };
