import React from 'react';
import { Link } from '../src';

export default {
  title: 'UIKit/Link',
  component: Link,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => {
  return <Link {...args} />;
};

export const AsAnchor = Template.bind({});
AsAnchor.args = {
  href: 'https://superscreenpi.github.io/uikit',
  target: 'blank',
  children: 'a tag',
};

export const AsButton = Template.bind({});
AsButton.args = {
  onClick: () => {
    alert('You clicked me!');
  },
  children: 'button tag',
};
