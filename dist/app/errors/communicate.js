"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunicateDTO = void 0;
class CommunicateDTO extends Error {
  constructor(type, code, message, data) {
    super();
    this.code = code;
    this.type = type;
    this.message = message;
    this.data = data;
    this.date = new Date();
  }
  getObject() {
    return {
      code: this.code,
      type: this.type,
      message: this.message,
      data: this.data,
      date: this.date
    };
  }
  getObjectResponse() {
    return {
      statusCode: this.code,
      body: {
        message: this.message,
        type: this.type,
        date: this.date,
        data: this.data
      }
    };
  }
}
exports.CommunicateDTO = CommunicateDTO;