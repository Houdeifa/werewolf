<!DOCTYPE html>


<html>
<head>
    <title>werewolf</title>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="dist/css/style.min.css" />
    <script src="socket.io/socket.io.js"></script>
    <script src="src/js/pages.js"></script>
    <script src="src/js/client.js"></script>
</head>
<body>
    <div class="bg hide" id="bg"></div>
    <div class="page show" id="icone_page">
        <div class="center_div">
            <img src="src/icones/game.png" alt="game.png"/>
        </div>
    </div>
    <div class="buttonlist page" id="connect_page">
        <div class="buttonsdiv center_div">
            <button name="new" type="button" onclick="new_game()">Nouveau</button><br/>
            <div class="codediv"><label for="code">Code :</label><input type="text" id="code" name="code"/><button name="copy" type="button" onclick="copy_code()">Copier</button></div>
            <button name="join" type="button" onclick="join_game()">Rejoindre</button>
        </div>
    </div>
    <div class="page" id="ready_page">
        <div class="nouns_div">
            <ul class="nouns">
                <li>Rahim
                <li>Rahim
                <li>Rahim
                <li>Rahim
                <li>Rahim
            </ul>
            <div class="informations" >
                <button class="show" name="sart" type="button" onclick="ready_or_lunch_game()">Commencer</button>
            </div>
        </div>
    </div>
    <div class="page" id="name_page">
        <div class="center_div" >
            <label for="Nom">Nom</label> <br/> <input type="text" id="Nom" name="Nom"> <br/>
            <button class="show" name="start" type="button" onclick="set_name()">Suivant</button>
        </div>
    </div>

</body>
</html>
