var http = require('http');
var fs = require('fs');

var PORT = process.env.PORT || 5000
// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    console.log('Serveur crée !' + PORT);
    
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket,pseudo) {
    console.log('Un client est connecté !');
    socket.emit('message', 'welcome');

    

 socket.on('newRoom', function(message) {
     if(!isRoom(message)){
        socket.rolle = 'host';
        console.log('Room N°' + message + ' initialized !');
        socket.emit('newRoom', 'welcome');
        socket.join(message,function(){
            var rooms = Object.keys(socket.rooms);
            console.log('rooms infos :' + rooms);
        });
     }
    });
socket.on('setName', function(message) {
    socket.myname = message;
});
    
socket.on('getNameList', function(message) {
    if(message == "")
        return;
    var sockets = Object.keys(io.sockets.sockets);
    var infos = {
        'cmd':'names',
        'list' :findClientsSocket(message)
    };
    console.log(infos);
    socket.emit(message, infos);
    socket.to(message).emit(message, infos);
});
 socket.on('joining', function(message) {
        var rooms = Object.keys(socket.rooms);
        if(isRoom(message) && rooms[1] != message){
            socket.join(message);
            socket.rolle = "client";
            console.log('client joined room : ' + message );
            socket.to(message).emit(message, 'init');
            socket.emit(message, 'init');
        }
    });
});

function isRoom(code){
    if (io.sockets.adapter.rooms) {
        for (var room in io.sockets.adapter.rooms) {
            if(room == code){
                return true;
            }
        }
    }
    return false;
}

function findClientsSocket(roomId, namespace) {
    var res = []
    // the default namespace is "/"
    , ns = io.of(namespace ||"/");

    if (ns) {
        for (var id in ns.connected) {
            if(roomId) {
                var index = ns.connected[id].rooms[roomId];
                console.log(index);
                console.log(roomId);
                if(index == roomId) {
                    res.push(ns.connected[id].myname);
                }
            } else {
                res.push(ns.connected[id].myname);
            }
        }
    }
    return res;
}
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));