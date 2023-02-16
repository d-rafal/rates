/**
 *
 * @param ms - time in milliseconds, default 0ms
 * @param resolvedValue - resolved value (optional)
 * @returns Promise<T extends undefined ? undefined : T>
 */
export const sleep = <T = undefined>(ms: number = 0, resolvedValue?: T) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(resolvedValue), ms)
  ) as any as Promise<T extends undefined ? undefined : T>;
};
