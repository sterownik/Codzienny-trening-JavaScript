var but = document.querySelector("button");
but.style.float = "left";
var order = 0;
var lista = [];
var reset = document.createElement("button");
reset.style.display = "block";
var elemencik2
reset.textContent = "reset";
document.body.appendChild(reset);
var element = document.createElement("ul");

document.body.appendChild(element);

reset.addEventListener("click", function () {
    document.querySelector("ul").textContent = "";
    // czysczenie listy ul
    order = 0;
    fz = 10;

})
var fz = 10;
but.addEventListener("click", function () {

    for (var i = 0; i <= 9; i++) {
        order++;
        fz++;
        var elemencik = document.querySelectorAll("li");
        lista[i] = document.createElement("li");
        lista[i].style.fontSize = fz + "px";
        var elemencik = document.querySelectorAll("li");
        var licznik = elemencik.length + 1;
        lista[i].textContent = "element" + order;
        element.appendChild(lista[i]);
    }
    console.log('tak');

})