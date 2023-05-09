export interface IRequest {
  hourRequest?: Date
  body?: any
  parameters?: any
  query?: any
  headers?: any
  method: string
  url: string
  ip: string
}
