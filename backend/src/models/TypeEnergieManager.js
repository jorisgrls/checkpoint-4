/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const AbstractManager = require("./AbstractManager");

class TypeEnergieManager extends AbstractManager {
  constructor() {
    super({ table: "type_energie" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM  ${this.table}`);
  }
}

module.exports = TypeEnergieManager;
