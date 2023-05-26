"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _middlewareAdapter = require("./middleware-adapter");
Object.keys(_middlewareAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _middlewareAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _middlewareAdapter[key];
    }
  });
});
var _responseAdapter = require("./response-adapter");
Object.keys(_responseAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _responseAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _responseAdapter[key];
    }
  });
});