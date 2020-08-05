
var PORT = process.env.PORT || 5000
var socket = io.connect('127.0.0.1:'+PORT);
var host = false;
var state = 0;
var myName = "";
var Clients = [];
roomCode = '';
socket.on('message', function(message) {
    if(message = 'welcome'){
        connected = true;
    }
});
socket.on('newRoom', function(message) {
    if(message = 'welcome'){
        createdRoom = true;
        room_created();
    }
});
function create_room(code)
{
    if(!connected){
        return;
    }
    socket.emit('newRoom', code);
    roomCode = code;
}

function room_created(){
    host = true;
    socket.on(roomCode, function(message) {
        console.log('host : got message ('+ message +') !');
        if(message == "init"){
            show_name_page();
        }
        else{
            if(message.cmd != undefined){
                host_cmd_exec(message);
                show_names_page();
            }
        }
    });
}

function host_cmd_exec(commandLine)
{
    switch(commandLine.cmd){
          case 'names':
            if(state != 2)
                break;
            Clients = commandLine.list;
            refrech_name_list(Clients);
            show_names_page();
            break;
    }
}
function client_cmd_exec(commandLine)
{
    switch(commandLine.cmd){
          case 'names':
            if(state != 2)
                break;
            Clients = commandLine.list;
            refrech_name_list(Clients);
            show_names_page();
            break;
    }
}
function get_name_list()
{
    socket.emit('getNameList', roomCode);
    
}
function set_name_on_server(name){
    socket.emit('setName', name);
}

function join_room(code)
{
    socket.emit('joining', code);
    roomCode = code;
    socket.on(code, function(message) {
        console.log('client : got message ('+ message +') !');
        if(message == "init"){
            show_name_page();
        }
        else{
            if(message.cmd != undefined){
                client_cmd_exec(message);
            }
        }
    });
}