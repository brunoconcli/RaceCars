import { type Brand } from "@core/entities"
import { type IUpdateBrand, type IUpdateBrandDTO } from "@core/use-cases"

import {
  type IFindBrandByIdRepository,
  type IUpdateBrandRepository,
} from "@app/ports/repositories/brand"

export class UpdateBrand implements IUpdateBrand {
  constructor(
    private readonly iFindBrandByIdRepository: IFindBrandByIdRepository,
    private readonly iUpdateBrandRepository: IUpdateBrandRepository
  ) {}

  async update(data: IUpdateBrandDTO): Promise<Brand> {
    if (!(await this.iFindBrandByIdRepository.findById(data.id)))
      throw new Error("The brand id passed does not exist")

    return await this.iUpdateBrandRepository.update(data.id, data)
  }
}
