<?php
error_reporting(E_ERROR / E_PARSE);
$title=$_POST["title"];
$name=$_POST["name"];
$email=$_POST["email"];
$message=$_POST["message"];


$file=fopen("data.txt","a");
fwrite($file,$title);
fwrite($file,$name);
fwrite($file,$email);
fwrite($file,$message);
fclose($file);
?>