import { Brand } from "@core/entities"

export interface IUpdateBandRepository {
  update: (id: Brand["id"], data: Partial<Brand>) => Promise<Brand>
}
