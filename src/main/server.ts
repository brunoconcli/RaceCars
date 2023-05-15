import { getConnection } from "@infra/providers"

import { setUpApp } from "./configuration/app-configuration"

async function initializeServer(): Promise<void> {
  console.time("start_server")
  await getConnection()
    .then(() => {
      console.log("Database is running")
    })
    .catch((error) => {
      console.log("Error in start database:", error)
    })

  const app = setUpApp()

  app.listen(3030, () => {
    console.timeLog("start_server")
  })
}

void initializeServer()
