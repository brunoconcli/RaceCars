"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _express = require("./express");
Object.keys(_express).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _express[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _express[key];
    }
  });
});