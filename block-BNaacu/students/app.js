
let express = require('express');
let studentsRouter = require('./routes/students');
let app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use('/students', studentsRouter)

//error handler

app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log("Server islistening on port 3k");
});