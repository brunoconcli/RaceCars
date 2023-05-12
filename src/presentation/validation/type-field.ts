/* eslint-disable valid-typeof */
import { type CommunicateDTO, IncorrectTypeError } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

export class TypeFieldVerification<T> implements IValidator {
  constructor(
    private readonly fieldName: string,
    private readonly type: "string" | "number" | "boolean" | "object",
    private readonly typeObject?: new () => T
  ) {}

  validate(data: object): CommunicateDTO {
    if (
      !this.type ||
      (this.type === "object" &&
        !(data[this.fieldName] instanceof this.typeObject)) ||
      typeof data[this.fieldName] !== this.type
    )
      return IncorrectTypeError(this.fieldName)
  }
}
