import { CommunicateDTO, ECommunicateCode } from "@app/errors"
import {
  type IRequest,
  type IResponse,
  type IController,
  type IRule,
} from "@app/ports/presentation"
import { type DeleteBrand } from "@app/use-cases/brand"

export class DeleteBrandController implements IController {
  constructor(
    private readonly useCase: DeleteBrand,
    private readonly paramRule: IRule
  ) {}

  async handle(req: IRequest): Promise<IResponse> {
    try {
      this.paramRule.handle(req.params)
      await this.useCase.delete(req.params)
      return {
        statusCode: 200,
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
