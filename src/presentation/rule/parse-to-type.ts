import { type IRule, type IConvert } from "@app/ports/presentation"

export class ParseToTypeRule implements IRule {
  constructor(
    private readonly fieldName: string,
    private readonly convert: IConvert
  ) {}

  handle(data: object): void {
    data[this.fieldName] = this.convert.handle(data[this.fieldName])
  }
}
