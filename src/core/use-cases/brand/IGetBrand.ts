import { type Brand } from "@core/entities"

export interface IGetBrandByIdDTO {
  readonly id: Brand["id"]
}

export interface IGetBrandById {
  getBrandById: (data: IGetBrandByIdDTO) => Promise<Brand>
}

export interface IGetAllBrands {
  getAllBrands: () => Promise<Brand>
}
