import { CommunicateDTO, ECommunicateCode } from "@app/errors"
import { type IController, type IRequest } from "@app/ports/presentation"
import { type GetBrand } from "@app/use-cases/brand"

export class GetSearchController implements IController {
  constructor(private readonly useCase: GetBrand) {}

  async handle(req: IRequest): Promise<any> {
    try {
      req.body.filter = {
        offset: req.body.offset ? Number(req.body.offset) : 0,
        limit: req.body.limit ? Number(req.body.limit) : 10,
        order: req.body.order ? req.body.order : "ASC",
      }
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
