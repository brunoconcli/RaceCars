"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UtilsFieldName = void 0;
class UtilsFieldName {
  gerated = false;
  constructor(fieldName, data) {
    this.fieldName = fieldName;
    this.data = data;
    this.outherData = data;
  }
  validateExistFieldName() {
    const keys = this.fieldName.split(".");
    if (!this.gerated) {
      this.outherData = this.data;
      this.gerated = true;
      keys.map(e => {
        this.outherData = this.outherData[e];
        return this.outherData;
      });
    }
    return keys.length < 2 && this.data[this.fieldName] || this.outherData !== undefined;
  }
  getDataType() {
    if (!this.validateExistFieldName()) return "undefined";
    return typeof this.outherData;
  }
  getData() {
    if (!this.validateExistFieldName()) return undefined;
    return this.outherData;
  }
}
exports.UtilsFieldName = UtilsFieldName;