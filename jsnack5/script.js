/* Snack 5:
Stampa il cubo dei primi N numeri,
(partendo da 1, il numero N indicato dall'utente è compreso)
dove N è un numero indicato dall’utente. */

const inputElement = document.querySelector("#user-number");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");

buttonElement.addEventListener('click',
    function(){
        userValue = inputElement.value;
        
        // flag
        let isPrime = true;

        // excludes anything less than 2
        if(userValue < 2){
            isPrime = false;
        } else{
            // divide the user value by every number between 2 and the value itself
            // if the remainder of our division is ever 0 then the value is not prime
            for(i = 2; i < userValue; i++){
                if(userValue % i == 0){
                    isPrime = false;
                }
            }
        }

        if (isPrime == true){
            console.log(`${userValue} is a prime number`)
        } else {
            console.log(`${userValue} is not a prime number`)
        }
        
    }
)