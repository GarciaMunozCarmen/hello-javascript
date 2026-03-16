/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let array = ["perro", "gato", "pato", "león", "tigre"];

// 2. Añade dos más. Uno al principio y otro al final

array.unshift("zarigüella");
array.push("jirafa");
console.log(array);

// 3. Elimina el que se encuentra en tercera posición

array.splice(3, 1);
console.log(array);

// 4. Crea un set que almacene cinco libros

let set = new Set (["cinco horas con mario", "luces de bohemia", "el quijote", "los renglones torcidos de dios", "cien años de soledad"])

// 5. Añade dos más. Uno de ellos repetido

set.add("cien años de soledad");
set.add("la catedral del mar");
console.log(set);

// 6. Elimina uno concreto a tu elección

set.delete("el quijote");
console.log(set);

// 7. Crea un mapa que asocie el número del mes a su nombre

let map = new Map ([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(map.has(5));
console.log(map.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let arrayMeses = [6, "junio", 7, "julio", 8, "agosto"];
let mapVerano = new Map();
for (let i = 0 ; i < (arrayMeses.length - 1); i++){
    if(i % 2 == 0) {
        mapVerano.set(arrayMeses[i], arrayMeses[i + 1]);
    }
}
console.log(mapVerano)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map