"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUpApp = setUpApp;
var _express = _interopRequireDefault(require("express"));
var _ = require(".");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function setUpApp() {
  const app = (0, _express.default)();
  (0, _.setUpMiddleware)(app);
  (0, _.setUpRoutes)(app);
  return app;
}