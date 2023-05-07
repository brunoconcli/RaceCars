import { Brand } from "@core/entities"

export interface IFindSearchBrandRepositoryDTO {
  readonly name?: Brand["name"]
  readonly country?: Brand["country"]
  readonly inauguratedIn?: Brand["inauguratedIn"][]
}
export interface IFindSearchBrandRepository {
  findSearch: (data: IFindSearchBrandRepositoryDTO) => Promise<Brand[]>
}
