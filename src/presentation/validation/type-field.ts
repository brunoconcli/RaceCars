/* eslint-disable valid-typeof */
import { type CommunicateDTO, IncorrectTypeError } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

export class TypeFieldVerification implements IValidator {
  constructor(
    private readonly fieldName: string,
    private readonly type: "string" | "number" | "boolean" | "object"
  ) {}

  validate(data: object): CommunicateDTO {
    if (data[this.fieldName])
      if (typeof data[this.fieldName] !== this.type)
        return IncorrectTypeError(this.fieldName)
  }
}
