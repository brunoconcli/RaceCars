import { type Brand } from "@core/entities"

export interface TCreateBrandDTO {
  readonly name: Brand["name"]
  readonly country: Brand["country"]
  readonly inauguratedIn: Brand["inauguratedIn"]
}

export interface ICreateBrand {
  create: (brand: TCreateBrandDTO) => Promise<Brand>
}
