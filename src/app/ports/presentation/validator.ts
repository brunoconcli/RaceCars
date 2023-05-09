import { type ICommunicateDTO } from "@app/errors"

export interface IValidator {
  validate: (data: object) => ICommunicateDTO | undefined
}
