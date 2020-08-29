import React from 'react';
import { StackNavigator, useNavigator } from '../src';

export default {
  title: 'UIKit/StackNavigator',
  argTypes: {
    animationDirection: {
      control: {
        type: 'select',
        options: ['right', 'left', 'up'],
      },
      backTitle: {
        control: {
          type: 'text',
        },
      },
    },
  },
};

const Page1 = () => {
  const nav = useNavigator();
  return (
    <>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        <button
          onClick={() => {
            nav.navigate('screen-two');
          }}
        >
          Open Screen Two
        </button>
      </p>
    </>
  );
};
const Page2 = () => {
  const nav = useNavigator();
  return (
    <>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        <button
          onClick={() => {
            nav.navigate('screen-three');
          }}
        >
          Open Screen Three
        </button>
      </p>
    </>
  );
};
const Page3 = () => {
  const nav = useNavigator();
  return (
    <>
      <p>
        This page has a lot of content so we can show how scrolling interacts. We should be weary of strange behaviors.
      </p>
      <p>
        <button
          onClick={() => {
            nav.navigate('screen-four');
          }}
        >
          Open Screen Four
        </button>
      </p>
    </>
  );
};
const Page4 = () => {
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
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
    </div>
  );
};

const Template = (args) => {
  Object.keys(args).forEach((key) => !args[key] && delete args[key]);
  return (
    <StackNavigator
      options={args}
      screens={[
        {
          name: 'screen-one',
          title: 'Screen One',
          component: Page1,
        },
        {
          name: 'screen-two',
          title: 'Screen Two',
          component: Page2,
        },
        {
          name: 'screen-three',
          title: 'Screen Three',
          component: Page3,
        },
        {
          name: 'screen-four',
          title: 'Screen Four',
          component: Page4,
        },
      ]}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  animationDirection: 'up',
  backTitle: '',
};
