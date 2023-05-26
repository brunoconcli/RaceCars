"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsMiddleware = void 0;
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const corsMiddleware = (0, _cors.default)({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
});
exports.corsMiddleware = corsMiddleware;