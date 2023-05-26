"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateBrand = void 0;
var _errors = require("../../errors");
class CreateBrand {
  constructor(findSearchBrandRepository, saveBrandRepository) {
    this.findSearchBrandRepository = findSearchBrandRepository;
    this.saveBrandRepository = saveBrandRepository;
  }
  async create(data) {
    if ((await this.findSearchBrandRepository.findSearch({
      name: data.name,
      country: data.country,
      inauguratedIn: [data.inauguratedIn],
      filter: {
        order: "ASC",
        limit: 1,
        page: 1
      }
    })).length > 0) throw new _errors.CommunicateDTO(_errors.ECommunicateCode.InA, 400, "Brand already exists", data);
    return await this.saveBrandRepository.save(data);
  }
}
exports.CreateBrand = CreateBrand;