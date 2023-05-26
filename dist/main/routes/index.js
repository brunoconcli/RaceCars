"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _adapters = require("../adapters");
var _express = require("express");
var _errors = require("../../app/errors");
var _brand = _interopRequireDefault(require("./brand"));
var _raceCar = _interopRequireDefault(require("./raceCar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.use(["/brand", "/brands"], _brand.default);
routes.use(["/race-car", "/race-cars"], _raceCar.default);
routes.use("*", (req, res) => {
  (0, _adapters.adaptResponseExpress)(new _errors.CommunicateDTO(_errors.ECommunicateCode.InA, 500, `the path '${req.originalUrl}' does not exist in this api`).getObjectResponse())(res);
});
var _default = routes;
exports.default = _default;