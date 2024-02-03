const inputElement = document.querySelector("#user-number");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");

buttonElement.addEventListener('click',
    function(){
        // turn the input number into a string
        const inputText = inputElement.value.toString();
        // split each character (digit) of the string and put in an array
        const inputDigit = inputText.split('')
        let sum = 0;

        // add up each element of the array
        for(i = 0; i < inputDigit.length; i++){
            sum += Number(inputDigit[i]);
        }

        // print
        console.log(sum);
        resultElement.innerHTML = `The sum of the provided digits is ${sum}`

    }
)