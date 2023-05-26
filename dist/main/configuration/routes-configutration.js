"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUpRoutes = setUpRoutes;
var _routes = _interopRequireDefault(require("../routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function setUpRoutes(app) {
  app.use(_routes.default);
}