import { type RaceCar } from "@core/entities"

export interface TDeleteRaceCarDTO {
  readonly id: RaceCar["id"]
}
export interface IDeleteRaceCar {
  delete: (data: TDeleteRaceCarDTO) => Promise<void>
}
