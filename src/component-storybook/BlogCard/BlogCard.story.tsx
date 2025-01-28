import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import BlogCard from './BlogCard';
import { Box } from '@mantine/core';

export default {
  title: 'Page Components/BlogCard',
  args: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: 'John Doe',
    category: 'category A',
    subtitle:
      'Integer nec augue diam. Vivamus blandit consequat felis, eget tempor felis scelerisque porta. Mauris sollicitudin orci lacus, vitae congue est ullamcorper eget. Duis mollis ac elit non blandit. In nec nunc vestibulum, condimentum augue vitae, bibendum orci.',
    img: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
    onClick: () => {},
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <Box p={60}>
        <Story />
      </Box>
    ),
  ],
} as Meta;

const PageHeaderStory: StoryFn<any> = (args) => <BlogCard {...args} />;

export { PageHeaderStory };
