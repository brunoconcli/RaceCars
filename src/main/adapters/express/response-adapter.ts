import { type Response as httpResponse } from "express"

import { type IResponse } from "@app/ports/presentation"

export function adaptResponseExpress(
  response: IResponse
): (res: httpResponse) => void {
  return (res: httpResponse) => {
    response.body
      ? res.status(response.statusCode)
      : res.sendStatus(response.statusCode)
    typeof response.body === "object" && res.json(response.body)
    typeof response.body === "string" && res.send(response.body)
    return response
  }
}
