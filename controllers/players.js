const pool = require("../config/db.js");


// adding a player details in the database
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

// getting all the players details 
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

// selecting all the players for that particular date
module.exports.selectPlayers = async (req,res) => {
  const {username, date, players} = req.body;
  const [player1, player2, player3] = players;
  try {
    const selected_players = await pool.query(
      "INSERT INTO players_selected(username, date, player1, player2, player3) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [username, date, player1, player2, player3]
    );

    res.status(201).json({ selected_players: selected_players.rows[0] });
  }
  catch(err) {
    console.log(error);
  }
}


// getting All the selected players on that particular date
module.exports.getSelectedPlayers = async (req,res) => {
  const {username} = req.params;
  try {
    const selected_players = await pool.query(
      "SELECT player1, player2, player3 FROM players_selected WHERE username = $1",[username]
    );
    let selected_players_array = [];
    selected_players_array.push(selected_players.rows[0].player1);
    selected_players_array.push(selected_players.rows[0].player2);
    selected_players_array.push(selected_players.rows[0].player3);

    res.status(200).json({ selected_players: selected_players_array});
  }
  catch(err) {
    console.log(err);
  }
}