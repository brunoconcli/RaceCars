import { type RaceCar } from "@core/entities"
import { type IGetRaceCarsSearchDTO } from "@core/use-cases"
import { getConnection } from "@infra/providers/mysql-connection"

import {
  type IRaceCarRepository,
} from "@app/ports/repositories"

import joinModularValues from "./join-modular-values"

export class RaceCarRepository implements IRaceCarRepository {
  async delete(id: number): Promise<void> {
    const connection = await getConnection()
    await connection
      .execute("DELETE * FROM RaceCar WHERE id = ?", [id])
      .then(() => {})
      .catch(() => {
        throw new Error("Error on delete racecar")
      })
  }

  async save(data: Omit<RaceCar, "id">): Promise<RaceCar> {
    if (
      (await this.findSearch({
        name: data.name,
        brand: data.brandId,
        color: data.color,
        year: [data.year],
        filter: {
          order: "ASC",
          limit: 0,
          offset: 0
        }
      })).length > 0
    )
    throw new Error("Racecar already exists")
    const connection = await getConnection()
    await connection.execute(
      "INSERT INTO RaceCar (name, brand, color, year, price) VALUES (?, ?, ?, ?, ?, ?)",
      [data.name, data.brandId, data.color, data.year, data.price]
    )
    return await this.findSearch({
      name: data.name,
      brand: data.brandId,
      color: data.color,
      year: [data.year],
      filter: {
        order: "ASC",
        limit: 0,
        offset: 0
      }
    })[0]
  }

  async update(id: number, data: Partial<Omit<RaceCar, "id">>): Promise<RaceCar> {
    const connection = await getConnection()
    const query =
      "UPDATE RaceCar SET " + joinModularValues(data).join(", ") + "WHERE id = ?"

    await connection.execute(query, [id])

    return await this.findById(id)
  }

  async findAll(): Promise<RaceCar[]> {
    const connection = await getConnection()
    return await connection
      .execute("SELECT * FROM RaceCar")
      .then((results) =>results[0] as RaceCar[])
      .catch(() => {
        throw new Error("Error in findind all Race cars")
      })
  }

  async findById(id: number) {
    const connection = await getConnection()
    return await connection
    .query("SELECT * FROM RaceCar WHERE id = ?", [id])
    .then((results) => results[0][0] as RaceCar)
    .catch(() => {
        throw new Error("Error on finding racecar")
    })
  }

  async findSearch(data: IGetRaceCarsSearchDTO): Promise<RaceCar[]> {
    const connection = await getConnection()
    let query =
      "SELECT * FROM RaceCar" +
      (!data.name && !data.brand && !data.color && !data.year && !data.priceMax && !data.priceMin ? "" : " WHERE ")
      const add = [
        ...joinModularValues(
          { name: data.name, brandId: data.brand, color: data.color, year: data.year },
          true,
          " LIKE "
        ),
      ]

      if (data.priceMax)
        add.push(`price < ${data.priceMax}`)
      if(data.priceMin)
        add.push(`price > ${data.priceMin}`)

      query += add.join(" AND ")

      return await connection
        .query(query)
        .then((results) => results[0] as RaceCar[])
        .catch(() => {
          throw new Error ("Error on find search racecar")
        })

  }

}
