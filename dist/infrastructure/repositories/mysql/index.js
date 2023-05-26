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