import { type Brand } from "@core/entities"

export interface IUpdateBrandDTO {
  readonly id: Brand["id"]
}

export interface IUpdateBrand {
  update: (data: IUpdateBrandDTO) => Promise<Brand>
}
