import { type Brand } from "@core/entities"

export interface IGetBrandByIdDTO {
  readonly id: Brand["id"]
}

export interface IGetBrandsSearchDTO {
  country?: string
  inauguratedIn?: number[]
  name?: string
  readonly filter: {
    readonly order: "ASC" | "DESC"
    readonly limit: number
    readonly page: number
  }
}

export interface IGetBrandById {
  getBrandById: (data: IGetBrandByIdDTO) => Promise<Brand>
}

export interface IGetBrandsSearch {
  getBrandsSearch: (data: IGetBrandsSearchDTO) => Promise<Brand[]>
}

export interface IGetAllBrands {
  getAllBrands: () => Promise<Brand[]>
}
