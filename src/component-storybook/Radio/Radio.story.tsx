import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Radio from './Radio';

export default {
  title: 'Inputs/Radio',
  component: Radio,
  args: {
    name: 'example',
    value: 'option1',
    label: 'Option 1',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The initial checked state of the radio button.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the radio button state changes.',
    },
    name: {
      control: 'text',
      description: 'The name attribute of the radio button input.',
    },
    value: {
      control: 'text',
      description: 'The value of the radio button input.',
    },
    label: {
      control: 'text',
      description: 'The label text displayed next to the radio button.',
    },
  },
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Radio
        {...args}
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={(value) => {
          setSelectedValue(value);
          args.onChange(value);
        }}
        label="Radio Label 1"
      />
      <Radio
        {...args}
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={(value) => {
          setSelectedValue(value);
          args.onChange(value);
        }}
        label="Radio Label 2"
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
};
