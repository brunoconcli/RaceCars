import { type IConvert } from "@app/ports/presentation"

export class NumberConvert implements IConvert {
  handle(value: any): any {
    return Number(value)
  }
}
