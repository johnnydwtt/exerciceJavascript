//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  let result = sentence.length
  console.log(sentence);
  return result;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  let result = sentence.replace('e' , ' ');
  console.log(sentence);
  return result;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let result = firstSentence.concat(secondSentence)
  console.log(firstSentence);
  console.log(secondSentence);
  return result;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let result = sentence.charAt(4);
  console.log(sentence);
  return result;
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  result = sentence.substr(0, 9)
  console.log(sentence);
  return result;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  let result = sentence.toUpperCase()
  console.log(sentence);
  return result;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  let result = sentence.toLowerCase()
  console.log(sentence);
  return result;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  let result = sentence.trim()
  return result;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  let result = Boolean(true)
  sentence.toString();
  console.log(sentence);
  return result;
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  result = fileName.split('.').pop()
  console.log(result);
  return result;
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  result = sentence.split(' ').length -1;
  console.log(result);
  return result;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  let result = sentence.split('').reverse().join('')
  return result;
}

// Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  let result = sentence.search('La Manu')
    if (result !== -1) {
      Boolean(false)
    } else {
      
    }
    return result;
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  let result = Math.abs(number)
  console.log(number);
  return result ;
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  let result = numbersArray.map(Math.abs, numbersArray)
  console.log(numbersArray);
  return result;
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  let result = Math.PI * (radius * radius);
  result = Math.round(result)  
  console.log(radius)
  return result;
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  let result = Math.hypot(a, b)
  result = Math.floor(result)
  console.log(a, b);
  return result;
}
