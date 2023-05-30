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
  type IFindAllRaceCarsRepository,
  type IFindSearchRaceCarRepository,
} from "@app/ports/repositories"

export class GetRaceCar
  implements IGetRaceCarById, IGetRaceCarsSearch, IGetAllRaceCars
{
  constructor(
    private readonly findRaceCarByIdRepository: IFindRaceCarByIdRepository,
    private readonly findSearchRaceCarsRepository: IFindSearchRaceCarRepository,
    private readonly findAllRaceCarsRepository: IFindAllRaceCarsRepository
  ) {}

  async getAllRaceCars(): Promise<RaceCar[]> {
    return (await this.findAllRaceCarsRepository.findAll()).map((value) => {
      value.color = "#" + value.color
      return value
    })
  }

  async getRaceCarsSearch(data: IGetRaceCarsSearchDTO): Promise<RaceCar[]> {
    return (await this.findSearchRaceCarsRepository.findSearch(data)).map(
      (value) => {
        value.color = "#" + value.color
        return value
      }
    )
  }

  async getRaceCarById(data: IGetRaceCarByIdDTO): Promise<RaceCar> {
    const raceCar = await this.findRaceCarByIdRepository.findById(data.id)

    raceCar.color = "#" + raceCar.color

    if (!raceCar) throw new Error("The car passed does not exist")

    return raceCar
  }
}
