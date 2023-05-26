"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _brand = require("./brand");
Object.keys(_brand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _brand[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _brand[key];
    }
  });
});
var _raceCar = require("./race-car");
Object.keys(_raceCar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _raceCar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _raceCar[key];
    }
  });
});