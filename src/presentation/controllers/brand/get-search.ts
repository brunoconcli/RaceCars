import { CommunicateDTO, ECommunicateCode } from "@app/errors"
import {
  type IRule,
  type IController,
  type IRequest,
} from "@app/ports/presentation"
import { type GetBrand } from "@app/use-cases/brand"

export class GetSearchController implements IController {
  constructor(
    private readonly useCase: GetBrand,
    private readonly bodyRule: IRule
  ) {}

  async handle(req: IRequest): Promise<any> {
    try {
      this.bodyRule.handle(req.body)
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
      console.log(error)
      if (error instanceof CommunicateDTO) return error.getObjectResponse()

      return {
        statusCode: 500,
        body: {
          message: "Internal server error",
          type: ECommunicateCode.InE,
          date: new Date(),
        },
      }
    }
  }
}
