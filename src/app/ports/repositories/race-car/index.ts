import { type IDeleteRaceCarRepository } from "./delete"
import { type IFindAllRaceCarRepository } from "./find-all"
import { type IFindRaceCarByIdRepository } from "./find-by-id"
import {
  type IFindSearchRaceCarRepository,
  type IFindSearchRaceCarRepositoryDTO,
} from "./find-serarch"
import { type ISaveRaceCarRepository } from "./save"
import { type IUpdateRaceCarRepository } from "./update"

type IRaceCarRepository = IDeleteRaceCarRepository &
  ISaveRaceCarRepository &
  IUpdateRaceCarRepository &
  IFindAllRaceCarRepository &
  IFindRaceCarByIdRepository &
  IFindSearchRaceCarRepository

export type {
  IRaceCarRepository,
  IDeleteRaceCarRepository,
  ISaveRaceCarRepository,
  IUpdateRaceCarRepository,
  IFindAllRaceCarRepository,
  IFindRaceCarByIdRepository,
  IFindSearchRaceCarRepository,
  IFindSearchRaceCarRepositoryDTO,
}
