import { RaceCar } from "@core/entities"

export interface IDeleteRaceCarRepository {
  delete: (id: RaceCar["id"]) => Promise<void>
}
