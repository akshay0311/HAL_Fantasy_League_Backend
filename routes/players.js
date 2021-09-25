const express = require('express');
const players = require("../controllers/players");
const router = express.Router();

router.get("/getPlayers",players.getPlayers);
router.post("/addPlayer",players.addPlayer);
router.post("/selectPlayers",players.selectPlayers);
router.get("/getSelectedPlayers/:username",players.getSelectedPlayers);

module.exports = router;