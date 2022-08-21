import { useLocation } from "react-router-dom";
import { isLocationStateWithFromProperty } from "../../../@types-and-const/@general";

const useRedirectLocationOnAuthentication = () => {
  const location = useLocation();

  let from = "/";

  if (
    isLocationStateWithFromProperty(location.state) &&
    location.state.from.pathname
  ) {
    from = location.state.from.pathname;

    if (location.state.from.search) {
      from += location.state.from.search;
    }
  }

  return from;
};

export default useRedirectLocationOnAuthentication;
