"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRaceCar = void 0;
class CreateRaceCar {
  constructor(findSearchRaceCarRepository, saveRaceCarRepository) {
    this.findSearchRaceCarRepository = findSearchRaceCarRepository;
    this.saveRaceCarRepository = saveRaceCarRepository;
  }
  async create(data) {
    try {
      return await this.saveRaceCarRepository.save(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
exports.CreateRaceCar = CreateRaceCar;