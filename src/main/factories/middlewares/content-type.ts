import { type IRequest, type IMiddleware } from "@app/ports/presentation"

export class ContentTypeMiddleware implements IMiddleware {
  handle(request: IRequest, next: () => void): any {
    if (request.headers["content-type"] !== "application/json")
      request.headers["content-type"] = "application/json"

    next()
  }
}
