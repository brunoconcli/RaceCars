import { Router } from "express"

import brand from "./brand"
import raceCar from "./raceCar"

const routes = Router()

routes.use(["/brand", "/brands"], brand)
routes.use(["/raceCar", "/raceCars"], raceCar)

export default routes
