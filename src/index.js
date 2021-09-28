const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use("/players",require("../routes/players"));
app.use("/scores", require("../routes/scores"))
app.use("/users", require("../routes/users"))

app.listen(4000, ()=> {
    console.log(`App Listening at port 4000`);
})