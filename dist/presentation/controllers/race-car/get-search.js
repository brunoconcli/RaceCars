"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetRaceCarsSearchController = void 0;
var _utils = require("../../utils");
class GetRaceCarsSearchController {
  constructor(useCase, bodyRule, bodyValidator) {
    this.useCase = useCase;
    this.bodyRule = bodyRule;
    this.bodyValidator = bodyValidator;
  }
  async handle(req) {
    try {
      this.bodyRule.handle(req.body);
      const error = this.bodyValidator.validate(req.body);
      if (error) throw error;
      return {
        statusCode: 200,
        body: await this.useCase.getRaceCarsSearch(req.params)
      };
    } catch (error) {
      console.log(error);
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.GetRaceCarsSearchController = GetRaceCarsSearchController;