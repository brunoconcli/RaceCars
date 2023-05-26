"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _create = require("./create");
Object.keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _create[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _create[key];
    }
  });
});
var _delete = require("./delete");
Object.keys(_delete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _delete[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delete[key];
    }
  });
});
var _getAll = require("./get-all");
Object.keys(_getAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getAll[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getAll[key];
    }
  });
});
var _getById = require("./get-by-id");
Object.keys(_getById).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getById[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getById[key];
    }
  });
});
var _getSearch = require("./get-search");
Object.keys(_getSearch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getSearch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getSearch[key];
    }
  });
});
var _update = require("./update");
Object.keys(_update).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _update[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _update[key];
    }
  });
});