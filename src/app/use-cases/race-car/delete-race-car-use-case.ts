import { type IDeleteRaceCarDTO, type IDeleteRaceCar } from "@core/use-cases"

import {
  type IDeleteRaceCarRepository,
  type IFindRaceCarByIdRepository,
} from "@app/ports/repositories"

export class DeleteRaceCar implements IDeleteRaceCar {
  constructor(
    private readonly findRaceCarByIdRepository: IFindRaceCarByIdRepository,
    private readonly deleteRaceCarRepository: IDeleteRaceCarRepository
  ) {}

  async delete(data: IDeleteRaceCarDTO): Promise<void> {
    if (!(await this.findRaceCarByIdRepository.findById(data.id)))
      throw new Error("The car id passed does not exist")

    await this.deleteRaceCarRepository.delete(data.id)
  }
}
