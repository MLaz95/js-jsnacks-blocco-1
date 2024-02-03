/* Snack 4:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

const inputElement = document.querySelector("#user-number");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");

buttonElement.addEventListener('click',
    function(){
        // check if input number has four digits
        if (inputElement.value.length != 4){
            resultElement.innerHTML = `Please make sure your number has four digits`;

        } else {
            // turn the input number into a string
            const inputText = inputElement.value.toString();

            // split each character (digit) of the string and put in an array
            const inputDigit = inputText.split('');
            
            // add up each element of the array
            let sum = 0;
            for(i = 0; i < inputDigit.length; i++){
                sum += Number(inputDigit[i]);
            }

            // print
            resultElement.innerHTML = `The sum of the provided digits is ${sum}`;
        }
    }
)