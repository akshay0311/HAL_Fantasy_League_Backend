const express = require('express');
const players = require("../controllers/players");
const router = express.Router();

router.get("/getPlayers",players.getPlayers);
router.post("/addPlayer",players.addPlayer);



module.exports = router;