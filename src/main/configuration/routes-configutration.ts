import routes from "@main/routes"
import { type Express } from "express"

export function setUpRoutes(app: Express): void {
  app.use(routes)
}
