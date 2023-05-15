import { type RaceCar } from "@core/entities"

export interface IUpdateRaceCarDTO {
  readonly id: RaceCar["id"]
  readonly name?: RaceCar["name"]
  readonly brand?: RaceCar["brandId"]
  readonly color?: RaceCar["color"]
  readonly year?: RaceCar["year"]
  readonly price?: RaceCar["price"]
  readonly imageURL?: RaceCar["imageURL"]
}

export interface IUpdateRaceCar {
  update: (data: IUpdateRaceCarDTO) => Promise<RaceCar>
}
