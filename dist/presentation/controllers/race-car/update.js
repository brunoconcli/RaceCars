"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateRaceCarController = void 0;
var _utils = require("../../utils");
class UpdateRaceCarController {
  constructor(useCase, bodyValidate, paramValidate, paramRule) {
    this.useCase = useCase;
    this.bodyValidate = bodyValidate;
    this.paramValidate = paramValidate;
    this.paramRule = paramRule;
  }
  async handle(req) {
    try {
      let error = this.bodyValidate.validate(req.body);
      this.paramRule.handle(req.params);
      error = this.paramValidate.validate(req.params);
      if (error) throw error;
      return {
        statusCode: 201,
        body: {
          message: "RaceCar updated successfully",
          data: await this.useCase.update({
            id: req.params.id,
            ...req.body
          })
        }
      };
    } catch (error) {
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.UpdateRaceCarController = UpdateRaceCarController;