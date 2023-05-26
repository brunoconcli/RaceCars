"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateRaceCar = void 0;
class UpdateRaceCar {
  constructor(iFindRaceCarByIdRepository, iUpdateRaceCarRepository) {
    this.iFindRaceCarByIdRepository = iFindRaceCarByIdRepository;
    this.iUpdateRaceCarRepository = iUpdateRaceCarRepository;
  }
  async update(data) {
    if (!(await this.iFindRaceCarByIdRepository.findById(data.id))) throw new Error("The car id passed does not exist");
    return await this.iUpdateRaceCarRepository.update(data.id, data);
  }
}
exports.UpdateRaceCar = UpdateRaceCar;