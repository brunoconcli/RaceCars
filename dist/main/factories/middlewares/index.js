"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _log = require("./log");
Object.keys(_log).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _log[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _log[key];
    }
  });
});
var _json = require("./json");
Object.keys(_json).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _json[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _json[key];
    }
  });
});
var _cors = require("./cors");
Object.keys(_cors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cors[key];
    }
  });
});
var _contentType = require("./content-type");
Object.keys(_contentType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _contentType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _contentType[key];
    }
  });
});
var _protectSqlInjection = require("./protect-sql-injection");
Object.keys(_protectSqlInjection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _protectSqlInjection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _protectSqlInjection[key];
    }
  });
});