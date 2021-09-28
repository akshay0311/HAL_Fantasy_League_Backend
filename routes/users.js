const express = require('express');

const scores = require("../controllers/users");
const router = express.Router();


router.get("/getAllUsers",scores.getAllUsers);

router.post("/addUser",scores.addUser);

module.exports = router;