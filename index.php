<!DOCTYPE html>


<html>
<head>
    <title>werewolf</title>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="dist/css/style.min.css" />
    <script type="text/javascript" src="https://raw.githack.com/colyseus/colyseus.js/master/dist/colyseus.js"></script>
    <script src="src/js/pages.js"></script>
    <script src="dist/js/server.min.js"></script>
</head>
<body>
    
    <div class="page" id="icone_page">
        <div class="center_div">
            <img src="src/icones/game.png" alt="game.png"/>
        </div>
    </div>
    <div class="buttonlist page show" id="connect_page">
        <div class="buttonsdiv center_div">
            <button name="new" type="button" onclick="new_game()">Nouveau</button><br/>
            <div class="codediv"><label for="code">Code :</label><textarea type="text" id="code" name="code"></textarea><button name="copy" type="button" onclick="copy_code()">Copier</button></div>
            <button name="join" type="button" onclick="join_game()">Rejoindre</button>
        </div>
    </div>
    <div class="page" id="ready_page">
        <div class="center_div">
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
            <label for="code">Nom :</label> <br/> <input type="text" id="Nom" name="Nom"> <br/>
            <button class="show" name="sart" type="button" onclick="ready_or_lunch_game()">Enter</button>
        </div>
    </div>

</body>
</html>
