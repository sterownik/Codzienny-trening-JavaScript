var wpisywanie = document.getElementById("pass");
var div = document.querySelector("div");
const pass = ["admin", "user"];
const mess = ["łatwo", "Brawo Zgadłeś!"];
// keyup to samo co input, change jesli wyjde

const zadpass = ["jedEN", "DwA"];
const zadmess = ["super", "dziala"];
wpisywanie.addEventListener("input", function () {
    // wersja 1
    // moze byc this.value
    // if (event.target.value === pass[1]) {
    //     div.textContent = mess[1];
    //     event.target.value = "";
    // } else {
    //     div.textContent = "";
    // }


    // wersja 2
    // if (event.target.value === pass[0]) {
    //     div.textContent = mess[0];
    // } else if (event.target.value === pass[1]) {
    //     div.textContent = mess[1];
    // } else {
    //     div.textContent = "";
    // }

    //wersja 3 z forEach
    // div.textContent = "";
    // pass.forEach((passe, index) => {
    //     if (passe === event.target.value) {
    //         div.textContent = mess[index];
    //     }
    // })


    // zaadaie dla mnie
    div.textContent = "";
    zadpass.forEach((zadpasse, index) => {



        if (zadpasse.toUpperCase() === event.target.value.toUpperCase()) {
            div.textContent = zadmess[index];
        }
    })

})
wpisywanie.addEventListener("focus", function () {


    wpisywanie.style.backgroundColor = "black";
    wpisywanie.style.color = "white";
    // event.target.classList.add("");dodawanie klasy do target
})
// jakm wyjde
wpisywanie.addEventListener("blur", function () {
    wpisywanie.style.backgroundColor = "white";
    wpisywanie.style.color = "black";
})