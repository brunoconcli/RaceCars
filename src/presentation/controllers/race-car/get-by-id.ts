import { AdaptError } from "@pre/utils"

import {
    type IValidator,
    type IRequest,
    type IController,
} from "@app/ports/presentation"
import { type GetRaceCar } from "@app/use-cases/race-car/GetRaceCar"
export class GetRaceCarByIdController implements IController {
  constructor(
    private readonly useCase: GetRaceCar,
    private readonly paramsValidate: IValidator
  ) {}

  async handle(req: IRequest): Promise<any> {
    try {
      const error = this.paramsValidate.validate(req.params)
      if (error) throw error
      return {
        statusCode: 200,
        body: await this.useCase.getRaceCarById(req.params),
      }
    } catch (error) {
      return AdaptError(error)
    }
  }
}