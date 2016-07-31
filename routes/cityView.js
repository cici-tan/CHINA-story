var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next, stateName) {
    res.render('cityView', {title: stateName});
});

module.exports = router;