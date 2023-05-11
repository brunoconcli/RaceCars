import { CommunicateDTO, ECommunicateCode } from "."

export function missingParameterError(param: string): CommunicateDTO {
  return new CommunicateDTO(
    ECommunicateCode.InD,
    400,
    "Missing parameter",
    `${param} attribute is missing`
  )
}
