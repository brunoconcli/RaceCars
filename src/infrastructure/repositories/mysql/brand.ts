import { type Brand } from "@core/entities"
import { type IGetBrandsSearchDTO } from "@core/use-cases"
import { getConnection } from "@infra/providers/mysql-connection"

import { type IBrandRepository } from "@app/ports/repositories"

import joinModularValues from "./join-modular-values"

export class BrandRepository implements IBrandRepository {
  async delete(id: number): Promise<void> {
    const connection = await getConnection()
    await connection
      .execute("DELETE FROM Brand WHERE id = ?", [id])
      .then(() => {})
      .catch(() => {
        throw new Error("Error on delete brand")
      })
  }

  async save(data: Omit<Brand, "id">): Promise<Brand> {
    if (
      (
        await this.findSearch({
          country: data.country,
          name: data.name,
          inauguratedIn: [data.inauguratedIn],
          filter: {
            order: "ASC",
            limit: 1,
            page: 1,
          },
        })
      ).length > 0
    )
      throw new Error("Brand already exists")

    const connection = await getConnection()
    await connection.execute(
      "INSERT INTO Brand (name, country, inauguratedIn) VALUES (?, ?, ?)",
      [data.name, data.country, data.inauguratedIn]
    )

    return await this.findSearch({
      country: data.country,
      name: data.name,
      inauguratedIn: [data.inauguratedIn],
      filter: {
        order: "ASC",
        limit: 1,
        page: 1,
      },
    }).then((results) => results[0])
  }

  async update(id: number, data: Partial<Omit<Brand, "id">>): Promise<Brand> {
    const connection = await getConnection()
    if (!data.country && !data.name && !data.inauguratedIn)
      throw new Error("Invalid data")
    let query = "UPDATE Brand SET "

    const add = [...joinModularValues(data)]

    if (add.length < 0) throw new Error("Invalid data")

    query += add.join(", ") + " WHERE id = ?"

    await connection.execute(query, [id])

    return await this.findById(id)
  }

  async findAll(): Promise<Brand[]> {
    const connection = await getConnection()
    return await connection
      .execute("SELECT * FROM Brand")
      .then((results) => results[0] as Brand[])
      .catch(() => {
        throw new Error("Error in finding all brands")
      })
  }

  async findById(id: number): Promise<Brand> {
    const connection = await getConnection()
    return await connection
      .query("SELECT * FROM Brand WHERE id = ?", [id])
      .then((results) => results[0][0] as Brand)
      .catch(() => {
        throw new Error("Error on find brand by id")
      })
  }

  async findSearch(data: IGetBrandsSearchDTO): Promise<Brand[]> {
    const connection = await getConnection()
    let query =
      "SELECT * FROM Brand" +
      (!data.country && !data.inauguratedIn && !data.name ? "" : " WHERE ")
    const add = [
      ...joinModularValues(
        { country: data.country, name: data.name },
        true,
        " LIKE "
      ),
    ]

    if (data.inauguratedIn)
      add.push(`inauguratedIn = ${data.inauguratedIn.join(" OR ")}`)

    query +=
      add.join(" AND ") +
      ` ORDER BY name, country, inauguratedIn ${data.filter.order} LIMIT ${
        data.filter.limit
      } OFFSET ${(data.filter.page - 1) * data.filter.limit}`

    return await connection
      .query(query)
      .then((results) => results[0] as Brand[])
      .catch(() => {
        throw new Error("Error on find search brands")
      })
  }
}
