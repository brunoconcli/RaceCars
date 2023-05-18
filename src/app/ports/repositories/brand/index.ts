import { type IDeleteBrandRepository } from "./delete"
import { type IFindAllBrandsRepository } from "./find-all"
import { type IFindBrandByIdRepository } from "./find-by-id"
import { type IFindSearchBrandRepository } from "./find-search"
import { type ISaveBrandRepository } from "./save"
import { type IUpdateBrandRepository } from "./update"

type IBrandRepository = IDeleteBrandRepository &
  ISaveBrandRepository &
  IUpdateBrandRepository &
  IFindAllBrandsRepository &
  IFindBrandByIdRepository &
  IFindSearchBrandRepository

export type {
  IBrandRepository,
  IDeleteBrandRepository,
  ISaveBrandRepository,
  IUpdateBrandRepository,
  IFindAllBrandsRepository,
  IFindBrandByIdRepository,
  IFindSearchBrandRepository,
}
