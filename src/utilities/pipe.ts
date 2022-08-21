interface Fn {
  (val: any): any;
}

export const pipe =
  (...fns: Fn[]) =>
  (val: any) =>
    fns.reduce((prev, fn) => fn(prev), val);
