$(function() {
    $("button.room").click(function() {
        alert();
        set(this.value);
        location.href=
    });
//    check();
});

function check() {
    console.log(new Date());
    $.getJSON("../script/check_room.php", {}, function(json) {
        console.log(json);
    });
    setTimeout("check()", 1000);
}

function set(room) {
    console.log(room);
    $.post("../script/enter_room.php", {"room":1}, function(e) {
        console.log(e);
    }, "json");
}

