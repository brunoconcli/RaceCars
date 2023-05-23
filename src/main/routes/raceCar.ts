import { RaceCarRepository } from "@infra/repositories/mysql/race-car"
import { adaptControllerExpress } from "@main/adapters/express/controller-adapter"
import {
  CreateRaceCarController,
  DeleteRaceCarController,
  GetAllRaceCarsController,
  GetRaceCarByIdController,
  GetRaceCarsSearchController,
  UpdateRaceCarController,
} from "@pre/controllers"
import { NumberConvert } from "@pre/convert"
import { ParseToTypeRule, SetDefaultValueRule } from "@pre/rule"
import { CompositeRule } from "@pre/rule/composite"
import {
  CompositeValidation,
  TypeFieldVerification,
  RequiredAndTypeFieldValidation,
  DefaultValueValidation,
} from "@pre/validation"
import { Router } from "express"

import {
  CreateRaceCar,
  DeleteRaceCar,
  GetRaceCar,
  UpdateRaceCar,
} from "@app/use-cases"

const routes = Router()
const raceCarRepository = new RaceCarRepository()
routes.post(
  "/",
  adaptControllerExpress(
    new CreateRaceCarController(
      new CreateRaceCar(raceCarRepository, raceCarRepository),
      new CompositeValidation([
        new RequiredAndTypeFieldValidation("name", "string"),
        new RequiredAndTypeFieldValidation("brandId", "number"),
        new RequiredAndTypeFieldValidation("color", "string"),
        new RequiredAndTypeFieldValidation("year", "number"),
        new RequiredAndTypeFieldValidation("price", "number"),
        new RequiredAndTypeFieldValidation("imageURL", "string"),
      ])
    )
  )
)
routes.put(
  "/:id",
  adaptControllerExpress(
    new UpdateRaceCarController(
      new UpdateRaceCar(raceCarRepository, raceCarRepository),
      new CompositeValidation([
        new TypeFieldVerification("name", "string"),
        new TypeFieldVerification("brandId", "number"),
        new TypeFieldVerification("color", "string"),
        new TypeFieldVerification("year", "number"),
        new TypeFieldVerification("price", "number"),
        new TypeFieldVerification("imageURL", "string"),
      ]),
      new RequiredAndTypeFieldValidation("id", "number"),
      new ParseToTypeRule("id", new NumberConvert())
    )
  )
)
routes.delete(
  "/:id",
  adaptControllerExpress(
    new DeleteRaceCarController(
      new DeleteRaceCar(raceCarRepository, raceCarRepository),
      new ParseToTypeRule("id", new NumberConvert())
    )
  )
)
const getRaceCar = new GetRaceCar(
  raceCarRepository,
  raceCarRepository,
  raceCarRepository
)
routes.get(
  "/",
  adaptControllerExpress(new GetAllRaceCarsController(getRaceCar))
)
routes.get(
  "/search",
  adaptControllerExpress(
    new GetRaceCarsSearchController(
      getRaceCar,
      new CompositeRule([
        new SetDefaultValueRule("filter", {
          order: "ASC",
          page: 1,
          limit: 10,
        }),
      ]),
      new CompositeValidation([
        new RequiredAndTypeFieldValidation("filter", "object"),
        new RequiredAndTypeFieldValidation("filter.page", "number"),
        new RequiredAndTypeFieldValidation("filter.limit", "number"),
        new RequiredAndTypeFieldValidation("filter.order", "string"),
        new DefaultValueValidation("filter.order", ["ASC", "DESC"]),
        new TypeFieldVerification("name", "string"),
        new TypeFieldVerification("brandId", "number"),
        new TypeFieldVerification("color", "string"),
        new TypeFieldVerification("year", "number"),
        new TypeFieldVerification("priceMax", "number"),
        new TypeFieldVerification("priceMin", "number"),
      ])
    )
  )
)
routes.get(
  "/:id",
  adaptControllerExpress(
    new GetRaceCarByIdController(
      new GetRaceCar(raceCarRepository, raceCarRepository, raceCarRepository),
      new RequiredAndTypeFieldValidation("id")
    )
  )
)

export default routes
