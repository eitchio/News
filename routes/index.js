var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/sources', function(req, res, next) {

    request('https://newsapi.org/v1/sources?&apiKey=ce187802c62c42618617135c394f7742', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        return res.json(body); // Print data to body.

    });
});



module.exports = router;