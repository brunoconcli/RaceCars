import { type RaceCar } from "@core/entities"

export interface IGetRaceCarByIdDTO {
  readonly id: RaceCar["id"]
}
export interface IGetRaceCarsSearchDTO {
  name?: string
  brandId?: number
  color?: string
  year?: number[]
  priceMax?: number
  priceMin?: number
  readonly filter: {
    readonly order: "ASC" | "DESC"
    readonly limit: number
    readonly page: number
  }
}

export interface IGetRaceCarById {
  getRaceCarById: (data: IGetRaceCarByIdDTO) => Promise<RaceCar>
}

export interface IGetRaceCarsSearch {
  getRaceCarsSearch: (data: IGetRaceCarsSearchDTO) => Promise<RaceCar[]>
}

export interface IGetAllRaceCars {
  getAllRaceCars: () => Promise<RaceCar[]>
}
