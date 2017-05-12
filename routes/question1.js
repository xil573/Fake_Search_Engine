var items = require('../question1.json');

exports.view = function (req, res) {
    res.render('question1', items);
};
