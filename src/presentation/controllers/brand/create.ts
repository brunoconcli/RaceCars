import { type ICreateBrand } from "@core/use-cases"

import { CommunicateDTO } from "@app/errors"
import {
  type IRequest,
  type IResponse,
  type IController,
} from "@app/ports/presentation"

export class CreateBrandController implements IController {
  constructor(private readonly useCase: ICreateBrand) { }
  async handle(request: IRequest): Promise<IResponse> {
    try {
      return {
        statusCode: 201,
        body: await this.useCase.create(request.body),
      }
    } catch (error) {
      if (error instanceof CommunicateDTO) return {
          statusCode: error.getObject().code,
          body: { ...error.getObject() },
        }
    }
  }
}
