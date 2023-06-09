import { AdaptError } from "@pre/utils"

import { type IController } from "@app/ports/presentation"
import { type GetBrand } from "@app/use-cases/brand"

export class GetAllBrandsController implements IController {
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
