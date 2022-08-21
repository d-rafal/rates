import isMobileBrowser from "./isMobileBrowser";

const setMobileHeightPropSetting = () => {
  document.documentElement.style.setProperty(
    "--mobile-height",
    window.innerHeight + "px"
  );
};

document.addEventListener("DOMContentLoaded", () => {
  isMobileBrowser(() => {
    setMobileHeightPropSetting();
  });
});

export let resizeEventFuns: Array<(e: Event) => void> = [];

export const removeResizeEventFun = (
  ...funsToDelete: Array<(e: Event) => void>
): void => {
  resizeEventFuns = resizeEventFuns.filter((fun) => {
    for (const funToDelete of funsToDelete) {
      if (fun === funToDelete) {
        return false;
      }
    }
    return true;
  });
};

export const addResizeEventFun = (
  ...funToAdd: Array<(e: Event) => void>
): void => {
  resizeEventFuns = resizeEventFuns.concat(funToAdd);
};

window.addEventListener("resize", (e) => {
  resizeEventFuns.forEach((fun) => {
    fun(e);
  });
});
