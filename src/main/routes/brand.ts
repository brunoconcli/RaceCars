import { BrandRepository } from "@infra/repositories"
import { adaptControllerExpress } from "@main/adapters/express/controller-adapter"
import {
  CreateBrandController,
  GetByIdController,
  GetAllController,
  GetSearchController,
} from "@pre/controllers"
import { DeleteBrandController } from "@pre/controllers/brand/delete"
import { UpdateController } from "@pre/controllers/brand/update"
import { ParseToTypeRule, SetDefaultValueRule } from "@pre/rule"
import { CompositeRule } from "@pre/rule/composite"
import {
  CompositeValidation,
  TypeFieldVerification,
  DefaultValueValidation,
  RequiredAndTypeFieldValidation,
} from "@pre/validation"
import { Router } from "express"

import { CreateBrand, DeleteBrand, GetBrand } from "@app/use-cases/brand"
import { UpdateBrand } from "@app/use-cases/brand/UpdateBrand"


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
routes.put(
  "/update/:id",
  adaptControllerExpress(
    new UpdateController(
      new UpdateBrand(brandRepository, brandRepository),
      new CompositeValidation([
        new TypeFieldVerification("name", "string"),
        new TypeFieldVerification("country", "string"),
        new TypeFieldVerification("inauguratedIn", "number"),
      ]),
      new ParseToTypeRule<number>("id"),
      new RequiredAndTypeFieldValidation("id", "number")
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

const getBrand = new GetBrand(brandRepository, brandRepository, brandRepository)
routes.get("/", adaptControllerExpress(new GetAllController(getBrand)))
routes.get(
  "/search",
  adaptControllerExpress(
    new GetSearchController(
      getBrand,
      new CompositeRule([
        new SetDefaultValueRule("filter", {
          page: 1,
          limit: 10,
          order: "ASC",
        }),
      ]),
      new CompositeValidation([
        new RequiredAndTypeFieldValidation("filter", "object"),
        new RequiredAndTypeFieldValidation("filter.page", "number"),
        new RequiredAndTypeFieldValidation("filter.limit", "number"),
        new RequiredAndTypeFieldValidation("filter.order", "string"),
        new DefaultValueValidation("filter.order", ["ASC", "DESC"]),
        new TypeFieldVerification("name", "string"),
        new TypeFieldVerification("inauguratedIn", "number"),
        new TypeFieldVerification("country", "string"),
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
