import React from 'react';

export interface NavigatorProps {}

export interface ScreenProps {
  name: string;
  title?: string;
  className?: string;
  onBack?: () => void;
  component: React.ComponentType;
  disableAnimation?: boolean;
  animationDirection?: 'left' | 'right' | 'up';
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
    Screen: ({
      name,
      title,
      className,
      onBack,
      disableAnimation,
      animationDirection = 'left',
      component: Component,
    }) => {
      return (
        <div className={`screen ${className} ${disableAnimation ? '' : 'animated'} ${animationDirection}`}>
          <header>
            {onBack && (
              <button className="back link" onClick={onBack}>
                Back
              </button>
            )}
            <h2>{title}</h2>
          </header>
          <Component />
        </div>
      );
    },
  };
}
