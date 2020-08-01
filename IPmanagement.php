<?php
$mysqli = new mysqli("localhost", "bestknight", "123456789", "werewolf");
if($mysqli->connect_error) {
  exit('Could not connect');
}

if($_GET['action'] == "post")
{
    
echo "saved";
}
else if($_GET['action'] == "get")
{
    
echo "loaded";
}
?>