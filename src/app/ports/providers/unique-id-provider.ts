export interface IUniqueIdProvider {
  generate: () => Promise<string>
}
