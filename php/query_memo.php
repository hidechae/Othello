<?php

table:  game
game_id int
black   string
white   string
ctime   timestamp


table:  sequence
game_id int
color   tinyint
x       int
y       int
ctime   timestamp

create table game(
    game_id     int     auto_increment,
    black_name  varchar(32)  default null,
    white_name  varchar(32)  default null,
    ctime       timestamp default current_timestamp,
    primary key(game_id)
) engine=innoDB default charset=utf8

create table sequence(
    game_id     int     unsigned,
    sequence_id int     unsigned,
    color       tinyint unsigned,
    x           int     unsigned,
    y           int     unsigned,
    ctime       timestamp default current_timestamp,
    primary key(game_id, sequence_id)
) engine=innoDB
