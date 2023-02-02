/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const AbstractManager = require("./AbstractManager");

class AnnoncesManager extends AbstractManager {
  constructor() {
    super({ table: "annonces" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM  ${this.table}`);
  }

  findById(id) {
    return this.connection.query(
      `SELECT ${this.table}.*, type_energie.nom AS nom_type_energie, type_logement.nom AS nom_type_logement
        FROM annonces
        JOIN type_energie
        ON annonces.id_type_energie = type_energie.id 
        JOIN type_logement
        ON annonces.id_type = type_logement.id 
        WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  insert(annonce) {
    const {
      url_image,
      code_postal,
      ville,
      titre,
      description,
      id_type,
      prix_hc,
      prix_charges,
      prix_energie,
      id_type_energie,
      nb_pieces,
      surface,
      garage,
      dpe,
      ges,
      pays,
    } = annonce;
    return this.connection.query(
      `INSERT INTO ${this.table} (url_image, code_postal, ville, titre,description,id_type,prix_hc,prix_charges,prix_energie, id_type_energie, nb_pieces, surface, garage, dpe, ges, pays) 
      VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?, ?)`,
      [
        url_image,
        code_postal,
        ville,
        titre,
        description,
        id_type,
        prix_hc,
        prix_charges,
        prix_energie,
        id_type_energie,
        nb_pieces,
        surface,
        garage,
        dpe,
        ges,
        pays,
      ]
    );
  }

  update(annonce) {
    const arr = [];
    const initialSql = `UPDATE ${this.table}`;
    annonce.code_postal &&
      arr.push({ column: "code_postal", value: annonce.code_postal });
    annonce.titre && arr.push({ column: "titre", value: annonce.titre });
    annonce.ville && arr.push({ column: "ville", value: annonce.ville });
    annonce.description &&
      arr.push({ column: "description", value: annonce.description });
    annonce.id_type && arr.push({ column: "id_type", value: annonce.id_type });
    annonce.prix_hc && arr.push({ column: "prix_hc", value: annonce.prix_hc });
    annonce.prix_charges &&
      arr.push({ column: "prix_charges", value: annonce.prix_charges });
    annonce.prix_energie &&
      arr.push({ column: "prix_energie", value: annonce.prix_energie });
    annonce.id_type_energie &&
      arr.push({ column: "id_type_energie", value: annonce.id_type_energie });
    annonce.nb_pieces &&
      arr.push({ column: "nb_pieces", value: annonce.nb_pieces });
    annonce.surface && arr.push({ column: "surface", value: annonce.surface });
    annonce.garage && arr.push({ column: "garage", value: annonce.garage });
    annonce.dpe && arr.push({ column: "dpe", value: annonce.dpe });
    annonce.ges && arr.push({ column: "ges", value: annonce.ges });
    annonce.pays && arr.push({ column: "pays", value: annonce.pays });

    const dependencyArray = arr.map(({ value }) => value);
    dependencyArray.push(annonce.id);
    return this.connection.query(
      arr.reduce(
        (sql, { column }, index) =>
          `${sql} ${index === 0 ? `SET` : `,`} ${column} = ? ${
            index === arr.length - 1 ? `WHERE annonces.id = ?` : ``
          }`,
        initialSql
      ),
      dependencyArray
    );
  }

  deleteById(id) {
    return this.connection.query(`DELETE FROM  ${this.table} WHERE id = ? `, [
      id,
    ]);
  }
}

module.exports = AnnoncesManager;
