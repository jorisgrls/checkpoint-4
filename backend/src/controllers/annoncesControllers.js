const models = require("../models");

const browse = (req, res) => {
  models.annonces
    .findAll()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseById = (req, res) => {
  models.annonces
    .findById(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteById = (req, res) => {
  models.annonces
    .deleteById(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({
          error: "Annonce non trouvée.",
        });
      } else {
        const message = "Annonce supprimé avec succès.";
        res.status(200).json({ message });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postAnnonce = (req, res) => {
  const annonce = req.body;
  models.annonces
    .insert(annonce)
    .then(() => {
      const message = "Annonce créée avec succès";
      res.status(201).json(message);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
};

const updateAnnonce = (req, res) => {
  const annonce = req.body;
  annonce.id = parseInt(req.params.id, 10);
  models.annonces
    .update(annonce)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({
          error: "Annonce non trouvé.",
          result,
        });
      } else {
        const message = "Annonce modifiée avec succès.";
        res.status(200).json({ message });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

module.exports = {
  browse,
  browseById,
  deleteById,
  postAnnonce,
  updateAnnonce,
};
