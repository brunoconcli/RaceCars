import { BrandRepository } from "@infra/repositories"
import { adaptControllerExpress } from "@main/adapters/express/controller-adapter"
import { CreateBrandController } from "@pre/controllers"
import {
  CompositeValidation,
  RequiredAndTypeFieldValidation,
} from "@pre/validation"
import { Router } from "express"

import { CreateBrand } from "@app/use-cases/brand"

const routes = Router()

routes.post(
  "/create",
  adaptControllerExpress(
    new CreateBrandController(
      new CreateBrand(new BrandRepository(), new BrandRepository()),
      new CompositeValidation([
        new RequiredAndTypeFieldValidation("name", "string"),
        new RequiredAndTypeFieldValidation("country", "string"),
        new RequiredAndTypeFieldValidation("inauguratedIn", "number"),
      ])
    )
  )
)

export default routes
