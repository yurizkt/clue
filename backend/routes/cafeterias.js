const { Router } = require("express");
const router = Router();
const { getAllCafeterias, getCafeteriasPorId } = require("../controllers/cafeterias");

router.get("/", getAllCafeterias);
router.get("/:id", getCafeteriasPorId);

module.exports = router;