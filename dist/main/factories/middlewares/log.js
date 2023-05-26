"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogMiddleware = void 0;
class LogMiddleware {
  handle(req, next) {
    console.time("duration");
    console.log("Initiating " + req.method + " request on " + req.url);
    next();
    console.log("Finished " + req.method + " request on " + req.url);
    console.timeEnd("duration");
  }
}
exports.LogMiddleware = LogMiddleware;