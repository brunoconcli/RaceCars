import { AdaptError } from "@pre/utils"

import {
  type IRequest,
  type IResponse,
  type IController,
  type IValidator,
  type IRule,
} from "@app/ports/presentation"
import { type UpdateBrand } from "@app/use-cases/brand/UpdateBrand"

export class UpdateController implements IController {
  constructor(
    private readonly useCase: UpdateBrand,
    private readonly bodyValidate: IValidator,
    private readonly paramRule: IRule,
    private readonly paramValidate: IValidator
  ) {}

  async handle(req: IRequest): Promise<IResponse> {
    try {
      let error = this.bodyValidate.validate(req.body)
      this.paramRule.handle(req.params)
      error = this.paramValidate.validate(req.params)
      if (error) throw error
      return {
        statusCode: 201,
        body: {
          message: "Brand updated successfully",
          data: await this.useCase.update({
            id: req.params.id,
            ...req.body,
          }),
        },
      }
    } catch (error) {
      return AdaptError(error)
    }
  }

}
