import { type RaceCar } from "@core/entities"

export interface IDeleteRaceCarDTO {
  readonly id: RaceCar["id"]
}
export interface IDeleteRaceCar {
  delete: (data: IDeleteRaceCarDTO) => Promise<void>
}
