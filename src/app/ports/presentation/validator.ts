import { type CommunicateDTO } from "@app/errors"

export interface IValidator {
  validate: (data: object) => CommunicateDTO | undefined
}
