import { type RaceCar } from "@core/entities"

export interface IUpdataRaceCarDTO {
  readonly id: RaceCar["id"]
}

export interface IUpdateRaceCar {
  updata: (data: IUpdataRaceCarDTO) => Promise<RaceCar>
}
