<?php /* Smarty version 2.6.26, created on 2012-10-20 11:20:12
         compiled from /var/www/html/test/canvas/tpl/room.tpl */ ?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/test/canvas/css/canvas.css" type="text/css">
    <script type="text/javascript" src="/test/canvas/js/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="/test/canvas/js/canvas.js"></script>
    <script type="text/javascript" src="/test/canvas/js/ajax.js"></script>
    <title>Othello</title>
  </head>
  <body>
    <h1>Othello</h1>
    <div id="board"></div>
    <div class="score">
      <div class="black">2</div>
      <div class="white">2</div>
    </div>
    <div onclick="send();">
      SEND
    </div>
  </body>
</html>