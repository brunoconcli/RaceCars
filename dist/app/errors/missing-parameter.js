"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.missingParameterError = missingParameterError;
var _ = require(".");
function missingParameterError(param) {
  return new _.CommunicateDTO(_.ECommunicateCode.InD, 400, "Missing parameter", `${param} attribute is missing`);
}