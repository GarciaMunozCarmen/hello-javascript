/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let string1 = "Hola";
let string2 = "JavaScript";
let string3 = string1 + " " + string2
console.log(string3);

// 2. Muestra la longitud de una cadena de texto

console.log(string1.length);

// 3. Muestra el primer y último carácter de un string

console.log(`Primer caracter ${string1.charAt(0)}\nÚltimo caracter ${string1.charAt(string1.length - 1)}`);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(`Mayúsculas: ${string1.toUpperCase()}\nMinúsculas: ${string2.toLowerCase()}`);

// 5. Crea una cadena de texto en varias líneas

let lineas = `String 
de
varias
lineas`;
console.log(lineas);

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let huecos = " h o l a ";
console.log(huecos.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(`Contiene 'Java': ${string3.includes("Java")}\nContiene 'Python': ${string3.includes("Python")}`);

// 9. Comprueba si dos strings son iguales

console.log(string1 == string2);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(string1.length == string2.length);