const pool = require("../config/db.js");


// creating an account in the database
module.exports.addPlayer = async (req, res) => {
    console.log(`Added`);
  const { name, age, position, favourite_team, goals } = req.body;

  try {
    const new_player = await pool.query(
      "INSERT INTO players(name, age, position, favourite_team, goals) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, age, position, favourite_team, goals]
    );

    res.status(201).json({ new_player: new_player.rows[0] });
  } catch (err) {
    console.log(err);
  }
};


module.exports.getPlayers = async (req,res) => {
    console.log("fetched");

    try {
        const all_players = await pool.query(
            "SELECT * FROM players"
        );
        res.status(200).json({ all_players : all_players.rows})
    }
    catch (err){
        console.log(err);
    }
} 