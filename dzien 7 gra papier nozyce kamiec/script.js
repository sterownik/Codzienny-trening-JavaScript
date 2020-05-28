var papierimg = document.querySelector(".papier");
var kamienimg = document.querySelector(".kamien");
var nozyczkiimg = document.querySelector(".nozyczki");
var wynikuz = document.querySelector(".player");
var wynikkomp = document.querySelector(".komp");
var gier = document.querySelector(".gierlb");
var wygranych = document.querySelector(".wygranychlb");
var przegranych = document.querySelector(".przegranychlb");

var remisow = document.querySelector(".remislb");
var button = document.querySelector("div.butt");
var wynikkoniec = document.querySelector(".wynikkoniec");

var cowybralgracz = 0; //odpowiednie liczby odpowiadaja papierowi kamieniowi i nozyczka
var gry = [0, 0, 0, 0]; //tablica zawiera liczbe gier wygranych przegranych i remisow

papierimg.addEventListener("click", function () {
    deleteclass(); //usuwanie klasy swiecenia ze wszystkich img
    papierimg.classList.add("swiec"); //dodawanie klasy swiecenia
    cowybralgracz = 1; //1 to papier
    wynikuz.textContent = "papier";
})
kamienimg.addEventListener("click", function () {
    deleteclass(); //usuwanie klasy swiecenia ze wszystkich img
    kamienimg.classList.add("swiec"); //dodawanie klasy swiecenia
    cowybralgracz = 2; //2 to kamien
    wynikuz.textContent = "kamień";
})

nozyczkiimg.addEventListener("click", function () {
    deleteclass(); //usuwanie klasy swiecenia ze wszystkich img
    nozyczkiimg.classList.add("swiec"); //dodawanie klasy swiecenia
    cowybralgracz = 3; //3 to nozyczki
    wynikuz.textContent = "nożyczki";
})
const losuj = () => {
    if (cowybralgracz == 0) {
        alert("Musisz coś wybrac!");
        return; //jesli nie wybral zandje ikony to konczy funkcje
    }
    gry[0]++; //dodaje do gry
    var index = Math.floor(Math.random() * 3 + 1); //losuje sposrod 1 2 3 
    var array = ["papier", "kamień", "nożyczki"]; //
    wynikkomp.textContent = array[index - 1]; //wyswietla co komputer wylosowal
    if (cowybralgracz == index) { //remis
        wynikkoniec.textContent = "Remis";
        gry[3]++;

    } else if ((cowybralgracz == 1 && index == 2) || (cowybralgracz == 2 && index == 3) || (cowybralgracz == 3 && index == 1)) { //wygrana gracza
        wynikkoniec.textContent = "TY";
        gry[1]++;
    } else { //wygrana komputera
        wynikkoniec.textContent = "Komputer";
        gry[2]++;
    }
    gier.textContent = gry[0]; //tablica wynikow
    wygranych.textContent = gry[1];
    przegranych.textContent = gry[2];
    remisow.textContent = gry[3];


}
button.addEventListener("click", losuj);

function deleteclass() { //usuwanie klasy swiecnia ze wszystkich img
    papierimg.classList.remove("swiec");
    kamienimg.classList.remove("swiec");
    nozyczkiimg.classList.remove("swiec");
}