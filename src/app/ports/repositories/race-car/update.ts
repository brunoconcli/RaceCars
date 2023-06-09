import { type RaceCar } from "@core/entities"

export interface IUpdateRaceCarRepository {
  update: (
    id: RaceCar["id"],
    raceCar: Partial<Omit<RaceCar, "id">>
  ) => Promise<RaceCar>
}
