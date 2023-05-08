import { type IUniqueIdProvider } from "@app/ports/providers/unique-id-provider"

import { type ICommunicateDTO } from "."
export class CommunicateDTO {
  private hash: ICommunicateDTO["hash"]
  private readonly message: ICommunicateDTO["message"]
  private readonly code: ICommunicateDTO["code"]
  private readonly date: ICommunicateDTO["date"]
  private readonly data: ICommunicateDTO["data"]

  constructor(
    message: ICommunicateDTO["message"],
    code: ICommunicateDTO["code"],
    uuid: IUniqueIdProvider,
    data?: ICommunicateDTO["data"]
  ) {
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
      date: this.date,
    }
  }
}
