import { getConnection } from "@infra/providers"

import { setUpApp } from "./configuration/app-configuration"

async function initializeServer(): Promise<void> {
  await getConnection()
    .then(() => {
      console.log("Database is running")
    })
    .catch((error) => {
      console.log(error)
    })

  const app = setUpApp()

  app.listen(3030, () => {
    console.log("Server is running")
  })
}

void initializeServer()
