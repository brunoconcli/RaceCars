"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateBrand = void 0;
class UpdateBrand {
  constructor(iFindBrandByIdRepository, iUpdateBrandRepository) {
    this.iFindBrandByIdRepository = iFindBrandByIdRepository;
    this.iUpdateBrandRepository = iUpdateBrandRepository;
  }
  async update(data) {
    if (!(await this.iFindBrandByIdRepository.findById(data.id))) throw new Error("The brand id passed does not exist");
    return await this.iUpdateBrandRepository.update(data.id, data);
  }
}
exports.UpdateBrand = UpdateBrand;