"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _crendentialDb = require("./crendential-db");
Object.keys(_crendentialDb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _crendentialDb[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _crendentialDb[key];
    }
  });
});
var _appConfiguration = require("./app-configuration");
Object.keys(_appConfiguration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _appConfiguration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _appConfiguration[key];
    }
  });
});
var _middlewaresConfiguration = require("./middlewares-configuration");
Object.keys(_middlewaresConfiguration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _middlewaresConfiguration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _middlewaresConfiguration[key];
    }
  });
});
var _routesConfigutration = require("./routes-configutration");
Object.keys(_routesConfigutration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _routesConfigutration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _routesConfigutration[key];
    }
  });
});