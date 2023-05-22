import { type IGetAllRaceCars } from "@core/use-cases"
import { AdaptError } from "@pre/utils"

import { type IController } from "@app/ports/presentation"

export class GetAllRaceCarsController implements IController {
  constructor(private readonly useCase: IGetAllRaceCars) {}
  async handle(): Promise<any> {
    try {
      return {
        statusCode: 200,
        body: await this.useCase.getAllRaceCars(),
      }
    } catch (error) {
      return AdaptError(error)
    }
  }
}
