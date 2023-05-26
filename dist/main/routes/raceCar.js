"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _raceCar = require("../../infrastructure/repositories/mysql/race-car");
var _controllerAdapter = require("../adapters/express/controller-adapter");
var _controllers = require("../../presentation/controllers");
var _convert = require("../../presentation/convert");
var _rule = require("../../presentation/rule");
var _composite = require("../../presentation/rule/composite");
var _validation = require("../../presentation/validation");
var _express = require("express");
var _useCases = require("../../app/use-cases");
const routes = (0, _express.Router)();
const raceCarRepository = new _raceCar.RaceCarRepository();
routes.post("/", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.CreateRaceCarController(new _useCases.CreateRaceCar(raceCarRepository, raceCarRepository), new _validation.CompositeValidation([new _validation.RequiredAndTypeFieldValidation("name", "string"), new _validation.RequiredAndTypeFieldValidation("brandId", "number"), new _validation.RequiredAndTypeFieldValidation("color", "string"), new _validation.RequiredAndTypeFieldValidation("year", "number"), new _validation.RequiredAndTypeFieldValidation("price", "number"), new _validation.RequiredAndTypeFieldValidation("imageURL", "string")]))));
routes.put("/:id", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.UpdateRaceCarController(new _useCases.UpdateRaceCar(raceCarRepository, raceCarRepository), new _validation.CompositeValidation([new _validation.TypeFieldVerification("name", "string"), new _validation.TypeFieldVerification("brandId", "number"), new _validation.TypeFieldVerification("color", "string"), new _validation.TypeFieldVerification("year", "number"), new _validation.TypeFieldVerification("price", "number"), new _validation.TypeFieldVerification("imageURL", "string")]), new _validation.RequiredAndTypeFieldValidation("id", "number"), new _rule.ParseToTypeRule("id", new _convert.NumberConvert()))));
routes.delete("/:id", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.DeleteRaceCarController(new _useCases.DeleteRaceCar(raceCarRepository, raceCarRepository), new _rule.ParseToTypeRule("id", new _convert.NumberConvert()))));
const getRaceCar = new _useCases.GetRaceCar(raceCarRepository, raceCarRepository, raceCarRepository);
routes.get("/", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.GetAllRaceCarsController(getRaceCar)));
routes.get("/search", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.GetRaceCarsSearchController(getRaceCar, new _composite.CompositeRule([new _rule.SetDefaultValueRule("filter", {
  order: "ASC",
  page: 1,
  limit: 10
})]), new _validation.CompositeValidation([new _validation.RequiredAndTypeFieldValidation("filter", "object"), new _validation.RequiredAndTypeFieldValidation("filter.page", "number"), new _validation.RequiredAndTypeFieldValidation("filter.limit", "number"), new _validation.RequiredAndTypeFieldValidation("filter.order", "string"), new _validation.DefaultValueValidation("filter.order", ["ASC", "DESC"]), new _validation.TypeFieldVerification("name", "string"), new _validation.TypeFieldVerification("brandId", "number"), new _validation.TypeFieldVerification("color", "string"), new _validation.TypeFieldVerification("year", "number"), new _validation.TypeFieldVerification("priceMax", "number"), new _validation.TypeFieldVerification("priceMin", "number")]))));
routes.get("/:id", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.GetRaceCarByIdController(new _useCases.GetRaceCar(raceCarRepository, raceCarRepository, raceCarRepository), new _validation.RequiredAndTypeFieldValidation("id"))));
var _default = routes;
exports.default = _default;