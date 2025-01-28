import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'text',
      description:
        'The type of input field (e.g., "text", "password", "email").',
    },
    value: {
      control: 'text',
      description: 'The initial value of the input field.',
    },
    placeholder: {
      control: 'text',
      description:
        'The placeholder text displayed when the input field is empty.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the input value changes.',
    },
    onFocus: {
      action: 'focused',
      description: 'Function called when the input field receives focus.',
    },
    onBlur: {
      action: 'blurred',
      description: 'Function called when the input field loses focus.',
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name applied to the input element.',
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};

export const InputBase = Template.bind({});
InputBase.args = {
  type: 'text',
  value: '',
  placeholder: 'Enter text',
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  type: 'text',
  value: '',
  placeholder: 'Enter text',
  label: 'Input Label',
};
