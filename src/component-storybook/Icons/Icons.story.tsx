import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Icon from './Icon';

export default {
  title: 'Assets/Icons',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'add',
        'close',
        'copy',
        'delete',
        'edit',
        'mail',
        'menu',
        'play',
        'search',
      ],
      description:
        'The name of the icon to render. Corresponds to an icon within the icon library.',
    },
    size: {
      control: 'number',
      description: 'The size of the icon in pixels.',
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'close',
  size: 24,
};
