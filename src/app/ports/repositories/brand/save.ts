import { Brand } from "@core/entities"

export interface ISaveBrandRepository {
  save: (data: Omit<Brand, "id">) => Promise<void>
}
