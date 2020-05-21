var przycisk = document.querySelector("button");
// var przycisk = document. querySelectorAll("button")[0]; moze byc tak
var fz = 10;
var lista = {};
for (var i = 1; i <= 10; i++) {
    lista[i] = document.querySelector("li:nth-of-type(" + i + ")");
}
// tak moze byc ale querySelectorAll lepszy
var lista2 = document.querySelectorAll("li");
var jeden = document.querySelector("li:nth-of-type(1)");

przycisk.addEventListener("click", function () {
    // fz++;
    // console.log('wcistnio');
    // for (var i = 1; i < lista2.length; i++) {
    //     if (!lista2[i].style.display)
    //         // sprawdza czy pusty string
    //         lista2[i].style.display = "block";
    //     lista2[i].style.fontSize = fz + "px";
    // } z for





    //forEach

    fz++;
    lista2.forEach((li) => {
        li.style.display = "block";
        li.style.fontSize = fz + "px";
    });


})