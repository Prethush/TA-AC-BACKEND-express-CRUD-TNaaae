let express = require('express');
let studentsRouter = require('./routes/students');
let app = express();

//middleware
//setup template engine

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use('/students', studentsRouter)

app.listen(3000, () => {
    console.log("Server islistening on port 3k");
});