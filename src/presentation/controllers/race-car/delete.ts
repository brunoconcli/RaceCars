import { type IDeleteRaceCar } from "@core/use-cases"
import { AdaptError } from "@pre/utils"

import {
  type IRequest,
  type IResponse,
  type IController,
  type IRule,
} from "@app/ports/presentation"

export class DeleteRaceCarController implements IController {
  constructor(
    private readonly useCase: IDeleteRaceCar,
    private readonly paramRule: IRule
  ) {}

  async handle(req: IRequest): Promise<IResponse> {
    try {
      this.paramRule.handle(req.params)
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
