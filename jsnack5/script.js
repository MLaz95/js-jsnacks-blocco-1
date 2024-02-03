/* Snack 5:
Stampa il cubo dei primi N numeri,
(partendo da 1, il numero N indicato dall'utente è compreso)
dove N è un numero indicato dall’utente. */

const inputElement = document.querySelector("#user-number");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");

buttonElement.addEventListener('click',
    function(){
        const userInput = inputElement.value;
        const cubes = [];

        for(i = 1; i <= userInput; i++){
            cubes.push(Math.pow(i, 3));
        }
        
        resultElement.innerHTML = `Here is the cube of each number between 1 and ${userInput} <br> ${cubes}`
    }
)