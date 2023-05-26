"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ICreateRaceCar = require("./ICreateRaceCar");
Object.keys(_ICreateRaceCar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICreateRaceCar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICreateRaceCar[key];
    }
  });
});
var _IDeleteRaceCar = require("./IDeleteRaceCar");
Object.keys(_IDeleteRaceCar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IDeleteRaceCar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IDeleteRaceCar[key];
    }
  });
});
var _IGetRaceCar = require("./IGetRaceCar");
Object.keys(_IGetRaceCar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IGetRaceCar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IGetRaceCar[key];
    }
  });
});
var _IUpdateRaceCar = require("./IUpdateRaceCar");
Object.keys(_IUpdateRaceCar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IUpdateRaceCar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IUpdateRaceCar[key];
    }
  });
});