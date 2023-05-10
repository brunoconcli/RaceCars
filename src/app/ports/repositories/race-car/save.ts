import { type RaceCar } from "@core/entities"

export interface ISaveRaceCarRepository {
  save: (data: Omit<RaceCar, "id">) => Promise<RaceCar>
}
