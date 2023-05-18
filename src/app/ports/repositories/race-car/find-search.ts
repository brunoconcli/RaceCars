import { type RaceCar } from "@core/entities"
import { type IGetRaceCarsSearchDTO } from "@core/use-cases"

export interface IFindSearchRaceCarRepository {
  findSearch: (search: IGetRaceCarsSearchDTO) => Promise<RaceCar[]>
}
