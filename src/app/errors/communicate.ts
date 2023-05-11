import { type ICommunicateDTO } from "."
export class CommunicateDTO extends Error {
  message: ICommunicateDTO["message"]
  private readonly code: ICommunicateDTO["code"]
  private readonly type: ICommunicateDTO["type"]
  private readonly date: ICommunicateDTO["date"]
  private readonly data: ICommunicateDTO["data"]

  constructor(
    type: ICommunicateDTO["type"],
    code: ICommunicateDTO["code"],
    message: ICommunicateDTO["message"],
    data?: ICommunicateDTO["data"]
  ) {
    super()
    this.code = code
    this.type = type
    this.message = message
    this.data = data
    this.date = new Date()
  }

  getObject(): ICommunicateDTO {
    return {
      code: this.code,
      type: this.type,
      message: this.message,
      data: this.data,
      date: this.date,
    }
  }
}
