import { adaptMiddlewareExpress } from "@main/adapters"
import {
  jsonMiddleware,
  LogMiddleware,
  corsMiddleware,
} from "@main/factories/middlewares"
import { ContentTypeMiddleware } from "@main/factories/middlewares/content-type"
import { type Express } from "express"

export function setUpMiddleware(app: Express): void {
  app.use(adaptMiddlewareExpress(new LogMiddleware()))
  app.use(adaptMiddlewareExpress(new ContentTypeMiddleware()))
  app.use(jsonMiddleware)
  app.use(corsMiddleware)
}
