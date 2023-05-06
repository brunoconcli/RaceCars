import { type RaceCar } from "@core/entities"

export interface IGetRaceCarByIdDTO {
  readonly id: RaceCar["id"]
}
export interface IGetRaceCarsSearchDTO {
  readonly name?: RaceCar["name"]
  readonly brand?: RaceCar["brandId"]
  readonly color?: RaceCar["color"]
  readonly year?: RaceCar["year"][]
  readonly priceMax?: RaceCar["price"]
  readonly priceMin?: RaceCar["price"]
  readonly filter: {
    readonly order: "ASC" | "DESC"
    readonly limit: number
    readonly offset: number
  }
}

export interface IGetRaceCarById {
  getRaceCarById: (data: IGetRaceCarByIdDTO) => Promise<RaceCar>
}

export interface IGetRaceCarsSearch {
  getRaceCarsSearch: (data: IGetRaceCarsSearchDTO) => Promise<RaceCar[]>
}

export interface IGetAllRaceCars {
  getAllRaceCars: () => Promise<RaceCar>
}