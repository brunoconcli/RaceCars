import { type IDeleteRaceCar } from "@core/use-cases"
import { AdaptError } from "@pre/utils"

import {
  type IRequest,
  type IResponse,
  type IController,
  type IValidator,
} from "@app/ports/presentation"

export class DeleteRaceCarController implements IController {
  constructor(
    private readonly useCase: IDeleteRaceCar,
    private readonly paramValidator: IValidator
  ) {}

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const error = this.paramValidator.validate(req.params)
      if (error) throw error
      await this.useCase.delete(req.params)
      return {
        statusCode: 201,
        body: {
          message: "Race car deleted successfully",
        },
      }
    } catch (error) {
      return AdaptError(error)
    }
  }
}
