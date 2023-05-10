import { type Brand } from "@core/entities"

export interface IFindAllBrandsRepository {
  findAll: () => Promise<Brand[]>
}
