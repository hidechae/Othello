function send() {
    $.getJSON("../script/db.php", {}, function(json){
        try{
            console.log("JSON Data:" + json.x);
        } catch(e) {
            alert(e);
        }
    });
}
