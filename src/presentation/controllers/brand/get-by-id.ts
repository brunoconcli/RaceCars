import { CommunicateDTO, ECommunicateCode } from "@app/errors"
import {
  type IValidator,
  type IController,
  type IRequest,
} from "@app/ports/presentation"
import { type GetBrand } from "@app/use-cases/brand"

export class GetByIdController implements IController {
  constructor(
    private readonly useCase: GetBrand,
    private readonly paramsValidate: IValidator
  ) {}

  async handle(req: IRequest): Promise<any> {
    try {
      const error = this.paramsValidate.validate(req.params)
      if (error) throw error
      return {
        statusCode: 200,
        body: await this.useCase.getBrandById(req.params),
      }
    } catch (error) {
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
