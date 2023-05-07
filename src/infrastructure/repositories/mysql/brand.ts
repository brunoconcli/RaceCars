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
    await connection.execute("DELETE FROM Brand WHERE id = ?", [id])
  }

  async save(data: Omit<Brand, "id">): Promise<void> {
    const connection = await getConnection()
    const query = "INSERT INTO Brand VALUES (" + joinModularValues(data) + ")"
    await connection.execute(query)
  }

  async update(id: number, data: Partial<Omit<Brand, "id">>): Promise<void> {
    const connection = await getConnection()
    const query =
      "UPDATE Brand SET " + joinModularValues(data) + " WHERE id = ?"

    await connection.execute(query, [id])
  }

  async findAll(): Promise<Brand[]> {
    const connection = await getConnection()
    await connection.execute("SELECT * FROM Brand", (err, results) => {
      if (err) throw new Error("Error on find all brands")

      return results as Brand[]
    })
    return []
  }

  async findById(id: number): Promise<Brand> {
    const connection = await getConnection()
    await connection.query("SELECT * FROM Brand WHERE id = ?", [id])
    return null
  }

  async findSearch(data: IFindSearchBrandRepositoryDTO): Promise<Brand[]> {
    const connection = await getConnection()
    const query = "SELECT * FROM Brand WHERE " + joinModularValues(data)
    await connection.query(query, (err, results) => {
      if (err) throw new Error("Error on find search brands")

      return results as Brand[]
    })
    return []
  }
}
