const express = require("express");

const router = express.Router();

const annoncesControllers = require("./controllers/annoncesControllers");
const typeEnergieControllers = require("./controllers/typeEnergieControllers");
const typeLogementControllers = require("./controllers/typeLogementControllers");
const flagControllers = require("./controllers/flagControllers");

router.get("/annonces", annoncesControllers.browse);
router.get("/annonces/:id", annoncesControllers.browseById);
router.post("/annonces", annoncesControllers.postAnnonce);
router.put("/annonces/:id", annoncesControllers.updateAnnonce);
router.delete("/annonces/:id", annoncesControllers.deleteById);

router.get("/energies", typeEnergieControllers.browse);

router.get("/types", typeLogementControllers.browse);

router.get("/flag/:id", flagControllers.browse);

module.exports = router;
