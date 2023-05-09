import { type Brand } from "@core/entities"

export interface IFindSearchBrandRepositoryDTO {
  readonly name?: Brand["name"]
  readonly country?: Brand["country"]
  readonly inauguratedIn?: Array<Brand["inauguratedIn"]>
}
export interface IFindSearchBrandRepository {
  findSearch: (data: IFindSearchBrandRepositoryDTO) => Promise<Brand[]>
}
