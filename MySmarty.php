<?php
require_once('Smarty.class.php');
require_once('define.php');
class MySmarty extends Smarty
{
    function MySmarty()
    {
        $this->template_dir = ROOT . '/templates/';
        $this->compile_dir = ROOT . '/templates_c/';
        $this->Smarty();
    }
}
