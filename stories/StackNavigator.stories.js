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
        name="screen-four"
        title="Screen Four"
        className={active === 4 ? 'active' : active > 4 ? 'stacked' : ''}
        onBack={() => setActive(3)}
        animationDirection="up"
        component={() => (
          <p>
            This page has a lot of content so we can show how scrolling interacts. We should be weary of strange
            behaviors.
          </p>
        )}
      />
      <Stack.Screen
        name="screen-three"
        title="Screen Three"
        className={active === 3 ? 'active' : active > 3 ? 'stacked' : ''}
        onBack={() => setActive(2)}
        animationDirection="right"
        component={() => (
          <>
            <p>
              This page has a lot of content so we can show how scrolling interacts. We should be weary of strange
              behaviors.
            </p>

            <button onClick={() => setActive(4)}>Open Screen 4</button>
          </>
        )}
      />
      <Stack.Screen
        name="screen-two"
        title="Screen Two"
        className={active === 2 ? 'active' : active > 2 ? 'stacked' : ''}
        onBack={() => setActive(1)}
        component={() => (
          <>
            <p>
              This page has a lot of content so we can show how scrolling interacts. We should be weary of strange
              behaviors.
            </p>
            <button onClick={() => setActive(3)}>Open Screen 3</button>
          </>
        )}
      />
      <Stack.Screen
        name="screen-one"
        title="Screen One"
        className={active === 1 ? 'active' : active > 1 ? 'stacked' : ''}
        component={() => (
          <>
            <p>
              This page has a lot of content so we can show how scrolling interacts. We should be weary of strange
              behaviors.
            </p>
            <p>
              <button onClick={() => setActive(2)}>Open Screen 2</button>
            </p>
          </>
        )}
      />
    </Stack.Navigator>
  );
};

export const FullScreen = Template.bind({});
FullScreen.args = {};
