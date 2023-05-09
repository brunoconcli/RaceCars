import express, { type Express } from "express"

import { setUpMiddleware, setUpRoutes } from "."

export function setUpApp(): Express {
  const app = express()

  setUpMiddleware(app)
  setUpRoutes(app)

  return app
}
