<?php
error_log('a');
$m = new Memcached();
$m->addServer('127.0.0.1', 11211);
$i = $_POST['room'];
$m->set("room_$i", true);
