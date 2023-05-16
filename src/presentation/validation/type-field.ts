/* eslint-disable valid-typeof */
import { UtilsFieldNames } from "@pre/utils"

import { type CommunicateDTO, IncorrectTypeError } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

export class TypeFieldVerification implements IValidator {
  constructor(
    private readonly fieldName: string,
    private readonly type: "string" | "number" | "boolean" | "object",
    private utilsFieldNames?: UtilsFieldNames
  ) {}

  validate(data: object): CommunicateDTO {
    if (!this.utilsFieldNames)
      this.utilsFieldNames = new UtilsFieldNames(this.fieldName, data)

    if (this.utilsFieldNames.validateExistFieldName())
      if (this.utilsFieldNames.getDataType() !== this.type)
        return IncorrectTypeError(this.fieldName)
  }
}
