// import { type RaceCar } from "@core/entities"
// import { getConnection } from "@infra/providers/mysql-connection"

// import {
//   type IRaceCarRepository,
//   type IFindSearchRaceCarRepositoryDTO,
// } from "@app/ports/repositories"

// import joinModularValues from "./join-modular-values"

// export class RaceCar implements IRaceCarRepository {
//   async findAll(): Promise<RaceCar[]> {
//     const connection = await getConnection()
//     return await connection
//       .execute("SELECT * FROM RaceCar")
//       .then((results) =>results[0] as RaceCar[])
//       .catch(() => {
//         throw new Error("Error in findind all Race cars")
//       })
//   }
//   async findById(data:)
// }
