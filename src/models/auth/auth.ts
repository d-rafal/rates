import { JTDSchemaType } from "ajv/dist/jtd";
import { IdFromApi } from "../../@types-and-const/@common";

export interface User {
  _id: IdFromApi;
  name: string;
  email: string;
}

export const userSchema: JTDSchemaType<User> = {
  properties: {
    _id: { type: "string" },
    name: { type: "string" },
    email: { type: "string" },
  },
  additionalProperties: false,
};
