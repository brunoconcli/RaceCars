import { IRequest, IResponse } from '.'

export interface IMiddleware {
  handle: (request: IRequest) => Promise<IResponse>
}
