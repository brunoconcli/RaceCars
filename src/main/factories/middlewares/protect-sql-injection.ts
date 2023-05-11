import mysql from "mysql2"

import { type IRequest, type IMiddleware } from "@app/ports/presentation"

export class ProtectSQLInjectionMiddleware implements IMiddleware {
  handle(req: IRequest, next: () => void): any {
    const { query, body, params } = req

    for (const key in params) params[key] = mysql.escape(params[key])
    for (const key in body) body[key] = mysql.escape(body[key])
    for (const key in query) query[key] = mysql.escape(query[key])

    next()
  }
}
