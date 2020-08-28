import React, { ReactElement, useContext, useState } from 'react';

interface NavigatorAPI {
  render(p: ReactElement): void;
}

class NavigatorImpl implements NavigatorAPI {
  constructor(private readonly renderer: (e: ReactElement) => void) {
    console.log('creating...');
  }

  render(p: React.ReactElement): void {
    this.render(p);
  }
}

const Context = React.createContext<NavigatorAPI>(({} as unknown) as any);

export const Navigator: React.FC = ({ children }) => {
  const [display, setDisplay] = useState<ReactElement>();
  const [nav] = useState(() => new NavigatorImpl(setDisplay));

  console.log(children);
  return (
    <Context.Provider value={nav}>
      {children}
      {display}
    </Context.Provider>
  );
};

export const useNavigator = () => useContext(Context);
