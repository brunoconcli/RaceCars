"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandRepository = void 0;
var _mysqlConnection = require("../../providers/mysql-connection");
var _joinModularValues = _interopRequireDefault(require("./join-modular-values"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class BrandRepository {
  async delete(id) {
    const connection = await (0, _mysqlConnection.getConnection)();
    await connection.execute("DELETE FROM Brand WHERE id = ?", [id]).then(() => {}).catch(() => {
      throw new Error("Error on delete brand");
    });
  }
  async save(data) {
    if ((await this.findSearch({
      country: data.country,
      name: data.name,
      inauguratedIn: [data.inauguratedIn],
      filter: {
        order: "ASC",
        limit: 1,
        page: 1
      }
    })).length > 0) throw new Error("Brand already exists");
    const connection = await (0, _mysqlConnection.getConnection)();
    await connection.execute("INSERT INTO Brand (name, country, inauguratedIn) VALUES (?, ?, ?)", [data.name, data.country, data.inauguratedIn]);
    return await this.findSearch({
      country: data.country,
      name: data.name,
      inauguratedIn: [data.inauguratedIn],
      filter: {
        order: "ASC",
        limit: 1,
        page: 1
      }
    }).then(results => results[0]);
  }
  async update(id, data) {
    const connection = await (0, _mysqlConnection.getConnection)();
    if (!data.country && !data.name && !data.inauguratedIn) throw new Error("Invalid data");
    let query = "UPDATE Brand SET ";
    const add = [...(0, _joinModularValues.default)(data)];
    if (add.length < 0) throw new Error("Invalid data");
    query += add.join(", ") + " WHERE id = ?";
    await connection.execute(query, [id]);
    return await this.findById(id);
  }
  async findAll() {
    const connection = await (0, _mysqlConnection.getConnection)();
    return await connection.execute("SELECT * FROM Brand").then(results => results[0]).catch(() => {
      throw new Error("Error in finding all brands");
    });
  }
  async findById(id) {
    const connection = await (0, _mysqlConnection.getConnection)();
    return await connection.query("SELECT * FROM Brand WHERE id = ?", [id]).then(results => results[0][0]).catch(() => {
      throw new Error("Error on find brand by id");
    });
  }
  async findSearch(data) {
    const connection = await (0, _mysqlConnection.getConnection)();
    let query = "SELECT * FROM Brand" + (!data.country && !data.inauguratedIn && !data.name ? "" : " WHERE ");
    const add = [...(0, _joinModularValues.default)({
      country: data.country,
      name: data.name
    }, true, " LIKE ")];
    if (data.inauguratedIn) add.push(`inauguratedIn = ${data.inauguratedIn.join(" OR ")}`);
    query += add.join(" AND ") + ` ORDER BY name, country, inauguratedIn ${data.filter.order} LIMIT ${data.filter.limit} OFFSET ${(data.filter.page - 1) * data.filter.limit}`;
    return await connection.query(query).then(results => results[0]).catch(() => {
      throw new Error("Error on find search brands");
    });
  }
}
exports.BrandRepository = BrandRepository;