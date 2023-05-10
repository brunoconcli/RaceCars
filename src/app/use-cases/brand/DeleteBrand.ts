import { type IDeleteBrand, type IDeleteBrandDTO } from "@core/use-cases"

import {
  type IFindBrandByIdRepository,
  type IDeleteBrandRepository,
} from "@app/ports/repositories"

export class DeleteBrand implements IDeleteBrand {
  constructor(
    private readonly iFindBrandByIdRepository: IFindBrandByIdRepository,
    private readonly iDeleteBrandRepository: IDeleteBrandRepository
  ) {}

  async delete(data: IDeleteBrandDTO): Promise<void> {
    if (!(await this.iFindBrandByIdRepository.findById(data.id)))
      throw new Error("The brand id passed does not exist")
    await this.iDeleteBrandRepository.delete(data.id)
  }
}
