import { plPL, enUS } from "@mui/material/locale";
import enFlag from "../../assets/img/ic_flag_en.svg";
import deFlag from "../../assets/img/ic_flag_de.svg";

export const AVAILABLE_LANGUAGES = [
  {
    locale: enUS,
    label: "English",
    icon: enFlag,
  },
  {
    locale: plPL,
    label: "Polski",
    icon: deFlag,
  },
];
