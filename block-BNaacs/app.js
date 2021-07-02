let express = require('express');
let app = express();
let path = require('path');
//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//setup template engine
app.use((req, res, next) => {
    res.locals.students = [{name: "john", age: 23, email: "john@gmail.com"}, {name: "arya", age: 18, email: "arya@gmail.com"}, {name: "sansa", age: 22, email: "sansa@gmail.com"}];
    next();
})
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes

app.get('/', (req, res) => {
    res.render('index');
})

//404 error

app.use((req, res, next) => {
    res.send("Page Not Found");
})

//Custom error

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(3000, () => {
    console.log("Server is listening on port 3k");
})