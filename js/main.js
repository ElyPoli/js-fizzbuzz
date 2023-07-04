/*
**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/

// Ciclo per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Dichiaro variabili
    const row = document.querySelector(".row");
    const col = document.createElement("div");
    let colLabel;

    // Verifico i numeri multipli di 3 o 5 oppure di entrambi e modifico lo sfondo
    if (i % 3 === 0 && i % 5 === 0) {
        colLabel = "FizzBuzz";
        col.classList.add("bg-danger");
    } else if (i % 3 === 0) {
        colLabel = "Fizz";
        col.classList.add("bg-success");
    } else if (i % 5 === 0) {
        colLabel = "Buzz";
        col.classList.add("bg-warning");
    } else {
        colLabel = i;
        col.classList.add("bg-secondary");
    }

    //Aggiungo altre classi a col
    col.classList.add("col-4", "col-sm-3", "col-md-2", "me-3", "ms-3", "single-col", "rounded-4", "d-flex", "justify-content-center", "align-items-center", "shadow", "fs-3", "fw-bold");

    //Aggiungo gli elementi al dom
    col.append(colLabel);
    row.append(col);
}