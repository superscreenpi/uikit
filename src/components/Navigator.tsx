import React from 'react';

export interface NavigatorProps {}

export interface ScreenProps {
  name: string;
  title?: string;
  className?: string;
  onBack?: () => void;
}

export interface Stack {
  Navigator: React.FC<NavigatorProps>;
  Screen: React.FC<ScreenProps>;
}

export function createStackNavigator(): Stack {
  // TODO: Create config?
  return {
    Navigator: ({ children }) => {
      return <div className="navigator">{children}</div>;
    },
    Screen: ({ children, name, title, className, onBack }) => {
      return (
        <div className={`screen ${className}`}>
          <header>
            {onBack && (
              <button className="back link" onClick={onBack}>
                Back
              </button>
            )}
            <h2>{title}</h2>
          </header>
          {children}
        </div>
      );
    },
  };
}
