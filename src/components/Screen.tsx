import React, { useEffect } from 'react';
import { useNavigator } from './Navigator';

export const Screen: React.FC = ({ children }) => {
  const nav = useNavigator();

  useEffect(() => {
    console.log('reg');
    nav.render(<p>Hello</p>);
  }, [nav]);

  return null;
};
