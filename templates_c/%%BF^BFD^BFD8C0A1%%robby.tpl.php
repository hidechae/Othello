<?php /* Smarty version 2.6.26, created on 2012-10-20 14:20:19
         compiled from /var/www/html/test/canvas/tpl/robby.tpl */ ?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/test/canvas/css/canvas.css" type="text/css">
    <script type="text/javascript" src="/test/canvas/js/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="/test/canvas/js/room.js"></script>
    <title>Othello</title>
  </head>
  <body>
    <h1>Robby</h1>
    <table>
      <tr>
        <th>room</th>
        <th>Black</th>
        <th>White</th>
      </tr>
      <tr>
        <th>room1</th>
        <td><button type="button" class="room" value="5">
            Player1
        </button></td>
        <td><button type="button"
            onClick="location.href='<?php echo @URL; ?>
/room.php';">
            Player1
        </button></td>
        <td>player2</td>
      </tr>
      <tr>
        <th>room2</th>
        <td><button type="button"
            onClick="location.href='<?php echo @URL; ?>
/room.php';">
            Player1
        </button></td>
        <td><button type="button"
            onClick="location.href='<?php echo @URL; ?>
/room.php';">
            Player1
        </button></td>
      </tr>
      <tr>
        <th>room3</th>
        <td>player1</td>
        <td>player2</td>
      </tr>
      <tr>
        <th>room4</th>
        <td>player1</td>
        <td>player2</td>
      </tr>
    </table>

  </body>
</html>