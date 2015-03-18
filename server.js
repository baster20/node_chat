//mongod --dbpath=/data --port 27017

var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    winston = require('winston'),
    bodyParser = require("body-parser"),
    _ = require("underscore");

var config = require('./libs/config'); // Используемая конфигурация
var db = require('./libs/mongoose'); // Файл работы с базой MongoDB

app.use(bodyParser.json());

http.listen(3000, function(){
    winston.info('listening on *:3000');
});





// Connection URL
io.on('connection', function(socket){
    console.log('a user connected');
//add room


    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });


    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


//Test git
app.get('/', function(req, res){
    res.send('<h1>Воу Воу. Палехче!!</h1>');
});


