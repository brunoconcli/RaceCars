import { IDeleteBrandRepository } from "./delete"
import { ISaveBrandRepository } from "./save"
import { IUpdateBandRepository } from "./update"
import { IFindAllBrandRepository } from "./find-all"
import { IFindByIdBrandRepository } from "./find-by-id"
import { IFindSearchBrandRepository, IFindSearchBrandRepositoryDTO } from "./find-search"

type IBrandRepository = IDeleteBrandRepository & ISaveBrandRepository &
  IUpdateBandRepository & IFindAllBrandRepository & IFindByIdBrandRepository &
  IFindSearchBrandRepository
export {
  IBrandRepository,
  IDeleteBrandRepository, ISaveBrandRepository, IUpdateBandRepository,
  IFindAllBrandRepository, IFindByIdBrandRepository, IFindSearchBrandRepository,
  IFindSearchBrandRepositoryDTO
}
