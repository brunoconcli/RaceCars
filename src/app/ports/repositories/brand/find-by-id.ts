import { type Brand } from "@core/entities"

export interface IFindByIdBrandRepository {
  findById: (id: Brand["id"]) => Promise<Brand>
}
