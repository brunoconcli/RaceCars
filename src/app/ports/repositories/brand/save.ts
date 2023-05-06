import { Brand } from "@core/entities"

export interface ISaveBrandRepository {
  save: (data: Brand) => Promise<true>
}
