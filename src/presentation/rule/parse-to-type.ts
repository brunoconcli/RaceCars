import { type IRule } from "@app/ports/presentation"

export class ParseToTypeRule<T> implements IRule {
  constructor(private readonly fieldName: string) {}

  handle(data: object): void {
    data[this.fieldName] = data[this.fieldName] as T
  }
}
