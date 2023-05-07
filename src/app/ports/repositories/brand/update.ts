import { Brand } from "@core/entities"

export interface IUpdateBandRepository {
  update: (id: Brand["id"], data: Partial<Omit<Brand, "id">>) => Promise<Brand>
}
