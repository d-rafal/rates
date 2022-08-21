import { useLayoutEffect, useRef } from "react";

const useComponentStillMountedRef = () => {
  const componentStillMountedRef = useRef(true);

  useLayoutEffect(() => {
    // again set to true because in version 18 at lest in development and inside strict mode component effect a simulated to be:
    // mounted, unmounted and again mounted
    componentStillMountedRef.current = true;

    return () => {
      componentStillMountedRef.current = false;
    };
  }, []);

  return componentStillMountedRef;
};

export default useComponentStillMountedRef;
export type UseComponentStillMountedType = ReturnType<
  typeof useComponentStillMountedRef
>;
