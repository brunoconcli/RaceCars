import { type IUniqueIdProvider } from "@app/ports/providers/unique-id-provider"

export interface ICommunicateDTO {
  readonly hash: string
  readonly code: number
  readonly message: string
  readonly data?: any
  readonly date: Date
}

export class CommunicateDTO extends Error {
  private hash: string
  readonly message: string
  private readonly data?: any
  private readonly code: number
  private readonly date: Date

  constructor(
    message: ICommunicateDTO["message"],
    code: ICommunicateDTO["code"],
    uuid: IUniqueIdProvider,
    data?: ICommunicateDTO["data"]
  ) {
    super()
    uuid
      .generate()
      .then((hash) => (this.hash = hash))
      .catch((err) => {
        throw new Error(err)
      })
    this.code = code
    this.message = message
    this.data = data
    this.date = new Date()
  }

  getObject(): ICommunicateDTO {
    return {
      hash: this.hash,
      code: this.code,
      message: this.message,
      data: this.data,
      date: this.date
    }
  }
}
