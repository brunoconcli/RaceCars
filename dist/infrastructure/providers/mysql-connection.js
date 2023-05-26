"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
var _configuration = require("../../main/configuration");
var _promise = _interopRequireDefault(require("mysql2/promise"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let connection;
async function getConnection() {
  if (!connection) return connection = await connect();
  return connection;
}
async function connect() {
  return await _promise.default.createConnection(_configuration.credentialDB).then(connection => connection).catch(() => {
    throw new Error("Error to connect database");
  });
}