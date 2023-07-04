/*
**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

const ul = document.querySelector("ul.list");

// Ciclo per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Dichiaro variabili
    const row = document.querySelector(".row");
    const col = document.createElement("div");
    let colLabel;

    // Verifico i numeri multipli di 3 o 5 oppure di entrambi
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
        colLabel = "fizzbuzz";
    } else if (i % 3 === 0) {
        console.log("fizz");
        colLabel = "fizz";
    } else if (i % 5 === 0) {
        console.log("buzz");
        colLabel = "buzz";
    } else {
        console.log(i);
        colLabel = i;
    }

    //Aggiungo gli elementi al dom
    col.classList.add("col-4", "col-sm-3", "col-md-2", "bg-secondary", "me-3", "ms-3", "single-col", "rounded-4", "d-flex", "justify-content-center", "align-items-center", "shadow", "fs-3", "fw-bold");

    col.append(colLabel);
    row.append(col);

}