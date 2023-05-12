import { type ICreateBrand } from "@core/use-cases"

import { CommunicateDTO, ECommunicateCode } from "@app/errors"
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

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const error = this.bodyValidate.validate(request.body)
      if (error) return error.getObjectResponse()
      return {
        statusCode: 201,
        body: {
          message: "Brand created successfully",
          data: await this.useCase.create(request.body),
        },
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
