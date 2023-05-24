import { type Brand } from "@core/entities"

export interface ICreateBrandDTO {
  readonly name: Brand["name"]
  readonly country: Brand["country"]
  readonly inauguratedIn: Brand["inauguratedIn"]
}

export interface ICreateBrand {
  create: (brand: ICreateBrandDTO) => Promise<Brand>
}
