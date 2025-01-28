import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Title from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  args: {
    children: 'Sample Title Text',
    level: 1,
    type: 'boldItalic',
    size: '24',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The content displayed within the title.',
    },
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
      description: 'The heading level (H1 - H5).',
    },
    type: {
      control: {
        type: 'select',
        options: ['boldItalic', 'semibold', 'regularItalic'],
      },
      description:
        'The font style applied to the title (bold italic, semibold, regular italic).',
    },
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '18', '16', '14'],
      },
      description: 'The font size of the title in pixels.',
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const H1Heading = Template.bind({});
H1Heading.args = {
  level: 1,
  children: 'H1 Heading Open Sans Bold I 60 px',
};

export const H2Heading = Template.bind({});
H2Heading.args = {
  level: 2,
  children: 'H2 Heading Open Sans Bold I 45 px',
};

export const H3Heading = Template.bind({});
H3Heading.args = {
  level: 3,
  children: 'H3 Heading Open Sans Bold I 40 px',
};

export const H4Heading = Template.bind({});
H4Heading.args = {
  level: 4,
  type: 'semibold',
  children: 'H4 Heading Open Sans Semibold',
};

export const H5BoldItalic = Template.bind({});
H5BoldItalic.args = {
  level: 5,
  type: 'boldItalic',
  children: 'H5 Heading Open Sans Bold I',
};

export const H5Semibold = Template.bind({});
H5Semibold.args = {
  level: 5,
  type: 'semibold',
  children: 'H5 Heading Open Sans Semibold',
};

export const Body24 = Template.bind({});
Body24.args = {
  type: 'regularItalic',
  level: undefined,
  size: '24',
  children: 'Body Open Sans Regular I 24 px',
};

export const Body20 = Template.bind({});
Body20.args = {
  type: 'regularItalic',
  level: undefined,
  size: '20',
  children: 'Body Open Sans Regular I 20 px',
};

export const Body18 = Template.bind({});
Body18.args = {
  type: 'regularItalic',
  level: undefined,
  size: '18',
  children: 'Body Open Sans Regular I 18 px',
};

export const Body16 = Template.bind({});
Body16.args = {
  type: 'regularItalic',
  level: undefined,
  size: '16',
  children: 'Body Open Sans Regular I 16 px',
};

export const Body14 = Template.bind({});
Body14.args = {
  level: undefined,
  size: '14',
  children: 'Body Open Sans Regular 14 px',
};
