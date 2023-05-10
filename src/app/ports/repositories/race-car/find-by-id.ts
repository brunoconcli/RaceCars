import { type RaceCar } from "@core/entities"

export interface IFindRaceCarByIdRepository {
  findById: (id: RaceCar["id"]) => Promise<RaceCar>
}
