import React from 'react';

import { Screen } from '../src';
import { Navigator } from '../src/components/Navigator';

export default {
  title: 'UIKit/Screen',
  component: Screen,
  argTypes: {},
};

const Template = (args) => (
  <Navigator>
    <Screen {...args}>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
    </Screen>
  </Navigator>
);

export const FullScreen = Template.bind({});
FullScreen.args = {
  headerTitle: 'Full Screen',
};
