import { type RaceCar } from "@core/entities"

export interface IFindAllRaceCarsRepository {
  findAll: () => Promise<RaceCar[]>
}
