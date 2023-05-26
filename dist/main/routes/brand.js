"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _repositories = require("../../infrastructure/repositories");
var _controllerAdapter = require("../adapters/express/controller-adapter");
var _controllers = require("../../presentation/controllers");
var _delete = require("../../presentation/controllers/brand/delete");
var _update = require("../../presentation/controllers/brand/update");
var _convert = require("../../presentation/convert");
var _rule = require("../../presentation/rule");
var _composite = require("../../presentation/rule/composite");
var _validation = require("../../presentation/validation");
var _express = require("express");
var _brand = require("../../app/use-cases/brand");
var _UpdateBrand = require("../../app/use-cases/brand/UpdateBrand");
const routes = (0, _express.Router)();
const brandRepository = new _repositories.BrandRepository();
routes.post("/", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.CreateBrandController(new _brand.CreateBrand(brandRepository, brandRepository), new _validation.CompositeValidation([new _validation.RequiredAndTypeFieldValidation("name", "string"), new _validation.RequiredAndTypeFieldValidation("country", "string"), new _validation.RequiredAndTypeFieldValidation("inauguratedIn", "number")]))));
routes.put("/:id", (0, _controllerAdapter.adaptControllerExpress)(new _update.UpdateBrandController(new _UpdateBrand.UpdateBrand(brandRepository, brandRepository), new _validation.CompositeValidation([new _validation.TypeFieldVerification("name", "string"), new _validation.TypeFieldVerification("country", "string"), new _validation.TypeFieldVerification("inauguratedIn", "number")]), new _rule.ParseToTypeRule("id", new _convert.NumberConvert()), new _validation.RequiredAndTypeFieldValidation("id", "number"))));
routes.delete("/:id", (0, _controllerAdapter.adaptControllerExpress)(new _delete.DeleteBrandController(new _brand.DeleteBrand(brandRepository, brandRepository), new _rule.ParseToTypeRule("id", new _convert.NumberConvert()))));
const getBrand = new _brand.GetBrand(brandRepository, brandRepository, brandRepository);
routes.get("/", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.GetAllBrandsController(getBrand)));
routes.get("/search", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.GetBrandsSearchController(getBrand, new _composite.CompositeRule([new _rule.SetDefaultValueRule("filter", {
  page: 1,
  limit: 10,
  order: "ASC"
})]), new _validation.CompositeValidation([new _validation.RequiredAndTypeFieldValidation("filter", "object"), new _validation.RequiredAndTypeFieldValidation("filter.page", "number"), new _validation.RequiredAndTypeFieldValidation("filter.limit", "number"), new _validation.RequiredAndTypeFieldValidation("filter.order", "string"), new _validation.DefaultValueValidation("filter.order", ["ASC", "DESC"]), new _validation.TypeFieldVerification("name", "string"), new _validation.TypeFieldVerification("inauguratedIn", "number"), new _validation.TypeFieldVerification("country", "string")]))));
routes.get("/:id", (0, _controllerAdapter.adaptControllerExpress)(new _controllers.GetBrandByIdController(getBrand, new _validation.RequiredAndTypeFieldValidation("id"))));
var _default = routes;
exports.default = _default;