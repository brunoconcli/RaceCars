"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUpMiddleware = setUpMiddleware;
var _adapters = require("../adapters");
var _middlewares = require("../factories/middlewares");
function setUpMiddleware(app) {
  app.use(_middlewares.corsMiddleware);
  app.use(_middlewares.jsonMiddleware);
  app.use((0, _adapters.adaptMiddlewareExpress)(new _middlewares.ContentTypeMiddleware()));
  app.use((0, _adapters.adaptMiddlewareExpress)(new _middlewares.LogMiddleware()));
  app.use((0, _adapters.adaptMiddlewareExpress)(new _middlewares.ProtectSQLInjectionMiddleware()));
}