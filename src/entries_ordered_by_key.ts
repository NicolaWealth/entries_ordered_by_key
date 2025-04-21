export const entitiesOrderedByKey = <T>(entries: [string, T][]) =>
  entries
    .sort(
      ([a], [b]) => a < b ? -1 : a > b ? 1 : 0
    );

export const entitiesOrderedByKeyReversed = <T>(entries: [string, T][]) =>
  entries
    .sort(
      ([a], [b]) => a < b ? 1 : a > b ? -1 : 0
    );
