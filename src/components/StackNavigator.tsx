import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { NavigatorContext } from '../hooks';

export interface ScreenProps {
  name: string;
  title?: string;
  className?: string;
  onBack?: () => void;
  backTitle?: string;
  component: React.ComponentType;
  disableAnimation?: boolean;
  animationDirection?: 'left' | 'right' | 'up';
}

function Screen({
  name,
  title,
  className,
  onBack,
  backTitle,
  disableAnimation,
  animationDirection = 'right',
  component: Component,
}: PropsWithChildren<ScreenProps>) {
  return (
    <div className={`screen ${className} ${disableAnimation ? '' : 'animated'} ${animationDirection}`}>
      <header>
        {onBack && (
          <button className="back link" onClick={onBack}>
            ‹ {backTitle}
          </button>
        )}
        <h2>{title || name}</h2>
      </header>
      <Component />
    </div>
  );
}

export interface StackNavigatorProps {
  screens: ScreenProps[];
  options?: Partial<ScreenProps>;
}

export function StackNavigator({ screens, options = {} }: PropsWithChildren<StackNavigatorProps>): ReactElement {
  const [stack, setStack] = useState([screens[0]]);

  function navigate(screen: string) {
    setStack((prev) => [...prev, screens.find((s) => s.name === screen)]);
  }

  function goBack() {
    setStack((prev) => {
      const copy = [...prev];
      if (copy.length > 1) {
        copy.pop();
      }
      return copy;
    });
  }

  return (
    <div
      className="stack-navigator"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          goBack();
        }
      }}
    >
      <NavigatorContext navigator={{ navigate, goBack }}>
        {stack.map((screen, i) => {
          const backOptions: Partial<ScreenProps> = {};
          if (i > 0) {
            // got back up one
            backOptions.onBack = goBack;
            backOptions.backTitle = stack[i - 1].title || stack[i - 1].name;
          }
          return <Screen key={screen.name} {...backOptions} {...options} {...screen} />;
        })}
      </NavigatorContext>
    </div>
  );
}
