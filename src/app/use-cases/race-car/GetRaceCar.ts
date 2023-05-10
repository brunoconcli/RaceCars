import { RaceCar } from "@core/entities"
import { IFindRaceCarByIdRepository, IFindAllRaceCarRepository, IFindSearchRaceCarRepository } from "@app/ports/repositories"
import { IGetRaceCarByIdDTO, IGetRaceCarById, IGetRaceCarsSearch, IGetRaceCarsSearchDTO, IGetAllRaceCars} from "@core/use-cases"

export class GetRaceCar implements IGetRaceCarById, IGetRaceCarsSearch, IGetAllRaceCars {
  constructor (
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
