"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteBrand = void 0;
class DeleteBrand {
  constructor(iFindBrandByIdRepository, iDeleteBrandRepository) {
    this.iFindBrandByIdRepository = iFindBrandByIdRepository;
    this.iDeleteBrandRepository = iDeleteBrandRepository;
  }
  async delete(data) {
    if (!(await this.iFindBrandByIdRepository.findById(data.id))) throw new Error("The brand id passed does not exist");
    await this.iDeleteBrandRepository.delete(data.id);
  }
}
exports.DeleteBrand = DeleteBrand;