/*
    Corredores:
    1. Roberto
    2. Andrea
    3. Jorge
    4. Ramiro
    5. Sofía
*/

//Arreglo con las posiciones iniciales de la carrera 
// let lugaresCarrera = [
//     {nombre: "Roberto", posicion: 1},
//     {nombre: "Andrea", posicion: 2},
//     {nombre: "Jorge", posicion: 3},
//     {nombre: "Ramiro", posicion: 4},
//     {nombre: "Sofía", posicion: 5}
// ];

//Array con los corredores
let lugaresCarrera = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];

//For para imprimir las posiciones de cada corredor guardado en el array
let indiceCorredores = [];
for (let i = 0; i <= lugaresCarrera.length - 1; i++) {
    indiceCorredores[i] = i;
}
console.log(indiceCorredores);



//Roberto está en la primera posición y Jorge lo adelanta, por lo que ahora Jorge debe ir al principio, para esto utilizamos unshift()
console.log("\nArray con posiciones originales:");
console.log(lugaresCarrera);
//Primero borramos a Jorge del array Para luego agregarlo en la primera posición
lugaresCarrera.splice(lugaresCarrera.indexOf("Jorge"), 1);
lugaresCarrera.unshift("Jorge");

console.log("\nArray Con Jorge en el primer lugar:");
console.log(lugaresCarrera);

//Ahora Jorge es la primer posición, pero Ramiro lo adelanta por lo que ahora Ramiro es el primero
lugaresCarrera.splice(lugaresCarrera.indexOf("Ramiro"), 1);
lugaresCarrera.unshift("Ramiro");

console.log("\nArray cuando Ramiro adelanta a Jorge:");
console.log(lugaresCarrera);

//Roberto se lesiona y sale de la carrera, por lo que lo borramos del array.
lugaresCarrera.splice(lugaresCarrera.indexOf("Roberto"), 1);

console.log("\nArray cuando Roberto sale de la competencia por lesión:");
console.log(lugaresCarrera);

//Andrea baja un lugar, por lo que borramos a Andrea y Sofía para agregarlas de nuevo con su posición actualizada y también agregamos a José, que queda en el último lugar.
lugaresCarrera.splice(lugaresCarrera.indexOf("Andrea"), 2, "Sofía", "Andrea", "José");

console.log("\nArray con posiciones finales, que incluyen a Andrea perdinedo un lugar y a José en último lugar: ");
console.log(lugaresCarrera);