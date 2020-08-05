var loaded = false;
var iconePage = null;;
var connectPage = null;;
var readyPage = null;;
var namePage = null;

var listCode = "0123456789ABCDEF"
var Copy_past = 0;
var connected = false;
var createdRoom = false;
var code = '';

window.onload = function() {
    var page = 0;
    iconePage = document.getElementById("icone_page");
    connectPage = document.getElementById("connect_page");
    readyPage = document.getElementById("ready_page");
    namePage = document.getElementById("name_page");
    bg = document.getElementById("bg");
    loaded = true;
    setTimeout(function () {
	   iconePage.classList.remove("show");
	   connectPage.classList.add("show");
        bg.classList.remove("hide");
    page = 1;
}, 1000);
};

function new_game()
{
    if(!loaded)
        return;
    if(!createdRoom)
        code = generateCode(8);
    var bpage = connectPage.querySelector(".buttonsdiv"); bpage.classList.add("sel"); bpage.parentElement.classList.add("sel");
    var codeLabel = connectPage.querySelector("input");
    codeLabel.value = code;
    var pasteButton = connectPage.querySelector('button[name="copy"]')
    pasteButton.innerHTML = "Copier";
    Copy_past = 0;
    create_room(code);
}


function set_name()
{
    namePage = document.getElementById("name_page");
    nameInput = namePage.querySelector("input");
    myName = nameInput.value;
    set_name_on_server(myName);
    get_name_list();
    state = 2;
}
function show_name_page()
{
    connectPage = document.getElementById("connect_page");
    namePage = document.getElementById("name_page");
    connectPage.classList.remove("show");
    namePage.classList.add("show");
    state = 1;
}

function copy_code()
{
    if(!loaded)
        return;
    
    var codeLabel = connectPage.querySelector("input")
    
    if(Copy_past == 0){
        codeLabel.select();
        document.execCommand("copy");
    }
    else{
        join_room(codeLabel.value);
        
    }
}

function join_game()
{
    if(!loaded)
        return;
    connectPage.querySelector(".buttonsdiv").classList.add("sel")
    var codeLabel = connectPage.querySelector("input")
    var pasteButton = connectPage.querySelector('button[name="copy"]')
    
    codeLabel.value = "";
    pasteButton.innerHTML = "Enter";
    Copy_past = 1;
}



function generateCode(len)
{
    r = "";
    for(var i = 0;i != len;i++)
    {
        r += listCode[Math.floor(Math.random()*listCode.length)];
    }
    return r;
}

function refrech_name_list(list)
{
    readyPage = document.getElementById("ready_page");
    ullist = readyPage.querySelector("ul");
    ullist.innerHTML = "";
    for(var i = 0;i<list.length;i++){
        var li = document.createElement("li");
        li.innerHTML = list[i];
        ullist.appendChild(li);
    }
}
function show_names_page()
{
    connectPage = document.getElementById("connect_page");
    namePage = document.getElementById("name_page");
    readyPage = document.getElementById("ready_page");
    connectPage.classList.remove("show");
    namePage.classList.remove("show");
    readyPage.classList.add("show");
}