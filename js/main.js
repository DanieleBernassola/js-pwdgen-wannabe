let currentElement = document.getElementById('info');

let currentText = currentElement.innerHTML;

const myName = prompt('Inserisci il tuo nome');

currentText = `${myName}`;

currentElement.innerHTML = currentText;