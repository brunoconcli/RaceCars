import { UtilsFieldName } from "@pre/utils"

import { type CommunicateDTO, missingParameterError } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

import { TypeFieldVerification } from "./type-field"

export class RequiredAndTypeFieldValidation implements IValidator {
  constructor(
    private readonly fieldName: string,
    private readonly type?: "string" | "number" | "boolean" | "object"
  ) {}

  validate(data: object): CommunicateDTO {
    const utilsFieldName = new UtilsFieldName(this.fieldName, data)
    if (!utilsFieldName.validateExistFieldName())
      return missingParameterError(this.fieldName)
    if (this.type)
      return new TypeFieldVerification(
        this.fieldName,
        this.type,
        utilsFieldName
      ).validate(data)
  }
}
