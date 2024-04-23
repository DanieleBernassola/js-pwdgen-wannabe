let currentElement = document.getElementById('info');

let currentText = currentElement.innerHTML;

const myName = prompt('Inserisci il tuo nome');
const myLastName = prompt('Inserisci il tuo cognome');
const myFavColor = prompt('Inserisci il tuo colore preferito');
const randomNumber = Math.random() * 10;

currentText = `${myName}${myLastName}${myFavColor}${randomNumber}`;

console.log(currentText);

currentElement.innerHTML = currentText;