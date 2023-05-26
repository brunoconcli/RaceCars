"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllBrandsController = void 0;
var _utils = require("../../utils");
class GetAllBrandsController {
  constructor(useCase) {
    this.useCase = useCase;
  }
  async handle() {
    try {
      return {
        statusCode: 200,
        body: await this.useCase.getAllBrands()
      };
    } catch (error) {
      return (0, _utils.AdaptError)(error);
    }
  }
}
exports.GetAllBrandsController = GetAllBrandsController;