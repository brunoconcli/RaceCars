import { CommunicateDTO, ECommunicateCode } from "@app/errors"
import { type IResponse } from "@app/ports/presentation"

export function AdaptError(error: any): IResponse {
  if (error instanceof CommunicateDTO) return error.getObjectResponse()

  return {
    statusCode: 500,
    body: {
      message: "Internal server error",
      type: ECommunicateCode.InE,
      date: new Date(),
    },
  }
}
