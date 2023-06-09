import { type Brand } from "@core/entities"

export interface IUpdateBrandRepository {
  update: (id: Brand["id"], data: Partial<Omit<Brand, "id">>) => Promise<Brand>
}
