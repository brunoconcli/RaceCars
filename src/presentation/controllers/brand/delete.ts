import { AdaptError } from "@pre/utils"

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
        statusCode: 201,
        body: {
          message: "Brand deleted successfully",
        },
      }
    } catch (error) {
      return AdaptError(error)
    }
  }
}
