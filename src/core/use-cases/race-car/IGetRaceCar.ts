import { type RaceCar } from "@core/entities"

import { type IFindSearchRaceCarRepositoryDTO } from "@app/ports/repositories"


export interface IGetRaceCarByIdDTO {
  readonly id: RaceCar["id"]
}
export interface IGetRaceCarsSearchDTO extends IFindSearchRaceCarRepositoryDTO {
  readonly filter: {
    readonly order: "ASC" | "DESC"
    readonly limit: number
    readonly offset: number
  }
}

export interface IGetRaceCarById {
  getRaceCarById: (data: IGetRaceCarByIdDTO) => Promise<RaceCar>
}

export interface IGetRaceCarsSearch {
  getRaceCarsSearch: (data: IGetRaceCarsSearchDTO) => Promise<RaceCar[]>
}

export interface IGetAllRaceCars {
  getAllRaceCars: () => Promise<RaceCar>
}
