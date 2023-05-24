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
    try {
      return await this.saveRaceCarRepository.save(data)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
