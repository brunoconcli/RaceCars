"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetDefaultValueRule = void 0;
class SetDefaultValueRule {
  constructor(fieldName, valueDefault) {
    this.fieldName = fieldName;
    this.valueDefault = valueDefault;
  }
  handle(data) {
    if (!data[this.fieldName]) data[this.fieldName] = this.valueDefault;
  }
}
exports.SetDefaultValueRule = SetDefaultValueRule;