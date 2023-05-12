import { type Brand } from "@core/entities"
import { type ICreateBrand, type ICreateBrandDTO } from "@core/use-cases"

import { CommunicateDTO, ECommunicateCode } from "@app/errors"
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
      (
        await this.findSearchBrandRepository.findSearch({
          name: data.name,
          country: data.country,
        })
      ).length > 0
    )
      throw new CommunicateDTO(
        ECommunicateCode.InA,
        400,
        "Brand already exists",
        data
      )

    return await this.saveBrandRepository.save(data)
  }
}
