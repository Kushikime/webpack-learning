type States = Record<string, boolean | string>;

export const getClassNames = (
  currentClass: string,
  additionalClasses: string[],
  states: States = {}
): string => {
  return [
    currentClass,
    ...additionalClasses,
    ...Object.entries(states)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};

// usage
// classNames('currentClass', {hovered: true, disabled: true}, ['some global class', 'p-10', 'flex-centered']);
// return => 'currentClass hovered disabled'
