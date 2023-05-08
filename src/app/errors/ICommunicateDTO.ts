import { type ECommunicateCode } from "."

export interface ICommunicateDTO {
  readonly hash: string
  readonly code: ECommunicateCode
  readonly message: string
  readonly data?: any
  readonly date: Date
}
