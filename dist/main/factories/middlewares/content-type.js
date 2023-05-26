"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentTypeMiddleware = void 0;
class ContentTypeMiddleware {
  handle(request, next) {
    if (request.headers["content-type"] !== "application/json") request.headers["content-type"] = "application/json";
    next();
  }
}
exports.ContentTypeMiddleware = ContentTypeMiddleware;