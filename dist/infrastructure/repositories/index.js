"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _mysql = require("./mysql");
Object.keys(_mysql).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mysql[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mysql[key];
    }
  });
});