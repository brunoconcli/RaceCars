"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetBrandByIdController = void 0;
var _utils = require("../../utils");
class GetBrandByIdController {
  constructor(useCase, paramsValidate) {
    this.useCase = useCase;
    this.paramsValidate = paramsValidate;
  }
  async handle(req) {
    try {
      const error = this.paramsValidate.validate(req.params);
      if (error) throw error;
      return {
        statusCode: 200,
        body: await this.useCase.getBrandById(req.params)
      };
    } catch (error) {
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.GetBrandByIdController = GetBrandByIdController;