//mongod --dbpath=/data --port 27017

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

//var db_function = require('db_helper');
// Connection URL
var db = mongoose.connect('mongodb://localhost:27017/node_chat');
io.on('connection', function(socket){
    console.log('a user connected');
});

var app = require('express')();
var http = require('http').Server(app);


//Test git
app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
//kitty.save(function (err) {
//    if (err) // ...
//        console.log('meow');
//});


