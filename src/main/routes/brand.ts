import { BrandRepository } from "@infra/repositories"
import { adaptControllerExpress } from "@main/adapters/express/controller-adapter"
import {
  CreateBrandController,
  GetBrandByIdController,
  GetAllBrandsController,
  GetBrandsSearchController,
} from "@pre/controllers"
import { DeleteBrandController } from "@pre/controllers/brand/delete"
import { UpdateBrandController } from "@pre/controllers/brand/update"
import { NumberConvert } from "@pre/convert"
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
  "/",
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
  "/:id",
  adaptControllerExpress(
    new UpdateBrandController(
      new UpdateBrand(brandRepository, brandRepository),
      new CompositeValidation([
        new TypeFieldVerification("name", "string"),
        new TypeFieldVerification("country", "string"),
        new TypeFieldVerification("inauguratedIn", "number"),
      ]),
      new ParseToTypeRule("id", new NumberConvert()),
      new RequiredAndTypeFieldValidation("id", "number")
    )
  )
)
routes.delete(
  "/:id",
  adaptControllerExpress(
    new DeleteBrandController(
      new DeleteBrand(brandRepository, brandRepository),
      new ParseToTypeRule("id", new NumberConvert())
    )
  )
)

const getBrand = new GetBrand(brandRepository, brandRepository, brandRepository)
routes.get("/", adaptControllerExpress(new GetAllBrandsController(getBrand)))
routes.get(
  "/search",
  adaptControllerExpress(
    new GetBrandsSearchController(
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
    new GetBrandByIdController(
      getBrand,
      new RequiredAndTypeFieldValidation("id")
    )
  )
)

export default routes
