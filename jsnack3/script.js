/* Snack 3:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array */

// take all user values
const valueElement1 = document.querySelector("#value-1");
const valueElement2 = document.querySelector("#value-2");
const valueElement3 = document.querySelector("#value-3");
const valueElement4 = document.querySelector("#value-4");
const valueElement5 = document.querySelector("#value-5");
const valueElement6 = document.querySelector("#value-6");

const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");



buttonElement.addEventListener('click',
    function(){
        // add all input elements to an array
        const inputValues = [
            valueElement1.value,
            valueElement2.value,
            valueElement3.value,
            valueElement4.value,
            valueElement5.value,
            valueElement6.value,
        ];

        // declare empty array for our desired output
        const oddNumbers = [];

        /* cycle through each input value
            ? is it odd
            : then add to output array */
        for(i = 0; i < inputValues.length; i++){

            if((inputValues[i] % 2) != 0){
                oddNumbers.push(inputValues[i])
            }
            
        }

        // print output array
        console.log(oddNumbers);
        resultElement.innerHTML = `Out of the numbers you provided the following ones are odd:<br> ${oddNumbers}`;
    }
)