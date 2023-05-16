import { AdaptError } from "@pre/utils/adapt-error"

import { type IController } from "@app/ports/presentation"
import { type GetBrand } from "@app/use-cases/brand"

export class GetAllController implements IController {
  constructor(private readonly useCase: GetBrand) {}
  async handle(): Promise<any> {
    try {
      return {
        statusCode: 200,
        body: await this.useCase.getAllBrands(),
      }
    } catch (error) {
      return AdaptError(error)
    }
  }
}
