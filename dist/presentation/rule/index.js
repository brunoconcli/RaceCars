"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _setDefaultValue = require("./set-default-value");
Object.keys(_setDefaultValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setDefaultValue[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setDefaultValue[key];
    }
  });
});
var _parseToType = require("./parse-to-type");
Object.keys(_parseToType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parseToType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseToType[key];
    }
  });
});