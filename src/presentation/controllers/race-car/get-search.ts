import { type IGetRaceCarsSearch } from "@core/use-cases"
import { AdaptError } from "@pre/utils"

import {
  type IController,
  type IValidator,
  type IRequest,
  type IRule,
} from "@app/ports/presentation"

export class GetRaceCarsSearchController implements IController {
  constructor(
    private readonly useCase: IGetRaceCarsSearch,
    private readonly bodyRule: IRule,
    private readonly bodyValidator: IValidator
  ) {}

  async handle(req: IRequest): Promise<any> {
    try {
      this.bodyRule.handle(req.body)
      const error = this.bodyValidator.validate(req.body)
      if (error) throw error

      const { name, brandId, color, year, priceMax, priceMin, filter } =
        req.body

      return {
        statusCode: 200,
        body: await this.useCase.getRaceCarsSearch({
          name,
          brandId,
          color,
          year,
          priceMax,
          priceMin,
          filter,
        }),
      }
    } catch (error) {
      console.log(error)
      return AdaptError(error)
    }
  }
}
