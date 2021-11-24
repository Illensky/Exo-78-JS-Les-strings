let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

posSpan = document.querySelector('#position')
let posI = monTexte.indexOf('i')
posSpan.innerHTML = posI


let stringMaj = monTexte.toUpperCase()
let chaineMajSpan = document.querySelector('#chaineMaj')

chaineMajSpan.innerHTML = stringMaj





