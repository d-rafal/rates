import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  EUR_CURRENCY,
  USD_CURRENCY,
} from "../../@types-and-const/@url-queries/@currency";

export const rtkqApi = createApi({
  reducerPath: "currency",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: [USD_CURRENCY, EUR_CURRENCY],
  endpoints: () => ({}),
});
