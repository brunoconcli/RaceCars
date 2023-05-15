import { type IRule } from "@app/ports/presentation"

export class CompositeRule implements IRule {
  constructor(private readonly rules: IRule[]) {}
  handle(data: object): void {
    this.rules.forEach((rule) => {
      rule.handle(data)
    })
  }
}
