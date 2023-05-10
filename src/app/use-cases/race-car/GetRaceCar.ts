import { type RaceCar } from "@core/entities"
import {
  type IGetRaceCarByIdDTO,
  type IGetRaceCarById,
  type IGetRaceCarsSearch,
  type IGetRaceCarsSearchDTO,
  type IGetAllRaceCars,
} from "@core/use-cases"

import {
  type IFindRaceCarByIdRepository,
  type IFindAllRaceCarRepository,
  type IFindSearchRaceCarRepository,
} from "@app/ports/repositories"

export class GetRaceCar
  implements IGetRaceCarById, IGetRaceCarsSearch, IGetAllRaceCars
{
  constructor(
    private readonly findRaceCarByIdRepository: IFindRaceCarByIdRepository,
    private readonly findSearchRaceCarsRepository: IFindSearchRaceCarRepository,
    private readonly findAllRaceCarsRepository: IFindAllRaceCarRepository
  ) {}

  async getAllRaceCars(): Promise<RaceCar[]> {
    return await this.findAllRaceCarsRepository.findAll()
  }

  async getRaceCarsSearch(data: IGetRaceCarsSearchDTO): Promise<RaceCar[]> {
    return await this.findSearchRaceCarsRepository.findSearch(data)
  }

  async getRaceCarById(data: IGetRaceCarByIdDTO): Promise<RaceCar> {
    const raceCar = await this.findRaceCarByIdRepository.findById(data.id)

    if (!raceCar) throw new Error("The car passed does not exist")

    return raceCar
  }
}
