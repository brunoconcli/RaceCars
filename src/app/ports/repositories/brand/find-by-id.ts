import { type Brand } from "@core/entities"

export interface IFindBrandByIdRepository {
  findById: (id: Brand["id"]) => Promise<Brand>
}
