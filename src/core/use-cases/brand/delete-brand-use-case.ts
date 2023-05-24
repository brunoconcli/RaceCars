import { type Brand } from "@core/entities"

export interface IDeleteBrandDTO {
  readonly id: Brand["id"]
}

export interface IDeleteBrand {
  delete: (data: IDeleteBrandDTO) => Promise<void>
}
