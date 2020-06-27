var input = document.querySelector("input");
input.addEventListener("change", function () {
    if (input.value < 0) {
        alert("nie mozesz wpisac wartosci ujemnej");
        input.value = 0;
    }
})