"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptControllerExpress = adaptControllerExpress;
var _ = require("./");
function adaptControllerExpress(controller) {
  return async (req, res) => {
    (0, _.adaptResponseExpress)(await controller.handle(req))(res);
  };
}