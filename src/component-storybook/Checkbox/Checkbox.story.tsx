import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox Label',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The initial checked state of the checkbox.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the checkbox state changes.',
    },
    label: {
      control: 'text',
      description: 'The text label displayed next to the checkbox.',
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={(checked) => {
        setIsChecked(checked);
        args.onChange(checked);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
};
