"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRaceCarController = void 0;
var _utils = require("../../utils");
class CreateRaceCarController {
  constructor(useCase, bodyValidate) {
    this.useCase = useCase;
    this.bodyValidate = bodyValidate;
  }
  async handle(req) {
    try {
      const error = this.bodyValidate.validate(req.body);
      if (error) throw error;
      return {
        statusCode: 201,
        body: {
          message: "Race car created successfully",
          data: await this.useCase.create(req.body)
        }
      };
    } catch (error) {
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.CreateRaceCarController = CreateRaceCarController;