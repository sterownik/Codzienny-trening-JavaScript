var wpisywanie = document.getElementById("pass");
var div = document.querySelector("div");

// keyup to samo co input, change jesli wyjde
wpisywanie.addEventListener("input", function () {


    if (event.target.value == "user") {
        div.textContent = "Brawo Zgadłeś!";
    } else {
        div.textContent = "";
    }
})