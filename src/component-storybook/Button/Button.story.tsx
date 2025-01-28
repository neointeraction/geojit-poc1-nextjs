import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Inputs/Buttons',
  args: {
    onClick: () => {},
    ButtonText: 'Button Text',
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

const ButtonPrimary: StoryFn<any> = (args) => <Button {...args} />;

const ButtonSecondary: StoryFn<any> = (args) => <Button {...args} />;
ButtonSecondary.args = {
  type: 'secondary',
};

const ButtonLink: StoryFn<any> = (args) => <Button {...args} />;
ButtonLink.args = {
  ButtonText: 'Link Text',
  type: 'link',
};

export { ButtonPrimary, ButtonSecondary, ButtonLink };
