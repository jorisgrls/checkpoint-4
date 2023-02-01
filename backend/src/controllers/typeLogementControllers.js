const models = require("../models");

const browse = (req, res) => {
  models.type_logement
    .findAll()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
