const { Router } = require("express");
const router = Router();
const { getFavoritos, postFavoritos, deleteFavoritos } = require("../controllers/favoritos");

router.get("/", getFavoritos)
router.post("/:id", postFavoritos)
router.delete("/:id", deleteFavoritos)

module.exports = router;