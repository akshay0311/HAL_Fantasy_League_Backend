const express = require('express');

const scores = require("../controllers/scores");
const router = express.Router();


router.get("/getAllScores",scores.getAllScores);

router.post("/addScore",scores.addScore);

module.exports = router;