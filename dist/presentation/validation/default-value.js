"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultValueValidation = void 0;
var _utils = require("../utils");
var _errors = require("../../app/errors");
class DefaultValueValidation {
  constructor(fieldName, defaultValues) {
    this.fieldName = fieldName;
    this.defaultValues = defaultValues;
  }
  validate(data) {
    const utilsFieldNames = new _utils.UtilsFieldName(this.fieldName, data);
    if (utilsFieldNames.validateExistFieldName()) if (!this.defaultValues.includes(utilsFieldNames.getData())) return (0, _errors.IncorrectTypeError)(this.fieldName);
  }
}
exports.DefaultValueValidation = DefaultValueValidation;