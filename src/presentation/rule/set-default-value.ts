import { type IRule } from "@app/ports/presentation"

export class SetDefaultValueRule implements IRule {
  constructor(
    private readonly fieldName: string,
    private readonly valueDefault: any
  ) {}

  handle(data: object): void {
    if (!data[this.fieldName]) data[this.fieldName] = this.valueDefault
  }
}
