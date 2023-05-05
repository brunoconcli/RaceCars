import { type RaceCar } from "@core/entities"

export interface ICreateRaceCarDTO {
  readonly name: RaceCar["name"]
  readonly brandId: RaceCar["brandId"]
  readonly year: RaceCar["year"]
  readonly color: RaceCar["color"]
  readonly price: RaceCar["price"]
}

export interface ICreateRaceCar {
  create: (data: ICreateRaceCarDTO) => Promise<RaceCar>
}
