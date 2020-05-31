var zdjecie = document.querySelector("img");
var napis = document.querySelector("h1");

var tabimg = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
var napisy = ["Pierwszy tekst", "Drugi tekst", "Trzeci tekst"];
var tab = [{
    img: "images/img1.jpg",
    napis: "Pierwszy tekst"
}, {
    img: "images/img2.jpg",
    napis: "Drugi tekst"
}, {
    img: "images/img3.jpg",
    napis: "Trzeci tekst"
}];
var spaniki = document.querySelectorAll("span");
spaniki = [...spaniki];
//zamiana na liste z nodelist

var time = 3000;
var i = 0;


function usunPodswietlenie() {
    // for (var j = 0; j < spaniki.length; j++) {
    //     spaniki[j].classList.remove("active");
    // } tez dziala
    // spaniki.forEach((item, index) => {
    //     spaniki[index].classList.remove("active");
    // }) tak tez moze byc
    var wartosc = spaniki.findIndex(spanik => spanik.classList.contains("active"));
    spaniki[wartosc].classList.remove("active");
    //szuka po indexach czy jest jesli tak to zwraca


}

function zmienianie() {
    if (i >= tab.length - 1) {
        i = 0;
    } else if (i <= -1) {
        i = 2;
    } else {
        i++;
    }
    zdjecie.src = tab[i].img;
    napis.textContent = tab[i].napis;
    usunPodswietlenie();
    spaniki[i].classList.add("active");
}

function zmienianieKey(evencik) {
    clearInterval(interval);
    // czyszczenie interwału
    if (evencik == 37) {
        i--;
        //lewo
    } else if (evencik == 39) {
        i++;
        //prawo
    }
    if (i > tab.length - 1) {
        i = 0;
    } else if (i <= -1) {
        i = 2;
    }
    zdjecie.src = tab[i].img;
    napis.textContent = tab[i].napis;
    usunPodswietlenie();
    spaniki[i].classList.add("active");
}



var interval = setInterval(zmienianie, time);

document.addEventListener("keydown", function (e) {
    zmienianieKey(e.keyCode);
    interval = setInterval(zmienianie, time);
})