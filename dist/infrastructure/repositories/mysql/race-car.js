"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RaceCarRepository = void 0;
var _mysqlConnection = require("../../providers/mysql-connection");
var _joinModularValues = _interopRequireDefault(require("./join-modular-values"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class RaceCarRepository {
  async delete(id) {
    const connection = await (0, _mysqlConnection.getConnection)();
    await connection.execute("DELETE * FROM RaceCar WHERE id = ?", [id]).then(() => {}).catch(() => {
      throw new Error("Error on delete race-car");
    });
  }
  async save(data) {
    const connection = await (0, _mysqlConnection.getConnection)();
    await connection.execute("INSERT INTO RaceCar (name, brandId, color, year, price, imageURL) VALUES (?, ?, ?, ?, ?, ?)", [data.name, data.brandId, data.color, data.year, data.price, data.imageURL]);
    return await this.findSearch({
      name: data.name,
      brand: data.brandId,
      color: data.color,
      year: [data.year],
      filter: {
        order: "ASC",
        limit: 0,
        page: 0
      }
    })[0];
  }
  async update(id, data) {
    const connection = await (0, _mysqlConnection.getConnection)();
    const query = "UPDATE RaceCar SET " + (0, _joinModularValues.default)(data).join(", ") + "WHERE id = ?";
    await connection.execute(query, [id]);
    return await this.findById(id);
  }
  async findAll() {
    const connection = await (0, _mysqlConnection.getConnection)();
    return await connection.execute("SELECT * FROM RaceCar").then(results => results[0]).catch(() => {
      throw new Error("Error in findind all Race cars");
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async findById(id) {
    const connection = await (0, _mysqlConnection.getConnection)();
    return await connection.query("SELECT * FROM RaceCar WHERE id = ?", [id]).then(results => results[0][0]).catch(() => {
      throw new Error("Error on finding racecar");
    });
  }
  async findSearch(data) {
    const connection = await (0, _mysqlConnection.getConnection)();
    let query = "SELECT * FROM RaceCar" + (!data.name && !data.brand && !data.color && !data.year && !data.priceMax && !data.priceMin ? "" : " WHERE ");
    const add = [...(0, _joinModularValues.default)({
      name: data.name,
      brandId: data.brand,
      color: data.color,
      year: data.year
    }, true, " LIKE ")];
    if (data.priceMax) add.push(`price < ${data.priceMax}`);
    if (data.priceMin) add.push(`price > ${data.priceMin}`);
    console.log(data);
    query += add.join(" AND ") + ` ORDER BY name, country, inauguratedIn ${data.filter.order} LIMIT ${data.filter.limit} OFFSET ${(data.filter.page - 1) * data.filter.limit}`;
    console.log(query);
    return await connection.query(query).then(results => results[0]).catch(() => {
      throw new Error("Error on find search race-car");
    });
  }
}
exports.RaceCarRepository = RaceCarRepository;