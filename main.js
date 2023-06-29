/**
 *  EXO 1 :
 * Écrivez une fonction qui prend deux nombres en argument
 * et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
 */
export function exo1(num1, num2) {
  return num1 > num2;
}

/**
 * EXO 2 :
 * Implémentez une fonction pour inverser une chaîne de caractères.
 * Vous ne devez pas utiliser la méthode reverse
 */
export function exo2(str) {
  let result = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const char = str[index];
    result += char;
  }

  return result;
}

/**
 * EXO 3 :
 * Un palindrome est un mot qui se lit dans les deux sens ("kayak")
 * Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
 */
export function exo3(str) {
  return exo2(str) === str;
}

/**
 * EXO 4 :
 * Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
 */
export function exo4(num) {
  let result = 1;
  for (let index = 1; index <= num; index++) {
    result *= index;
  }
  return result;
}

/**
 * EXO 5 :
 * Implémentez une fonction pour vérifier si un nombre est premier.
 * Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
 */
export function exo5(num) {
  let primes = [2, 3, 5];
  for (let index = 0; index < primes.length; index++) {
    const prime = primes[index];
    if (num !== prime && num % prime === 0) return false;
  }

  return true;
}

/**
 * EXO 6 :
 * Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
 */
export function exo6(arr) {
  return Math.max(...arr);
}

/**
 * EXO 7 :
 * Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
 * "La crise économique" et "Le scénario comique" sont des anagrammes
 * Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
 */
export function exo7(str1, str2) {
  const trimedStr1 = str1.toLowerCase().replaceAll(" ", "");
  const trimedStr2 = str2.toLowerCase().replaceAll(" ", "");
  let countTrimedStr1 = {};
  let countTrimedStr2 = {};

  // count all char str1
  for (let indexStr1 = 0; indexStr1 < trimedStr1.length; indexStr1++) {
    const charStr1 = trimedStr1[indexStr1];
    if (typeof countTrimedStr1[charStr1] !== "number") {
      countTrimedStr1[charStr1] = 1;
    } else {
      countTrimedStr1[charStr1]++;
    }
  }

  // count all char str2
  for (let indexStr2 = 0; indexStr2 < trimedStr2.length; indexStr2++) {
    const charStr2 = trimedStr2[indexStr2];
    if (typeof countTrimedStr2[charStr2] !== "number") {
      countTrimedStr2[charStr2] = 1;
    } else {
      countTrimedStr2[charStr2]++;
    }
  }

  // check the longest word
  const maxLength = Math.max(trimedStr1.length, trimedStr2.length);

  // if str1 is bigger then str2 loop into it
  const str1IsMax = maxLength === Object.entries(countTrimedStr1).length;
  if (str1IsMax) {
    for (
      let index = 0;
      index < Object.entries(countTrimedStr1).length;
      index++
    ) {
      const entrie = Object.entries(countTrimedStr1)[index];
      // if the actual number doesn't exist on countTrimedStr1 or the value is different
      if (
        typeof countTrimedStr2[entrie[0]] !== "number" ||
        countTrimedStr2[entrie[0]] !== entrie[1]
      ) {
        return false;
      }
    }
  } else {
    for (
      let index = 0;
      index < Object.entries(countTrimedStr2).length;
      index++
    ) {
      const entrie = Object.entries(countTrimedStr2)[index];
      if (
        typeof countTrimedStr1[entrie[0]] !== "number" ||
        countTrimedStr1[entrie[0]] !== entrie[1]
      ) {
        return false;
      }
    }
  }

  return true;
}

/**
 * EXO 8 :
 * Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
 */
export function exo8(str) {
  //loop into str
  for (let indexStr = 0; indexStr < str.length; indexStr++) {
    const char = str[indexStr];
    for (let index = indexStr + 1; index < str.length; index++) {
      const charToCompare = str[index];
      if (char === charToCompare) return false;
    }
  }
  return true;
}

/**
 * EXO 9 :
 * Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier
 */
export function exo9(arr) {
  let firstMaxArr = arr[0];
  let secondMaxArr = arr[1];
  if (firstMaxArr < secondMaxArr) {
    const tmp = firstMaxArr;
    firstMaxArr = secondMaxArr;
    secondMaxArr = tmp;
  }
  for (let index = 2; index < arr.length; index++) {
    const element = arr[index];
    if (element > firstMaxArr) {
      const tmp = firstMaxArr;
      firstMaxArr = element;
      secondMaxArr = tmp;
    } else if (element > secondMaxArr) {
      secondMaxArr = element;
    }
  }

  return secondMaxArr;
}

/**
 * EXO 10 :
 * Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
 */
export function exo10(arr) {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 === 0) result += element;
  }

  return result;
}

/**
 * EXO 11 :
 * Créez une fonction pour inverser l'ordre des mots dans une phrase.
 */
export function exo11(str) {
  console.log(str.split(" ").reverse().join(" "));
}

/**
 * EXO 12 :
 * Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
 */
export function exo12(arr, occurrence) {
  return arr.filter((item) => item !== occurrence);
}

/**
 * EXO 13
 * Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
 */
export function exo13(str) {
  return str.match(/[aeiouy]/gm).length;
}

/**
 * EXO 14
 * Implémentez une fonction qui permet de trouver le plus petit nombre
 * d'un tableau à 2 dimensions passé en argument
 */
export function exo14(arr) {
  let min = arr[0][0];
  for (let index = 0; index < arr.length; index++) {
    const arrSecond = arr[index];
    for (
      let indexArrSecond = 0;
      indexArrSecond < arrSecond.length;
      indexArrSecond++
    ) {
      const element = arrSecond[indexArrSecond];
      if (element < min) min = element;
    }
  }

  return min;
}

/**
 * EXO 15
 * Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
 * dans un tableau de nombre entier (deuxieme argument).
 */
export function exo15(num, arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === num) result.push(index);
  }

  return result;
}

/**
 * EXO 16
 * Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
 */
export function exo16(num) {
  return num.toString().length;
}
