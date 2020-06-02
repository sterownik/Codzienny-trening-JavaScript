var spanik = document.querySelector("span");


function funkcja() {


    function funkcja2() {
        var currentdate = new Date();
        var dateTime;
        dateTime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        spanik.textContent = dateTime;
    }
    return funkcja2;
}
var zmin = funkcja();
setInterval(zmin, 1000);