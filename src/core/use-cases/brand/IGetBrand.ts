import { IFindSearchBrandRepository } from "@app/ports/repositories"
import { IFindSearchBrandRepositoryDTO } from "@app/ports/repositories"
import { type Brand } from "@core/entities"

export interface IGetBrandByIdDTO {
  readonly id: Brand["id"]
}

export interface IGetBrandsSearchDTO extends IFindSearchBrandRepositoryDTO {
  readonly filter: {
    readonly order: "ASC" | "DESC"
    readonly limit: number
    readonly offset: number
  }
}

export interface IGetBrandById {
  getBrandById: (data: IGetBrandByIdDTO) => Promise<Brand>
}

export interface IGetBrandsSearch {
  getBrandsSearch: (data: IGetBrandsSearchDTO) => Promise<Brand[]>
}

export interface IGetAllBrands {
  getAllBrands: () => Promise<Brand>
}
