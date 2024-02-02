/*Snack 2
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const resultElement = document.querySelector("#result");
// memorizzo tutti i campi di input
const valueElement1 = document.querySelector("#value-1");
const valueElement2 = document.querySelector("#value-2");
const valueElement3 = document.querySelector("#value-3");
const valueElement4 = document.querySelector("#value-4");
const valueElement5 = document.querySelector("#value-5");
const valueElement6 = document.querySelector("#value-6");
const valueElement7 = document.querySelector("#value-7");
const valueElement8 = document.querySelector("#value-8");
const valueElement9 = document.querySelector("#value-9");
const valueElement10 = document.querySelector("#value-10");

// memorizzo il pulsante di somma
const buttonElement = document.querySelector("#button");

buttonElement.addEventListener('click', 
    // al click aggiungo tutti i valori a un array
    function(){
        const numbers = [
            Number(valueElement1.value),
            Number(valueElement2.value),
            Number(valueElement3.value),
            Number(valueElement4.value),
            Number(valueElement5.value),
            Number(valueElement6.value),
            Number(valueElement7.value),
            Number(valueElement8.value),
            Number(valueElement9.value),
            Number(valueElement10.value)
        ];
        
        // uso il metodo reduce per sommare al primo numero dell'array il prossimo in fila
        // finché non rimane un valore solo, la somma totale
        const sum = numbers.reduce((total, currentValue) => total + currentValue);
        resultElement.innerHTML = sum;
        
    }
)