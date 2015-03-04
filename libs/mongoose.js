/**
 * Created by dem on 3/7/15.
 */
var winston = require('winston');
var mongoose = require ("mongoose")
    ,Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;

var config = require('./config');

var uristring = config.get('mongoose:uri');
winston.info(uristring);
mongoose.connect(uristring);
var db = mongoose.connection;

db.on('error', function (err) {
    // Обрабатываем ошибку
    winston.log('error','ERROR connecting  : '+ uristring + '. ' + err);
});
db.once('open', function callback() {
    winston.info('Succeeded connected to: ' + uristring);
});

