import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement } from 'react';
import { classNames } from '../lib';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

function component(className: string, props: ButtonProps | LinkProps): ReactElement {
  if ('href' in props) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} className={classNames(props.className, className)} />;
  } else {
    return <button {...props} className={classNames(props.className, className)} />;
  }
}

export const Button: React.FC<ButtonProps | LinkProps> = (props) => component('button', props);

export const Link: React.FC<ButtonProps | LinkProps> = (props) => component('link', props);
