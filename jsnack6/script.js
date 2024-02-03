// Snack 6:
// Calcola la somma e la media dei primi 10 numeri.

const resultElement = document.querySelector('#result');
let sum = 0;

for(i = 1; i <= 10; i++){
    sum += i;
}

const average = sum / 10;

resultElement.innerHTML = `The sum of digits 1 to 10 is ${sum} <br> Their average is ${average}`

