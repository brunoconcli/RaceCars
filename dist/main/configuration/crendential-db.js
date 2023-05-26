"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.credentialDB = void 0;
require("dotenv/config");
const credentialDB = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};
exports.credentialDB = credentialDB;