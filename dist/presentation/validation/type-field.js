"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeFieldVerification = void 0;
var _utils = require("../utils");
var _errors = require("../../app/errors");
/* eslint-disable valid-typeof */

class TypeFieldVerification {
  constructor(fieldName, type, utilsFieldName) {
    this.fieldName = fieldName;
    this.type = type;
    this.utilsFieldName = utilsFieldName;
  }
  validate(data) {
    if (!this.utilsFieldName) this.utilsFieldName = new _utils.UtilsFieldName(this.fieldName, data);
    if (this.utilsFieldName.validateExistFieldName()) if (this.utilsFieldName.getDataType() !== this.type) return (0, _errors.IncorrectTypeError)(this.fieldName);
  }
}
exports.TypeFieldVerification = TypeFieldVerification;