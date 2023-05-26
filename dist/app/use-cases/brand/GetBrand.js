"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetBrand = void 0;
var _errors = require("../../errors");
class GetBrand {
  constructor(findBrandByIdRepository, findAllBrandsRepository, findSearchBrandRepository) {
    this.findBrandByIdRepository = findBrandByIdRepository;
    this.findAllBrandsRepository = findAllBrandsRepository;
    this.findSearchBrandRepository = findSearchBrandRepository;
  }
  async getAllBrands() {
    return await this.findAllBrandsRepository.findAll();
  }
  async getBrandsSearch(data) {
    return await this.findSearchBrandRepository.findSearch(data);
  }
  async getBrandById(data) {
    const brand = await this.findBrandByIdRepository.findById(data.id);
    if (!brand) throw new _errors.CommunicateDTO(_errors.ECommunicateCode.DBE, 401, "there is no brand that contains this id");
    return brand;
  }
}
exports.GetBrand = GetBrand;