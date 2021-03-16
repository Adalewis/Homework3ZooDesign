function loadEvent(date) {
    function callDB(date) {
        var news = ["Virtual Zoo Tour", "virtual.jpg"];
        return news;
    }
    let info = callDB(date);
    var par = document.createElement("p");
    var el = document.createTextNode(info[0]);
    par.appendChild(el);
    var parent = document.getElementById("eventsContainer");
    parent.appendChild(par);

    var img = document.createElement("img");
    img.src = info[1];
    var parent = document.getElementById("eventsContainer");
    parent.appendChild(img);
}