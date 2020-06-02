var spanik = document.querySelector("span");


function funkcja() {
    var currentdate;

    function funkcja2() {
        currentdate = new Date();
        var dateTime;
        var sec = currentdate.getSeconds() < 10 ? '0' + currentdate.getSeconds() : currentdate.getSeconds();
        dateTime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + sec;
        spanik.textContent = dateTime;
    }
    return funkcja2;
}
var zmin = funkcja();
setInterval(zmin, 1000);