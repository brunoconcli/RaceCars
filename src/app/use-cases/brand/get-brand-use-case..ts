import { type Brand } from "@core/entities"
import {
  type IGetBrandByIdDTO,
  type IGetBrandById,
  type IGetBrandsSearch,
  type IGetBrandsSearchDTO,
  type IGetAllBrands,
} from "@core/use-cases"

import { CommunicateDTO, ECommunicateCode } from "@app/errors"
import {
  type IFindBrandByIdRepository,
  type IFindAllBrandsRepository,
  type IFindSearchBrandRepository,
} from "@app/ports/repositories"

export class GetBrand
  implements IGetAllBrands, IGetBrandById, IGetBrandsSearch
{
  constructor(
    private readonly findBrandByIdRepository: IFindBrandByIdRepository,
    private readonly findAllBrandsRepository: IFindAllBrandsRepository,
    private readonly findSearchBrandRepository: IFindSearchBrandRepository
  ) {}

  async getAllBrands(): Promise<Brand[]> {
    return await this.findAllBrandsRepository.findAll()
  }

  async getBrandsSearch(data: IGetBrandsSearchDTO): Promise<Brand[]> {
    return await this.findSearchBrandRepository.findSearch(data)
  }

  async getBrandById(data: IGetBrandByIdDTO): Promise<Brand> {
    const brand = await this.findBrandByIdRepository.findById(data.id)
    if (!brand)
      throw new CommunicateDTO(
        ECommunicateCode.DBE,
        401,
        "there is no brand that contains this id"
      )
    return brand
  }
}
