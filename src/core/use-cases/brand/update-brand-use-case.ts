import { type Brand } from "@core/entities"

export interface IUpdateBrandDTO {
  readonly id: Brand["id"]
  readonly name?: Brand["name"]
  readonly country?: Brand["country"]
  readonly inauguratedIn?: Brand["inauguratedIn"]
}

export interface IUpdateBrand {
  update: (data: IUpdateBrandDTO) => Promise<Brand>
}
