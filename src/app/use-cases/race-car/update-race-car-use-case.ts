import { type RaceCar } from "@core/entities"
import { type IUpdateRaceCarDTO, type IUpdateRaceCar } from "@core/use-cases"

import {
  type IFindRaceCarByIdRepository,
  type IUpdateRaceCarRepository,
} from "@app/ports/repositories"

export class UpdateRaceCar implements IUpdateRaceCar {
  constructor(
    private readonly iFindRaceCarByIdRepository: IFindRaceCarByIdRepository,
    private readonly iUpdateRaceCarRepository: IUpdateRaceCarRepository
  ) {}

  async update(data: IUpdateRaceCarDTO): Promise<RaceCar> {
    if (!(await this.iFindRaceCarByIdRepository.findById(data.id)))
      throw new Error("The car id passed does not exist")

    return await this.iUpdateRaceCarRepository.update(data.id, data)
  }
}
