"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParseToTypeRule = void 0;
class ParseToTypeRule {
  constructor(fieldName, convert) {
    this.fieldName = fieldName;
    this.convert = convert;
  }
  handle(data) {
    data[this.fieldName] = this.convert.handle(data[this.fieldName]);
  }
}
exports.ParseToTypeRule = ParseToTypeRule;