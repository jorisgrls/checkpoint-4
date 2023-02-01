const express = require("express");

const router = express.Router();

const annoncesControllers = require("./controllers/annoncesControllers");
const typeEnergieControllers = require("./controllers/typeEnergieControllers");
const typeLogementControllers = require("./controllers/typeLogementControllers");

router.get("/annonces", annoncesControllers.browse);
router.get("/annonces/:id", annoncesControllers.browseById);
router.post("/annonces", annoncesControllers.postAnnonce);
router.put("/annonces/:id", annoncesControllers.updateAnnonce);
router.delete("/annonces/:id", annoncesControllers.deleteById);

router.get("/energies", typeEnergieControllers.browse);

router.get("/types", typeLogementControllers.browse);

module.exports = router;
