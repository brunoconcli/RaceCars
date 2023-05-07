import { type RaceCar } from "@core/entities"

export interface IFindAllRaceCarRepository {
  findAll: () => Promise<RaceCar[]>
}
