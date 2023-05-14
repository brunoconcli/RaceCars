import { CommunicateDTO, ECommunicateCode } from "@app/errors"
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
