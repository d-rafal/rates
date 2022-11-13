export const getValueFromUrlQueryTypeGuard = <T extends E, K extends T, E>(
  valueFromUrlQuery: E,
  substituteValue: K,
  validationFunction: (value: E) => value is T
) => {
  let typeGuardValue: T | K = substituteValue;

  if (validationFunction(valueFromUrlQuery)) {
    typeGuardValue = valueFromUrlQuery;
  }

  return typeGuardValue;
};
