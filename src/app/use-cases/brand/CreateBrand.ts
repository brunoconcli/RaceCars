import { type Brand } from "@core/entities"
import { type ICreateBrand, type ICreateBrandDTO } from "@core/use-cases"

import {
  type IFindSearchBrandRepository,
  type ISaveBrandRepository,
} from "@app/ports/repositories"

export class CreateBrand implements ICreateBrand {
  constructor(
    private readonly findSearchBrandRepository: IFindSearchBrandRepository,
    private readonly saveBrandRepository: ISaveBrandRepository
  ) {}

  async create(data: ICreateBrandDTO): Promise<Brand> {
    if (
      await this.findSearchBrandRepository.findSearch({
        name: data.name,
        country: data.country,
      })
    )
      throw new Error("This brand already exists")

    return await this.saveBrandRepository.save(data)
  }
}
