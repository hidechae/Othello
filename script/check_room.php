<?php
$m = new Memcached();
$m->addServer('127.0.0.1', 11211);
$get = array();
for ($i = 1; $i <= 4; $i++) {
    $get["room_$i"] = $m->get("room_$i");
}
exit(json_encode($get));
