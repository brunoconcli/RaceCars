import { type ICreateBrand } from "@core/use-cases"
import { AdaptError } from "@pre/utils/adapt-error"

import {
  type IRequest,
  type IResponse,
  type IController,
  type IValidator,
} from "@app/ports/presentation"

export class CreateBrandController implements IController {
  constructor(
    private readonly useCase: ICreateBrand,
    private readonly bodyValidate: IValidator
  ) {}

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const error = this.bodyValidate.validate(req.body)
      if (error) throw error
      return {
        statusCode: 201,
        body: {
          message: "Brand created successfully",
          data: await this.useCase.create(req.body),
        },
      }
    } catch (error) {
      return AdaptError(error)
    }
  }
}
