import React, { useContext } from 'react';

interface NavigatorApi {
  navigate(screen: string);

  goBack();
}

const Context = React.createContext<NavigatorApi | undefined>(undefined);

export const NavigatorContext: React.FC<{ navigator: NavigatorApi }> = ({ navigator, children }) => (
  <Context.Provider value={navigator}>{children}</Context.Provider>
);

export function useNavigator(): NavigatorApi {
  const navigator = useContext(Context);
  if (!navigator) {
    throw new Error('Navigator can only be used inside a NavigatorContext. Wrap your components in a StackNavigator.');
  }
  return navigator;
}
