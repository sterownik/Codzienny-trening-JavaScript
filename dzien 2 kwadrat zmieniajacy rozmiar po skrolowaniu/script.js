var div = document.querySelector("div");
var wys = 10;
var bool = true;
var element = document.createElement("div");
document.body.appendChild(element);
window.addEventListener("scroll", function () {

    if (!bool) {
        wys--;
        console.log('zmniejsz');
        if (wys == 10) {
            bool = true;
        }

    }
    if (wys <= 60 && bool) {
        wys++;
        console.log('zwieksz');
        if (wys == 60) {
            bool = false;
        }

    }
    element.style.height = wys + "vw";
    element.style.width = wys + "vw";

    //nie edytujemy pliku css a w html

})