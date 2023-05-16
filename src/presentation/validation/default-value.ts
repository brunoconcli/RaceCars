import { UtilsFieldName } from "@pre/utils"

import { IncorrectTypeError, type CommunicateDTO } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

export class DefaultValueValidation implements IValidator {
  constructor(
    private readonly fieldName: string,
    private readonly defaultValues: any[]
  ) {}

  validate(data: object): CommunicateDTO {
    const utilsFieldNames = new UtilsFieldName(this.fieldName, data)

    if (utilsFieldNames.validateExistFieldName())
      if (!this.defaultValues.includes(utilsFieldNames.getData()))
        return IncorrectTypeError(this.fieldName)
  }
}
