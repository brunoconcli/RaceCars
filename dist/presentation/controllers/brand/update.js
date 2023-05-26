"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateBrandController = void 0;
var _utils = require("../../utils");
class UpdateBrandController {
  constructor(useCase, bodyValidate, paramRule, paramValidate) {
    this.useCase = useCase;
    this.bodyValidate = bodyValidate;
    this.paramRule = paramRule;
    this.paramValidate = paramValidate;
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
          message: "Brand updated successfully",
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
exports.UpdateBrandController = UpdateBrandController;