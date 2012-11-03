<?php
require_once '../MySmarty.php';

$smarty = new MySmarty();
$smarty->display(TPL . '/robby.tpl');
