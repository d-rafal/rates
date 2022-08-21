import { authApi } from "./auth/authApi";
import { currencyApi_2 } from "./currency/currencyRatesApi";

export const api = { auth: authApi, currency: currencyApi_2 };
export type AppApi = typeof api;
