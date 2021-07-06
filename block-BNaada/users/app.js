let express = require('express');
let mongoose = require('mongoose');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err ? err : "connected to db");
});

//instantiate express
let app = express();

//middlewares

//setup template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//capture form data
app.use(express.urlencoded({extended: false}));

//routing middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

//error handler

//404
app.use((req, res, next) => {
    res.send("Page not Found");
});

//custom error
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(4000, () => {
    console.log("Server is listening on port 4k");
});