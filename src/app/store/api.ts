import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkqApi = createApi({
  reducerPath: "currency",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: () => ({}),
});
