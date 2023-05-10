import { type RaceCar } from "@core/entities"
import { type ICreateRaceCar, type ICreateRaceCarDTO } from "@core/use-cases"

import {
  type IFindSearchRaceCarRepository,
  type ISaveRaceCarRepository,
} from "@app/ports/repositories/race-car"

export class CreateRaceCar implements ICreateRaceCar {
  constructor(
    private readonly findSearchRaceCarRepository: IFindSearchRaceCarRepository,
    private readonly saveRaceCarRepository: ISaveRaceCarRepository
  ) {}

  async create(data: ICreateRaceCarDTO): Promise<RaceCar> {
    if (
      await this.findSearchRaceCarRepository.findSearch({
        name: data.name,
        brand: data.brandId,
        year: [data.year],
        color: data.color,
      })
    )
      throw new Error("This car already exists")

    return await this.saveRaceCarRepository.save(data)
  }
}
