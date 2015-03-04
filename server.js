//mongod --dbpath=/data --port 27017

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var winston = require('winston');

var config = require('./libs/config'); // Используемая конфигурация
var db = require('./libs/mongoose'); // Файл работы с базой MongoDB

http.listen(3000, function(){
    winston.info('listening on *:3000');
});





// Connection URL
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


//Test git
app.get('/', function(req, res){
    res.send('<h1>Воу Воу. Палехче!!</h1>');
});


