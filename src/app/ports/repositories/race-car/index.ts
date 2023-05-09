import { type IDeleteRaceCarRepository } from "./delete"
import { type IFindAllRaceCarRepository } from "./find-all"
import { type IFindByIdRaceCarRepository } from "./find-by-id"
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
  IFindByIdRaceCarRepository &
  IFindSearchRaceCarRepository

export type {
  IRaceCarRepository,
  IDeleteRaceCarRepository,
  ISaveRaceCarRepository,
  IUpdateRaceCarRepository,
  IFindAllRaceCarRepository,
  IFindByIdRaceCarRepository,
  IFindSearchRaceCarRepository,
  IFindSearchRaceCarRepositoryDTO,
}
