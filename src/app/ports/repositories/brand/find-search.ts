import { Brand } from "@core/entities"

export interface IFindSearchBrandRepository {
  findSearch: () => Promise<Brand[]>
}
