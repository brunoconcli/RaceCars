import { type Brand } from "@core/entities"

export interface IDeleteBrandRepository {
  delete: (id: Brand["id"]) => Promise<void>
}
