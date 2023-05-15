import { CommunicateDTO } from "@app/errors"
import { type IValidator } from "@app/ports/presentation"

export class CompositeValidation implements IValidator {
  constructor(private readonly validations: IValidator[]) {}

  validate(data: object): CommunicateDTO {
    for (const validation of this.validations) {
      const error = validation.validate(data)
      if (error instanceof CommunicateDTO) return error
    }
  }
}
