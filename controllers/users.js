const pool = require("../config/db.js");

// getting all the Users
module.exports.getAllUsers = async (req, res) => {
  try {
    const all_users = await pool.query("SELECT * FROM users");
    res.status(200).json({ all_users: all_users.rows });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getUserByEmail = async (req, res) => {
  const {email} = req.params;
  console.log(email);
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    res.status(200).json({ user: user.rows });
  } catch (err) {
    console.log(err);
  }

}


// adding a user
module.exports.addUser = async (req, res) => {
  const { name, email, password, favTeam, favPlayer } = req.body;
  try {
    const new_user = await pool.query(
      "INSERT INTO users (name, favourite_team, favourite_player, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, favTeam, favPlayer, email, password]
    );
    res.status(201).json({ new_user: new_user.rows[0] });
  } catch (err) {
    console.log(err);
  }
};
