"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _communicate = require("./communicate");
Object.keys(_communicate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _communicate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _communicate[key];
    }
  });
});
var _ECommunicateCode = require("./ECommunicateCode");
Object.keys(_ECommunicateCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ECommunicateCode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ECommunicateCode[key];
    }
  });
});
var _ICommunicateDTO = require("./ICommunicateDTO");
Object.keys(_ICommunicateDTO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICommunicateDTO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICommunicateDTO[key];
    }
  });
});
var _missingParameter = require("./missing-parameter");
Object.keys(_missingParameter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _missingParameter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _missingParameter[key];
    }
  });
});
var _incorrectTypeParamter = require("./incorrect-type-paramter");
Object.keys(_incorrectTypeParamter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _incorrectTypeParamter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _incorrectTypeParamter[key];
    }
  });
});