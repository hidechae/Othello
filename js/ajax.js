function send()
{
    var xhr = XHTMLHttpRequestCreate();
    xhr.onreadystatechange = getStatus;
    var url = '../php/db.php';
    xhr.open("GET", url + "?" + "send request");
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send(null);

}

function getStatus()
{
    console.log("readyState:" + this.readyState);

    switch(this.readyState) {
    case 0:
        console.log("create XMLHttpRequest");
        break;
    case 1:
        console.log("open() is done");
        break;
    case 2:
        console.log("header is received");
        break;
    case 3:
        console.log("now loading body");
        break;
    case 4:
        console.log("send() is done");

        console.log("status:" + this.status + ":" + this.statusText);

        if (this.status == 0) {
            console.log("error");
        } else if ((200 <= this.status && this.status < 300) || (this.status == 304)) {
            console.log("success");
            console.log(this.responseXML);
        } else {
            console.log("other response");
        }
        break;
    }
}

function XHTMLHttpRequestCreate()
{
    if (XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        try {
            return new ActiveXObject('MSXML2.XMLHTTP.6.0');
        } catch(e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP.3.0');
        } catch(e) { }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP');
        } catch(e) { }
    }
    return null;
}
