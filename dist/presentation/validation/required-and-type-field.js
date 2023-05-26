"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequiredAndTypeFieldValidation = void 0;
var _utils = require("../utils");
var _errors = require("../../app/errors");
var _typeField = require("./type-field");
class RequiredAndTypeFieldValidation {
  constructor(fieldName, type) {
    this.fieldName = fieldName;
    this.type = type;
  }
  validate(data) {
    const utilsFieldName = new _utils.UtilsFieldName(this.fieldName, data);
    if (!utilsFieldName.validateExistFieldName()) return (0, _errors.missingParameterError)(this.fieldName);
    if (this.type) return new _typeField.TypeFieldVerification(this.fieldName, this.type, utilsFieldName).validate(data);
  }
}
exports.RequiredAndTypeFieldValidation = RequiredAndTypeFieldValidation;