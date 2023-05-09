import { type IRequest, type IResponse } from "."

export interface IMiddleware {
  handle: (request: IRequest, next: () => void) => IResponse | any
}
