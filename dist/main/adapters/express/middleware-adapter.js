"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptMiddlewareExpress = adaptMiddlewareExpress;
var _ = require(".");
function adaptMiddlewareExpress(middleware) {
  return async (req, res, next) => {
    const response = middleware.handle(req, next);
    typeof response === "object" && (0, _.adaptResponseExpress)(response)(res);
  };
}