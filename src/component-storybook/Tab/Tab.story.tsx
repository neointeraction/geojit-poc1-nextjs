import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Tabs from './Tabs';
import Tab from './Tab';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab label="Large Cap Stocks">
      <h2>Large Cap Stocks</h2>
      <p style={{ fontSize: '14px', width: ' 450px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non dui
        justo. Donec efficitur tellus erat, ut imperdiet mauris accumsan sed.
        Donec vulputate libero eu tempor blandit. Aenean quis odio congue,
        facilisis orci eget, viverra lorem. Sed sed massa maximus, dictum velit
        id, pretium nisi. In eget rutrum sapien. Integer fermentum velit dictum
        congue feugiat. Praesent sem ipsum, fringilla vitae mi sed, blandit
        dignissim nisi. Cras venenatis vestibulum magna, lacinia vestibulum erat
        iaculis non. Aliquam tempor metus a ex sagittis, ut consequat nibh
        luctus.
      </p>
    </Tab>
    <Tab label="Mid Cap Stocks">
      <h2>Mid Cap Stocks</h2>
      <p style={{ fontSize: '14px', width: ' 450px' }}>
        Pellentesque et ipsum vel metus ullamcorper mollis. Suspendisse
        imperdiet placerat lectus, quis vestibulum nunc sollicitudin id. Mauris
        dignissim laoreet tortor, et efficitur ante pretium eu. Aenean vitae
        risus sollicitudin, sagittis mi ac, scelerisque massa. Ut mollis urna
        eget egestas pellentesque. Suspendisse ornare nibh ut mi tincidunt
        ullamcorper. Donec eleifend purus vitae dapibus condimentum.
      </p>
    </Tab>
    <Tab label="Small Cap Stocks">
      <h2>Small Cap Stocks</h2>
      <p style={{ fontSize: '14px', width: ' 450px' }}>
        Duis augue lorem, tempus eget lacus at, faucibus finibus odio. Quisque
        semper porttitor dui quis dapibus. Cras at libero vitae tortor varius
        varius. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nam fringilla, magna ac vehicula
        suscipit, metus lectus venenatis eros, eget interdum felis orci eu
        dolor.
      </p>
    </Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
