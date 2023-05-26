"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtectSQLInjectionMiddleware = void 0;
class ProtectSQLInjectionMiddleware {
  handle(req, next) {
    next();
  }
}
exports.ProtectSQLInjectionMiddleware = ProtectSQLInjectionMiddleware;