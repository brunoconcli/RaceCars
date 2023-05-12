import { CommunicateDTO, ECommunicateCode } from "."

export function IncorrectTypeError(param: string): CommunicateDTO {
  return new CommunicateDTO(
    ECommunicateCode.InD,
    400,
    "Incorrect type",
    `The ${param} field was not filled in correctly`
  )
}
