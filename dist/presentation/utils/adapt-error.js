"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdaptError = AdaptError;
var _errors = require("../../app/errors");
function AdaptError(error) {
  if (error instanceof _errors.CommunicateDTO) return error.getObjectResponse();
  return {
    statusCode: 500,
    body: {
      message: "Internal server error",
      type: _errors.ECommunicateCode.InE,
      date: new Date()
    }
  };
}