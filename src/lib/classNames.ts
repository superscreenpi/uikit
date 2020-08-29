export function classNames(...className: (string | undefined | false)[]): string {
  return className.filter((c) => !!c).join(' ');
}
