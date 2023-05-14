import {
  type IMiddleware,
  type IRequest,
  type IResponse,
} from "@app/ports/presentation"

export class LogMiddleware implements IMiddleware {
  handle(req: IRequest, next: () => void): IResponse | any {
    console.time("duration")
    console.log("Initiating " + req.method + " request on " + req.url)

    next()

    console.log("Finished " + req.method + " request on " + req.url)
    console.timeEnd("duration")
  }
}
