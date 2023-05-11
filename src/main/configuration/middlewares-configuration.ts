import { adaptMiddlewareExpress } from "@main/adapters"
import {
  jsonMiddleware,
  LogMiddleware,
  corsMiddleware,
  ContentTypeMiddleware,
  ProtectSQLInjectionMiddleware,
} from "@main/factories/middlewares"
import { type Express } from "express"

export function setUpMiddleware(app: Express): void {
  app.use(corsMiddleware)
  app.use(jsonMiddleware)
  app.use(adaptMiddlewareExpress(new ContentTypeMiddleware()))
  app.use(adaptMiddlewareExpress(new LogMiddleware()))
  app.use(adaptMiddlewareExpress(new ProtectSQLInjectionMiddleware()))
}
