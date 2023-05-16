import { type Brand } from "@core/entities"
import { type IGetBrandsSearchDTO } from "@core/use-cases"
export interface IFindSearchBrandRepository {
  findSearch: (data: IGetBrandsSearchDTO) => Promise<Brand[]>
}
