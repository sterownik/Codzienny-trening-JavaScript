var zdjecie = document.querySelector("img");
var napis = document.querySelector("h1");

var tabimg = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
var napisy = ["Pierwszy tekst", "Drugi tekst", "Trzeci tekst"];
var spaniki = document.querySelectorAll("span");

var time = 3000;
var i = 1;

function usunPodswietlenie() {
    for (var j = 0; j < spaniki.length; j++) {
        spaniki[j].classList.remove("active");
    }
}

function zmienianie() {
    console.log('ta');
    zdjecie.src = tabimg[i];
    napis.textContent = napisy[i];
    usunPodswietlenie();
    spaniki[i].classList.add("active");
    if (i == tabimg.length - 1) {
        i = 0;
    } else {
        i++;
    }




}


setInterval(zmienianie, time);


// zdjecie.src = tabimg[2];