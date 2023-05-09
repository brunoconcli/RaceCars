import { getConnection } from "@infra/providers"
import cors from "cors"
import express from "express"

import { adaptMiddlewareExpress } from "./adapters"
import { LogMiddleware } from "./factories/middlewares"
import routes from "./routes"

async function initializeServer(): Promise<void> {
  await getConnection()
    .then(() => {
      console.log("Database is running")
    })
    .catch((error) => {
      console.log(error)
    })

  const app = express()

  app.use(cors())
  app.use(express.json())

  app.use(adaptMiddlewareExpress(new LogMiddleware()))
  app.use(routes)

  app.listen(3030, () => {
    console.log("Server is running")
  })
}

void initializeServer()
