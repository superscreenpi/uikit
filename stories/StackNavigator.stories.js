import React, { useState } from 'react';
import { createStackNavigator } from '../src/components/Navigator';

export default {
  title: 'UIKit/StackNavigator',
  component: Screen,
  argTypes: {},
};

const Stack = createStackNavigator();

const Template = () => {
  const [active, setActive] = useState(1);
  return (
    <Stack.Navigator>
      <Stack.Screen
        title="Screen Three"
        className={active === 3 ? 'active' : active > 3 ? 'stacked' : ''}
        onBack={() => setActive(2)}
      >
        <p>
          This page has a lot of content so we can show how scrolling interacts. We should be weary of strange
          behaviors.
        </p>
      </Stack.Screen>
      <Stack.Screen
        title="Screen Two"
        className={active === 2 ? 'active' : active > 2 ? 'stacked' : ''}
        onBack={() => setActive(1)}
      >
        <p>
          This page has a lot of content so we can show how scrolling interacts. We should be weary of strange
          behaviors.
        </p>
        <button onClick={() => setActive(3)}>Open Screen 3</button>
      </Stack.Screen>
      <Stack.Screen title="Screen One" className={active === 1 ? 'active' : active > 1 ? 'stacked' : ''}>
        <p>
          This page has a lot of content so we can show how scrolling interacts. We should be weary of strange
          behaviors.
        </p>
        <p>
          <button onClick={() => setActive(2)}>Open Screen 2</button>
        </p>
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export const FullScreen = Template.bind({});
FullScreen.args = {};
