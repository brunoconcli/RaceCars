import { type IDeleteBrandRepository } from "./delete"
import { type IFindAllBrandRepository } from "./find-all"
import { type IFindBrandByIdRepository } from "./find-by-id"
import {
  type IFindSearchBrandRepository,
  type IFindSearchBrandRepositoryDTO,
} from "./find-search"
import { type ISaveBrandRepository } from "./save"
import { type IUpdateBandRepository } from "./update"

type IBrandRepository = IDeleteBrandRepository &
  ISaveBrandRepository &
  IUpdateBandRepository &
  IFindAllBrandRepository &
  IFindBrandByIdRepository &
  IFindSearchBrandRepository

export type {
  IBrandRepository,
  IDeleteBrandRepository,
  ISaveBrandRepository,
  IUpdateBandRepository,
  IFindAllBrandRepository,
  IFindBrandByIdRepository,
  IFindSearchBrandRepository,
  IFindSearchBrandRepositoryDTO,
}
