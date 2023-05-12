/* eslint-disable valid-typeof */
import { type CommunicateDTO, missingParameterError } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

import { TypeFieldVerification } from "./type-field"

export class RequiredAndTypeFieldValidation<T> implements IValidator {
  constructor(
    private readonly fieldName: string,
    private readonly type?: "string" | "number" | "boolean" | "object",
    private readonly typeObject?: new () => T
  ) {}

  validate(data: object): CommunicateDTO {
    console.log(typeof data[this.fieldName])
    if (!data[this.fieldName]) return missingParameterError(this.fieldName)
    if (this.type)
      return new TypeFieldVerification(
        this.fieldName,
        this.type,
        this.typeObject
      ).validate(data)
  }
}
