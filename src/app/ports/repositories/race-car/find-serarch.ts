import { RaceCar } from "@core/entities"

export interface IFindSearchRaceCarRepositoryDTO {
  readonly name?: RaceCar["name"]
  readonly brand?: RaceCar["brandId"]
  readonly color?: RaceCar["color"]
  readonly year?: RaceCar["year"][]
  readonly priceMax?: RaceCar["price"]
  readonly priceMin?: RaceCar["price"]
}

export interface IFindSearchRaceCarRepository {
  findSearch: (search: string) => Promise<RaceCar[]>
}
