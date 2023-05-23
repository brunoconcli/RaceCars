import { type RaceCar } from "@core/entities"
import { type IGetRaceCarsSearchDTO } from "@core/use-cases"
import { getConnection } from "@infra/providers/mysql-connection"

import { type IRaceCarRepository } from "@app/ports/repositories"

import joinModularValues from "./join-modular-values"

export class RaceCarRepository implements IRaceCarRepository {
  async delete(id: number): Promise<void> {
    const connection = await getConnection()
    await connection
      .execute("DELETE * FROM RaceCar WHERE id = ?", [id])
      .then(() => {})
      .catch(() => {
        throw new Error("Error on delete race-car")
      })
  }

  async save(data: Omit<RaceCar, "id">): Promise<RaceCar> {
    if (
      await this.findSearch({
          name: data.name,
          brand: data.brandId,
          color: data.color,
          year: data.year,
          
        })
      )
    const connection = await getConnection()
    await connection.execute(
      "INSERT INTO RaceCar (name, brandId, color, year, price, imageURL) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.name,
        data.brandId,
        data.color,
        data.year,
        data.price,
        data.imageURL,
      ]
    )
    return await this.findSearch({
      name: data.name,
      brand: data.brandId,
      color: data.color,
      year: [data.year],
      filter: {
        limit: 0,
        page: 0,
        order: "ASC",
      },
    })[0]
  }

  async update(
    id: number,
    data: Partial<Omit<RaceCar, "id">>
  ): Promise<RaceCar> {
    const connection = await getConnection()
    const query =
      "UPDATE RaceCar SET " +
      joinModularValues(data).join(", ") +
      "WHERE id = ?"

    await connection.execute(query, [id])

    return await this.findById(id)
  }

  async findAll(): Promise<RaceCar[]> {
    const connection = await getConnection()
    return await connection
      .execute("SELECT * FROM RaceCar")
      .then((results) => results[0] as RaceCar[])
      .catch(() => {
        throw new Error("Error in findind all Race cars")
      })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
      (!data.name &&
      !data.brand &&
      !data.color &&
      !data.year &&
      !data.priceMax &&
      !data.priceMin
        ? ""
        : " WHERE ")
    const add = [
      ...joinModularValues(
        {
          name: data.name,
          brandId: data.brand,
          color: data.color,
          year: data.year,
        },
        true,
        " LIKE "
      ),
    ]

    if (data.priceMax) add.push(`price < ${data.priceMax}`)
    if (data.priceMin) add.push(`price > ${data.priceMin}`)

    console.log(data)

    query +=
      add.join(" AND ") +
      ` ORDER BY name, country, inauguratedIn ${data.filter.order} LIMIT ${
        data.filter.limit
      } OFFSET ${(data.filter.page - 1) * data.filter.limit}`

    console.log(query)

    return await connection
      .query(query)
      .then((results) => results[0] as RaceCar[])
      .catch(() => {
        throw new Error("Error on find search race-car")
      })
  }
}
