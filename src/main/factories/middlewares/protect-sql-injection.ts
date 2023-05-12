import { type IRequest, type IMiddleware } from "@app/ports/presentation"

export class ProtectSQLInjectionMiddleware implements IMiddleware {
  handle(req: IRequest, next: () => void): any {
    next()
  }
}
