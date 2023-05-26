"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompositeValidation = void 0;
var _errors = require("../../app/errors");
class CompositeValidation {
  constructor(validations) {
    this.validations = validations;
  }
  validate(data) {
    for (const validation of this.validations) {
      const error = validation.validate(data);
      if (error instanceof _errors.CommunicateDTO) return error;
    }
  }
}
exports.CompositeValidation = CompositeValidation;