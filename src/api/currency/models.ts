import { JTDSchemaType } from "ajv/dist/jtd";

export interface CurrencyRate {
  table: string;
  currency: string;
  code: string;
  rates: {
    no: string;
    effectiveDate: string;
    mid: number;
  }[];
}

export const currencyRateSchema: JTDSchemaType<CurrencyRate> = {
  properties: {
    table: { type: "string" },
    currency: { type: "string" },
    code: { type: "string" },
    rates: {
      elements: {
        properties: {
          no: { type: "string" },
          effectiveDate: { type: "string" },
          mid: { type: "float64" },
        },
        additionalProperties: false,
      },
    },
  },
  additionalProperties: false,
};
