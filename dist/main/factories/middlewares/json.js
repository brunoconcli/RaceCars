"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonMiddleware = void 0;
var _express = require("express");
const jsonMiddleware = (0, _express.json)();
exports.jsonMiddleware = jsonMiddleware;