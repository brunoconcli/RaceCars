"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _mysqlConnection = require("./mysql-connection");
Object.keys(_mysqlConnection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mysqlConnection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mysqlConnection[key];
    }
  });
});