const AbstractManager = require("./AbstractManager");

class TypeLogementManager extends AbstractManager {
  constructor() {
    super({ table: "type_logement" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM  ${this.table}`);
  }
}

module.exports = TypeLogementManager;
