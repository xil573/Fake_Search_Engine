
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var q1 = require('./routes/question1');
var q1_items = require('./routes/question1_items');
var questionnaire1 = require('./routes/questionnaire1');

var q2 = require('./routes/question2');
var q2_items = require('./routes/question2_items');
var questionnaire2 = require('./routes/questionnaire2');

var q3 = require('./routes/question3');
var q3_items = require('./routes/question3_items');
var questionnaire3 = require('./routes/questionnaire3');

var exit = require('./routes/exit');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/question1', q1.view);
app.get('/addAnswer_for_question1', q1.addAnswer);
app.get('/q1_items/:id', q1_items.view);
app.get('/questionnaire1', questionnaire1.view);
app.get('/questionnaire_for_question1', questionnaire1.addAnswer);

app.get('/question2', q2.view);
app.get('/addAnswer_for_question2', q2.addAnswer);
app.get('/q2_items/:id', q2_items.view);
app.get('/questionnaire2', questionnaire2.view);
app.get('/questionnaire_for_question2', questionnaire2.addAnswer);

app.get('/question3', q3.view);
app.get('/addAnswer_for_question3', q3.addAnswer);
app.get('/q3_items/:id', q3_items.view);
app.get('/questionnaire3', questionnaire3.view);
app.get('/questionnaire_for_question3', questionnaire3.addAnswer);

app.get('/exit', exit.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
