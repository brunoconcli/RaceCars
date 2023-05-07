import { RaceCar } from "@core/entities"

export interface IFindByIdRaceCarRepository {
  findById: (id: RaceCar["id"]) => Promise<RaceCar>
}
