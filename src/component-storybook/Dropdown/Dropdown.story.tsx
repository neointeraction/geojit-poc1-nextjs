import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: 'array',
      description: 'An array of strings representing the dropdown options.',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text displayed when no option is selected.',
    },
    onSelect: {
      action: 'selected',
      description: 'Function called when a dropdown option is selected.',
    },
    label: {
      control: 'text',
      description: 'Optional label text displayed above the dropdown.',
    },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: 'Select an option',
};

export const DropdownWithLabel = Template.bind({});
DropdownWithLabel.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: 'Select an option',
  label: 'Label text',
};
