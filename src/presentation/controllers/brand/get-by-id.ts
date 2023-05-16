import { AdaptError } from "@pre/utils/adapt-error"

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
      return AdaptError(error)
    }
  }
}
