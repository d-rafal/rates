import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { CURRENCY_ROUTE } from "./currencyRoute";
import { TEST_ROUTE } from "./testRoute";

export interface NavRoute {
  path: string;
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export const NAV_ROUTES: NavRoute[] = [CURRENCY_ROUTE, TEST_ROUTE];
