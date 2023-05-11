export interface IRequest {
  hourRequest?: Date
  body?: any
  params?: any
  query?: any
  headers?: any
  method: string
  url: string
  ip: string
}
