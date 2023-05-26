"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteRaceCar = void 0;
class DeleteRaceCar {
  constructor(findRaceCarByIdRepository, deleteRaceCarRepository) {
    this.findRaceCarByIdRepository = findRaceCarByIdRepository;
    this.deleteRaceCarRepository = deleteRaceCarRepository;
  }
  async delete(data) {
    if (!(await this.findRaceCarByIdRepository.findById(data.id))) throw new Error("The car id passed does not exist");
    await this.deleteRaceCarRepository.delete(data.id);
  }
}
exports.DeleteRaceCar = DeleteRaceCar;