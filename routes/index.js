/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://cse216project:cse216project@ds117348.mlab.com:17348/cse216project');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected!!");
  var kittySchema = mongoose.Schema({
    name: String
  });
  var Kitten = mongoose.model('Kitten', kittySchema);
  var silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'
  silence.save(function(err, silence){
    if (err) return console.error(err);
    else console.log("save silence to db!");
  });
});
*/
//var mongoose = require('mongoose');

exports.view = function (req, res) {
    res.render('index');
};