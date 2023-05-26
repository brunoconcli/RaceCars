"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = joinModularValues;
function joinModularValues(data, includeKey = true, keySeparator = " = ") {
  const values = [];
  for (const key in data) if (data[key]) values.push(`${includeKey ? `${key} ${keySeparator} ` : ""}${typeof data[key] !== "number" ? `'${data[key]}'` : `${data[key]}`}`);
  return values;
}