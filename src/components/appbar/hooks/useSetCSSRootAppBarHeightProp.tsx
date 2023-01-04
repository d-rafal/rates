import { useLayoutEffect, useRef } from "react";
import { CSS_ROOT_APP_BAR_HEIGHT_PROP } from "../../../@types-and-const/globalConsts";
import debounce from "../../../utilities/debounce";
import {
  addResizeEventFun,
  removeResizeEventFun,
} from "../../../utilities/appHeightAdjustment";

export const useSetCSSRootAppBarHeightProp = () => {
  const refToAppBar = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const setCSSRootAppBarHeightProp = () => {
      if (refToAppBar.current) {
        document.documentElement.style.setProperty(
          CSS_ROOT_APP_BAR_HEIGHT_PROP,
          refToAppBar.current.getBoundingClientRect().height + "px"
        );
      }
    };

    setCSSRootAppBarHeightProp();

    const setCSSRootAppBarHeightPropDebounce = debounce(
      setCSSRootAppBarHeightProp,
      300
    );

    addResizeEventFun(setCSSRootAppBarHeightPropDebounce);

    return () => {
      removeResizeEventFun(setCSSRootAppBarHeightPropDebounce);
    };
  }, []);

  return refToAppBar;
};
