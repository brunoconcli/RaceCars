import { adaptResponseExpress } from "@main/adapters"
import { Router } from "express"

import { CommunicateDTO, ECommunicateCode } from "@app/errors"

import brand from "./brand"
import raceCar from "./race-car"

const routes = Router()

routes.use(["/brand", "/brands"], brand)
routes.use(["/race-car", "/race-cars"], raceCar)

routes.use("*", (req, res) => {
  adaptResponseExpress(
    new CommunicateDTO(
      ECommunicateCode.InA,
      500,
      `the path '${req.originalUrl}' does not exist in this api`
    ).getObjectResponse()
  )(res)
})
export default routes
