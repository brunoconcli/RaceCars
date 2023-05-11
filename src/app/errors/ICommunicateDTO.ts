import { type ECommunicateCode } from "."

export interface ICommunicateDTO {
  readonly code: number
  readonly type: ECommunicateCode
  readonly message: string
  readonly data?: any
  readonly date: Date
}
