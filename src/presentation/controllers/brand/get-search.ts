import { AdaptError } from "@pre/utils/adapt-error"

import {
  type IRule,
  type IController,
  type IRequest,
  type IValidator,
} from "@app/ports/presentation"
import { type GetBrand } from "@app/use-cases/brand"

export class GetSearchController implements IController {
  constructor(
    private readonly useCase: GetBrand,
    private readonly bodyRule: IRule,
    private readonly bodyValidate: IValidator
  ) {}

  async handle(req: IRequest): Promise<any> {
    try {
      this.bodyRule.handle(req.body)
      const error = this.bodyValidate.validate(req.body)
      if (error) throw error

      const { name, inauguratedIn, country, filter } = req.body

      return {
        statusCode: 200,
        body: await this.useCase.getBrandsSearch({
          name,
          inauguratedIn,
          country,
          filter,
        }),
      }
    } catch (error) {
      return AdaptError(error)
    }
  }
}
