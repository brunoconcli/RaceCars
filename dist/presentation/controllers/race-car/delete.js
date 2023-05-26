"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteRaceCarController = void 0;
var _utils = require("../../utils");
class DeleteRaceCarController {
  constructor(useCase, paramRule) {
    this.useCase = useCase;
    this.paramRule = paramRule;
  }
  async handle(req) {
    try {
      this.paramRule.handle(req.params);
      await this.useCase.delete(req.params);
      return {
        statusCode: 201,
        body: {
          message: "Race car deleted successfully"
        }
      };
    } catch (error) {
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.DeleteRaceCarController = DeleteRaceCarController;