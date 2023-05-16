/* eslint-disable valid-typeof */
import { UtilsFieldName } from "@pre/utils"

import { type CommunicateDTO, IncorrectTypeError } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

export class TypeFieldVerification implements IValidator {
  constructor(
    private readonly fieldName: string,
    private readonly type: "string" | "number" | "boolean" | "object",
    private utilsFieldName?: UtilsFieldName
  ) {}

  validate(data: object): CommunicateDTO {
    if (!this.utilsFieldName)
      this.utilsFieldName = new UtilsFieldName(this.fieldName, data)

    if (this.utilsFieldName.validateExistFieldName())
      if (this.utilsFieldName.getDataType() !== this.type)
        return IncorrectTypeError(this.fieldName)
  }
}
