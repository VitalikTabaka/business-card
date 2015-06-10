var express = require('express'),
    router = express.Router(),
    fs = require('fs');

//main
router.get('/main', function(req, res) {
    fs.readFile('./data/main.json', function(err, data) {
        if (err) console.log(err);
        res.json(JSON.parse(data));
    });
});

//about
router.get('/about', function(req, res) {
    fs.readFile('./data/about.json', function(err, data) {
        if (err) console.log(err);
        res.json(JSON.parse(data));
    });
});

//contacts
router.get('/contacts', function(req, res) {
    fs.readFile('./data/contacts.json', function(err, data) {
        if (err) console.log(err);
        res.json(JSON.parse(data));
    });;
});

//gallery photos and titles
router.get('/gallery', function(req, res) {
    fs.readFile('./data/imgs.json', function(err, data) {
        if (err) console.log(err);
        res.json(JSON.parse(data));
    });
});

module.exports = router;
