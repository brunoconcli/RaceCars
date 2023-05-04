import { type RaceCar } from "@core/entities"

export interface IGetAllRaceCars {
  getAll: () => Promise<RaceCar>
}
