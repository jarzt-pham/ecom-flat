import { ZodType } from "zod";

export class ValidateUtils {
  static validatePlain<T extends ZodType<any, any>, K>(
    schemaValidate: T,
    payload: K
  ) {
    return schemaValidate.parse(payload);
  }
}
