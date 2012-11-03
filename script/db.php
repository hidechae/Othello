<?php
$mysqli = new mysqli('localhost', 'hidechae', '1234');

if ($mysqli->connect_error) {
    die('Connect Error');
}
header('content-type:application/json');
echo '{"x":5}';
