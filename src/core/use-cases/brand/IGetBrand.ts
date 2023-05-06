import { type Brand } from "@core/entities"

export interface IGetBrandByIdDTO {
  readonly id: Brand["id"]
}

export interface IGetBrandsSearchDTO {
  readonly name?: Brand["name"]
  readonly country?: Brand["country"]
  readonly inauguratedIn?: Brand["inauguratedIn"][]
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
