import { type IDeleteRaceCarRepository } from "./delete"
import { type IFindAllRaceCarsRepository } from "./find-all"
import { type IFindRaceCarByIdRepository } from "./find-by-id"
import { type IFindSearchRaceCarRepository } from "./find-search"
import { type ISaveRaceCarRepository } from "./save"
import { type IUpdateRaceCarRepository } from "./update"

type IRaceCarRepository = IDeleteRaceCarRepository &
  ISaveRaceCarRepository &
  IUpdateRaceCarRepository &
  IFindAllRaceCarsRepository &
  IFindRaceCarByIdRepository &
  IFindSearchRaceCarRepository

export type {
  IRaceCarRepository,
  IDeleteRaceCarRepository,
  ISaveRaceCarRepository,
  IUpdateRaceCarRepository,
  IFindAllRaceCarsRepository,
  IFindRaceCarByIdRepository,
  IFindSearchRaceCarRepository,
}
