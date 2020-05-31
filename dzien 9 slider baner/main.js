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

var time = 3000;
var i = 1;

function usunPodswietlenie() {
    for (var j = 0; j < spaniki.length; j++) {
        spaniki[j].classList.remove("active");
    }
}

function zmienianie() {

    zdjecie.src = tab[i].img;
    napis.textContent = tab[i].napis;
    usunPodswietlenie();
    spaniki[i].classList.add("active");
    if (i == tab.length - 1) {
        i = 0;
    } else {
        i++;
    }




}


setInterval(zmienianie, time);


// zdjecie.src = tabimg[2];