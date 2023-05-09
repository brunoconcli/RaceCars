import {
  type IMiddleware,
  type IRequest,
  type IResponse,
} from "@app/ports/presentation"

export class LogMiddleware implements IMiddleware {
  handle(req: IRequest, next: () => void): IResponse | any {
    console.time("duration")
    console.log(
      "Iniciou  o processamento da requisição " + req.method + " em " + req.url
    )

    next()

    console.log(
      "Terminou o processamento da requisição " + req.method + " em " + req.url
    )
    console.timeEnd("duration")
  }
}
