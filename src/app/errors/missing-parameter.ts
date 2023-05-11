import { CommunicateDTO, ECommunicateCode } from "."

export function missingParameterError(param: string): CommunicateDTO {
  return new CommunicateDTO(
    ECommunicateCode.InA,
    400,
    "Missing parameter",
    `${param} attribute is missing`
  )
}
