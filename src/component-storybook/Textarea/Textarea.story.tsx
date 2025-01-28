import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Textarea from './Textarea';

export default {
  title: 'Inputs/Textarea',
  component: Textarea,
  argTypes: {
    value: {
      control: 'text',
      description: 'The initial value of the textarea field.',
    },
    placeholder: {
      control: 'text',
      description:
        'The placeholder text displayed when the textarea field is empty.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the textarea value changes.',
    },
    onFocus: {
      action: 'focused',
      description: 'Function called when the textarea field receives focus.',
    },
    onBlur: {
      action: 'blurred',
      description: 'Function called when the textarea field loses focus.',
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name applied to the textarea element.',
    },
    rows: {
      control: 'number',
      description: 'Number of rows in the textarea.',
    },
    cols: {
      control: 'number',
      description: 'Number of columns in the textarea.',
    },
    label: {
      control: 'text',
      description: 'Optional label text displayed above the textarea.',
    },
  },
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Textarea
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};

export const TextareaBase = Template.bind({});
TextareaBase.args = {
  value: '',
  placeholder: 'Enter text',
  rows: 5,
  cols: 33,
};

export const TextareaWithLabel = Template.bind({});
TextareaWithLabel.args = {
  value: '',
  placeholder: 'Enter text',
  label: 'Textarea Label',
  rows: 5,
  cols: 33,
};
