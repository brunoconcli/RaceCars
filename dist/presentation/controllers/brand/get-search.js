"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetBrandsSearchController = void 0;
var _utils = require("../../utils");
class GetBrandsSearchController {
  constructor(useCase, bodyRule, bodyValidate) {
    this.useCase = useCase;
    this.bodyRule = bodyRule;
    this.bodyValidate = bodyValidate;
  }
  async handle(req) {
    try {
      this.bodyRule.handle(req.body);
      const error = this.bodyValidate.validate(req.body);
      if (error) throw error;
      const {
        name,
        inauguratedIn,
        country,
        filter
      } = req.body;
      return {
        statusCode: 200,
        body: await this.useCase.getBrandsSearch({
          name,
          inauguratedIn,
          country,
          filter
        })
      };
    } catch (error) {
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.GetBrandsSearchController = GetBrandsSearchController;