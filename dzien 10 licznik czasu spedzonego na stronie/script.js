let number = 0;
window.addEventListener("click", () => {
    number++;
    document.body.textContent = number;
    // tradycyjnie
})

// Closure (domknięcie) to mechanizm, który pomaga nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.

// Closure - zmienna istnieje w innej funkcji, mimo, że funkcja, w której była stworzona ta zmienna nie jest już aktywna. 

//W pamieci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funkcji. Mozemy mieć do niej dostęp, ale także je zmieniać. 