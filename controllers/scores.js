const pool = require("../config/db.js");

// getting all the scores
module.exports.getAllScores = async (req, res) => {
  try {
    const all_scores = await pool.query("SELECT * FROM scores");
    if (all_scores.length > 0)
      res.status(200).json({ all_scores: all_scores.rows });
    else {
      res.status(200).json({ all_scores : all_scores.rows });
    }
  } catch (err) {
    console.log(err);
  }
};

// adding a score at a time
module.exports.addScore = async (req, res) => {
  const { date, playername, goals } = req.body;
  try {
    const new_score = await pool.query(
      "INSERT INTO scores (date, playername, goals) VALUES ($1, $2, $3) RETURNING *",
      [date, playername, goals]
    );
    res.status(201).json({ new_score: new_score.rows[0] });
  } catch (err) {
    console.log(err);
  }
};
