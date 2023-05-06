import { Brand } from "@core/entities"

export interface IFindAllBrandRepository {
  findAll: () => Promise<Brand[]>
}
