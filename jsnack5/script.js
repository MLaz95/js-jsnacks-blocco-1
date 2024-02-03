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
        // set up empty array for our cubes
        const cubes = [];

        // counts from 1 to user number
        for(i = 1; i <= userInput; i++){
            // cubes current number and adds to the cubes array
            cubes.push(Math.pow(i, 3));
        }
        // print
        resultElement.innerHTML = `Here is the cube of each number between 1 and ${userInput} <br> ${cubes}`
    }
)