import { type Brand } from "@core/entities"
import { getConnection } from "@infra/providers/mysql-connection"

import {
  type IBrandRepository,
  type IFindSearchBrandRepositoryDTO,
} from "@app/ports/repositories"

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
    })[0]
  }

  async update(id: number, data: Partial<Omit<Brand, "id">>): Promise<Brand> {
    const connection = await getConnection()
    const query =
      "UPDATE Brand SET " + joinModularValues(data).join(", ") + " WHERE id = ?"

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

  async findSearch(data: IFindSearchBrandRepositoryDTO): Promise<Brand[]> {
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
      add.push("inauguratedIn = " + data.inauguratedIn.join(" OR "))

    query += add.join(" AND ")

    console.log(query)

    return await connection
      .query(query)
      .then((results) => results[0] as Brand[])
      .catch(() => {
        throw new Error("Error on find search brands")
      })
  }
}
