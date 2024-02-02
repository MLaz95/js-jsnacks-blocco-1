/* Jsnack 1
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const firstWord = prompt("Scrivi una parola");
const secondWord = prompt("Scrivi un'altra parola");
const resultElement = document.querySelector("#result");



if(firstWord.length == secondWord.length){
    resultElement.innerHTML = `"${firstWord}" e "${secondWord}" hanno lo stesso numero di caratteri`
} else if(firstWord.length > secondWord.length){
    resultElement.innerHTML = `"${firstWord}" è una parola piú lunga di "${secondWord}"`;
} else {
    resultElement.innerHTML = `"${secondWord}" è una parola piú lunga di "${firstWord}"`;
}