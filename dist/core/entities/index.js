"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _RaceCar = require("./RaceCar");
Object.keys(_RaceCar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RaceCar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RaceCar[key];
    }
  });
});
var _Brand = require("./Brand");
Object.keys(_Brand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Brand[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Brand[key];
    }
  });
});