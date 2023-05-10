import { type IDeleteBrandRepository } from "./delete"
import { type IFindAllBrandRepository } from "./find-all"
import { type IFindBrandByIdRepository } from "./find-by-id"
import {
  type IFindSearchBrandRepository,
  type IFindSearchBrandRepositoryDTO,
} from "./find-search"
import { type ISaveBrandRepository } from "./save"
import { type IUpdateBrandRepository } from "./update"

type IBrandRepository = IDeleteBrandRepository &
  ISaveBrandRepository &
  IUpdateBrandRepository &
  IFindAllBrandRepository &
  IFindBrandByIdRepository &
  IFindSearchBrandRepository

export type {
  IBrandRepository,
  IDeleteBrandRepository,
  ISaveBrandRepository,
  IUpdateBrandRepository,
  IFindAllBrandRepository,
  IFindBrandByIdRepository,
  IFindSearchBrandRepository,
  IFindSearchBrandRepositoryDTO,
}
