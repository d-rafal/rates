import Ajv, { JTDSchemaType, ValidateFunction } from "ajv/dist/jtd";
import addFormats from "ajv-formats";

export const ajv = new Ajv();
addFormats(ajv, ["email"]);

export const getSchemaWithAssertion = <T>(
  schema: JTDSchemaType<T, Record<string, never>>,
  key: string
) => {
  let validate = ajv.getSchema(key);
  if (!validate) {
    ajv.addSchema(schema, key);
    validate = ajv.getSchema(key);
  }

  return validate as ValidateFunction<T>;
};
