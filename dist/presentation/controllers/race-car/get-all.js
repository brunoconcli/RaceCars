"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllRaceCarsController = void 0;
var _utils = require("../../utils");
class GetAllRaceCarsController {
  constructor(useCase) {
    this.useCase = useCase;
  }
  async handle() {
    try {
      return {
        statusCode: 200,
        body: await this.useCase.getAllRaceCars()
      };
    } catch (error) {
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.GetAllRaceCarsController = GetAllRaceCarsController;