"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptResponseExpress = adaptResponseExpress;
function adaptResponseExpress(response) {
  return res => {
    response.body ? res.status(response.statusCode) : res.sendStatus(response.statusCode);
    typeof response.body === "object" && res.json(response.body);
    typeof response.body === "string" && res.send(response.body);
    return response;
  };
}