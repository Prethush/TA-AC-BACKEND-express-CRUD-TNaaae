let express = require('express');
let router = express.Router();
let User = require('../models/users');

router.get('/new', (req, res) => {
    res.render('addUsers');
});

router.get('/', (req, res) => {
    res.render('users');
});

router.post('/' , (req, res) => {
    console.log(req.body);

    User.create(req.body, (err, newUser) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/');
    });
});

module.exports = router;