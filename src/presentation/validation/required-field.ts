import { type ICommunicateDTO, missingParameterError } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

export class RequiredFieldValidation implements IValidator {
  constructor(private readonly fieldName: string) {}
  validate(data: object): ICommunicateDTO | undefined {
    if (!data[this.fieldName])
      return missingParameterError(this.fieldName).getObject()
  }
}
