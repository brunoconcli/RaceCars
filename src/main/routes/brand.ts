import { BrandRepository } from "@infra/repositories"
import { adaptControllerExpress } from "@main/adapters/express/controller-adapter"
import {
  CreateBrandController,
  GetByIdController,
  GetAllController,
  GetSearchController,
} from "@pre/controllers"
import { DeleteBrandController } from "@pre/controllers/brand/delete"
import { ParseToTypeRule, SetDefaultValueRule } from "@pre/rule"
import { CompositeRule } from "@pre/rule/composite"
import {
  CompositeValidation,
  RequiredAndTypeFieldValidation,
} from "@pre/validation"
import { Router } from "express"

import { CreateBrand, DeleteBrand, GetBrand } from "@app/use-cases/brand"

const routes = Router()
const brandRepository = new BrandRepository()
routes.post(
  "/create",
  adaptControllerExpress(
    new CreateBrandController(
      new CreateBrand(brandRepository, brandRepository),
      new CompositeValidation([
        new RequiredAndTypeFieldValidation("name", "string"),
        new RequiredAndTypeFieldValidation("country", "string"),
        new RequiredAndTypeFieldValidation("inauguratedIn", "number"),
      ])
    )
  )
)
routes.delete(
  "/delete/:id",
  adaptControllerExpress(
    new DeleteBrandController(
      new DeleteBrand(brandRepository, brandRepository),
      new ParseToTypeRule<number>("id")
    )
  )
)

// GETERS
const getBrand = new GetBrand(brandRepository, brandRepository, brandRepository)
routes.get("/", adaptControllerExpress(new GetAllController(getBrand)))
routes.get(
  "/search",
  adaptControllerExpress(
    new GetSearchController(
      getBrand,
      new CompositeRule([
        new SetDefaultValueRule("filter", {
          offset: 0,
          limit: 10,
          order: "ASC",
        }),
      ])
    )
  )
)
routes.get(
  "/:id",
  adaptControllerExpress(
    new GetByIdController(getBrand, new RequiredAndTypeFieldValidation("id"))
  )
)

export default routes
