import { useSetNavDrawerOpen } from "./NavDrawerProvider";

const useCloseOpenDrawerHandlers = (matchUpLg: boolean) => {
  const setNavDrawerOpen = useSetNavDrawerOpen();

  const toggleDrawer = (
    shouldOpen: boolean,
    event?: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setNavDrawerOpen(shouldOpen);
  };

  const closeDrawer = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (!matchUpLg) toggleDrawer(false, event);
  };
  const openDrawer = (event: React.MouseEvent | React.KeyboardEvent) => {
    toggleDrawer(false, event);
  };

  return [openDrawer, closeDrawer] as const;
};

export default useCloseOpenDrawerHandlers;
