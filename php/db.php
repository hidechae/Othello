<?php
$mysqli = new mysqli('localhost', 'hidechae', '1234');

if ($mysqli->connect_error) {
    die('Connect Error');
}

echo '[x:5]';
