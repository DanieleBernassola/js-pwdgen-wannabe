let currentElement = document.getElementById('info');

let currentText = currentElement.innerHTML;

const myName = prompt('Inserisci il tuo nome');
const myLastName = prompt('Inserisci il tuo cognome');
const myFavColor = prompt('Inserisci il tuo colore preferito');

currentText = `${myName}${myLastName}${myFavColor}21`;

currentElement.innerHTML = currentText;