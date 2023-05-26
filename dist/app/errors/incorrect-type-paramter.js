"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncorrectTypeError = IncorrectTypeError;
var _ = require(".");
function IncorrectTypeError(param) {
  return new _.CommunicateDTO(_.ECommunicateCode.InD, 400, "Incorrect type", `The ${param} field was not filled in correctly`);
}