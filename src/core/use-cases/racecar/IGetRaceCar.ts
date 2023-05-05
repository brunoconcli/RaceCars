import { type RaceCar } from "@core/entities"

export interface IGetRaceCarByIdDTO {
  readonly id: RaceCar["id"]
}

export interface IGetRaceCarById {
  getRaceCarById: (data: IGetRaceCarByIdDTO) => Promise<RaceCar>
}

export interface IGetAllRaceCars {
  getAllRaceCars: () => Promise<RaceCar>
}
