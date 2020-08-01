var loaded = false;
var iconePage = null;;
var connectPage = null;;
var readyPage = null;;
var namePage = null;

var listCode = "0123456789ABCDEF"
var Copy_past = 0;

window.onload = function() {
    var page = 0;
    iconePage = document.getElementById("icone_page");
    connectPage = document.getElementById("connect_page");
    readyPage = document.getElementById("ready_page");
    namePage = document.getElementById("name_page");
    loaded = true;
    setTimeout(function () {
	iconePage.classList.remove("show");
	connectPage.classList.add("show");
    page = 1;
}, 1000);
};

function new_game()
{
    if(!loaded)
        return;
    
    var code = generateCode(8);
    connectPage.querySelector(".buttonsdiv").classList.add("sel")
    var codeLabel = connectPage.querySelector("textarea")
    codeLabel.value = code;
    var pasteButton = connectPage.querySelector('button[name="copy"]')
    pasteButton.innerHTML = "Copier";
    Copy_past = 0;
    saveCode(code);
}


function saveCode(code) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    alert(this.responseText);
    }
  };
  xhttp.open("GET", "IPmanagement.php?code="+code+ "&action=post", true);
  xhttp.send();
    
}

function copy_code()
{
    if(!loaded)
        return;
    
    var codeLabel = connectPage.querySelector("textarea")
    
    if(Copy_past == 0){
        codeLabel.select();
        document.execCommand("copy");
    }
    else{
        codeLabel.select();
        setTimeout(function () {
            console.log(document.execCommand("paste"));
        },1000);
        
    }
}

function join_game()
{
    if(!loaded)
        return;
    connectPage.querySelector(".buttonsdiv").classList.add("sel")
    var codeLabel = connectPage.querySelector("textarea")
    var pasteButton = connectPage.querySelector('button[name="copy"]')
    
    codeLabel.value = "";
    pasteButton.innerHTML = "Coller";
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