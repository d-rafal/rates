/**
 *
 * @param ms - time in milliseconds
 * @returns Promise<unknown>
 */
export const sleep = (ms: number = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
