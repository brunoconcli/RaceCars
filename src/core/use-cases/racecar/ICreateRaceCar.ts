import { type RaceCar } from "@core/entities"

export interface TCreateRaceCarDTO {
  readonly name: RaceCar["name"]
  readonly brandId: RaceCar["brandId"]
  readonly year: RaceCar["year"]
  readonly color: RaceCar["color"]
  readonly price: RaceCar["price"]
}

export interface ICreateRaceCar {
  create: (data: TCreateRaceCarDTO) => Promise<RaceCar>
}
