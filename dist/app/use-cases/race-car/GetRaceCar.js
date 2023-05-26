"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetRaceCar = void 0;
class GetRaceCar {
  constructor(findRaceCarByIdRepository, findSearchRaceCarsRepository, findAllRaceCarsRepository) {
    this.findRaceCarByIdRepository = findRaceCarByIdRepository;
    this.findSearchRaceCarsRepository = findSearchRaceCarsRepository;
    this.findAllRaceCarsRepository = findAllRaceCarsRepository;
  }
  async getAllRaceCars() {
    return await this.findAllRaceCarsRepository.findAll();
  }
  async getRaceCarsSearch(data) {
    return await this.findSearchRaceCarsRepository.findSearch(data);
  }
  async getRaceCarById(data) {
    const raceCar = await this.findRaceCarByIdRepository.findById(data.id);
    if (!raceCar) throw new Error("The car passed does not exist");
    return raceCar;
  }
}
exports.GetRaceCar = GetRaceCar;