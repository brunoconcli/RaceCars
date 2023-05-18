import { type IUpdateRaceCar } from "@core/use-cases"
import { AdaptError } from "@pre/utils"

import {
  type IRequest,
  type IResponse,
  type IController,
  type IValidator,
  type IRule,
} from "@app/ports/presentation"

export class UpdateRaceCar implements IController {
  constructor(
    private readonly useCase: IUpdateRaceCar,
    private readonly bodyValidate: IValidator,
    private readonly paramValidate: IValidator,
    private readonly paramRule: IRule,

  ) {}
  async handle(req: IRequest): Promise<IResponse> {
    try {
      let error = this.bodyValidate.validate(req.body)
      this.paramRule.handle(req.params)
      error = this.paramValidate.validate(req.params)
      if (error) throw error
      return {
        statusCode :201,
        body: {
          message: "RaceCar updated successfully",
          data: await this.useCase.update({
            id: req.params.id,
            ...req.body,
          })
        },
      }
    }
    catch (error) {
      return AdaptError(error)
    }
  }
}
