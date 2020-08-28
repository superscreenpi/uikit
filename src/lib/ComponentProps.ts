export interface ComponentProps {
  className?: string;
}

export function getProps<T extends ComponentProps>(props: ComponentProps, className?: string): ComponentProps {
  return {
    className: [className, props.className].filter((c) => !!c).join(' '),
  };
}
