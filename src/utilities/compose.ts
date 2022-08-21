interface Fn {
  (val: any): any;
}

export const compose =
  (...fns: Fn[]) =>
  (val: any) =>
    fns.reduceRight((prev, fn) => fn(prev), val);
