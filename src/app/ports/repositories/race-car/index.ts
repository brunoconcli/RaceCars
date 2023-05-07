import { IDeleteRaceCarRepository } from "./delete"
import { IFindAllRaceCarRepository } from "./find-all"
import { IFindByIdRaceCarRepository } from "./find-by-id"
import { IFindSearchRaceCarRepository, IFindSearchRaceCarRepositoryDTO } from "./find-serarch"
import { ISaveRaceCarRepository } from "./save"
import { IUpdateRaceCarRepository } from "./update"

type IRaceCarRepository = IDeleteRaceCarRepository & ISaveRaceCarRepository & IUpdateRaceCarRepository &
  IFindAllRaceCarRepository & IFindByIdRaceCarRepository & IFindSearchRaceCarRepository

export {
  IRaceCarRepository,
  IDeleteRaceCarRepository, ISaveRaceCarRepository, IUpdateRaceCarRepository,
  IFindAllRaceCarRepository, IFindByIdRaceCarRepository, IFindSearchRaceCarRepository,
  IFindSearchRaceCarRepositoryDTO
}
