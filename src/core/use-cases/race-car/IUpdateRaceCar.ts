import { type RaceCar } from "@core/entities"

export interface IUpdataRaceCarDTO {
  readonly id: RaceCar["id"]
  readonly name?: RaceCar["name"]
  readonly brand?: RaceCar["brandId"]
  readonly color?: RaceCar["color"]
  readonly year?: RaceCar["year"]
  readonly price?: RaceCar["price"]
}

export interface IUpdateRaceCar {
  updata: (data: IUpdataRaceCarDTO) => Promise<RaceCar>
}
