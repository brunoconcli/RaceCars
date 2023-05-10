import { IDeleteRaceCarDTO, IDeleteRaceCar } from "@core/use-cases"
import { IDeleteRaceCarRepository, IFindRaceCarByIdRepository } from "@app/ports/repositories"

export class DeleteRaceCar implements IDeleteRaceCar {
  constructor (
    private readonly findRaceCarByIdRepository: IFindRaceCarByIdRepository,
    private readonly deleteRaceCarRepository: IDeleteRaceCarRepository
  ) {}

  async delete (data: IDeleteRaceCarDTO): Promise<void> {
    if (!await this.findRaceCarByIdRepository.findById(data.id))
      throw new Error("The car passed does not exist")

      return await this.deleteRaceCarRepository.delete(data.id)
  }
}
