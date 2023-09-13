/*
  Arrays:
  Conjunto de datos que se pueden almacenar en una sola variable.
  Puede contener una colección de variable que puedes ser diferentes pero pertenecen a un mismo contexto.

  Es un tipo de dato NO primitivo, ya que es clasificado como objeto

*/


let nombre = "Ale";
let edad = 26;
let puesto = "estudiante";

//Uso de un arreglo
let grupoCH31 = ["Ale", "Pao", "Piedra", "Bere", "Anki", "Eve"]; // usamos corchetes para delimitar la estructura donde se guardarán los datos.

let cosasRandom = ["casa", 26, true, null]; //Puede almacenar cualquier tipo de dato al mismo tiempo.

console.log(typeof(cosasRandom)); //Para verificar que es un tipo objeto

//Acceso a los datos almacenados en un array

//Método length: para saber el tamaño del array (nombreObjeto.funciónQueQuieresQueHaga)
console.log(grupoCH31.length);

//Acceder a un elemento
console.log(grupoCH31[0]); //Elemento que se encuentra en la posición 0.
console.log(grupoCH31[26]); //Imprime undefined ya que esa posición no está siendo utilizada por un elemento.

//Acceder a un elemento por medio de una variable.
let index = 2;//guardo la posición en una variable
console.log(grupoCH31[index]);

//Ejemplo de un array en un consultorio dental.
let px = [];
let dentistas = ["Dr. Jairo", "Dra. López", "Dr. House", "Dr. Simi"];

//Para modificar un elemento del array.
dentistas[3] = "Dr. Similares";
console.log(dentistas);

/*Métodos de Arrays*/
let listaSuper = ["Gansitos", "Coca-cola", "Maruchan", "Agua"];

////Longitud (cantidad de elementos)
console.log("La cantidad es de ", listaSuper.length);

////Método push (), para poner elementos al final del array.
listaSuper.push("Jabón", "Sopa", "Queso"); //Puedo egregar todos los elementos que sean necesarios.
console.log(listaSuper);

////Método pop() para eliminar elementos al final del array
listaSuper.pop();
console.log(listaSuper);

////Método unshift() para agregar un elemento al principio del array
listaSuper.unshift("Sabritones");
console.log(listaSuper);

////Método shift() pare eliminar el primer elemento del array
listaSuper.shift();
console.log(listaSuper);

//Obtener la posición de un elemento, sabiendo el nombre del mismo y cómo está escito exactamente.
console.log(listaSuper.indexOf("Sopa"));

////Método splice() para agregar, eliminar o reemplazar elementos
//nombreArray.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInserta2,...);

listaSuper.splice(2, 0, "Manzana", "Piña"); //empiezo en la posición 2, no voy a eliminar ningún elemento, agrego manzana y piña al array (posición).
console.log(listaSuper);

listaSuper.splice(3, 2, "Plátano"); //me posiciono en el índice 3, borro 2 elementos(elementos en la posición 3 y 4), agrego plátano(en la posición 3)
console.log(listaSuper);

////Método map() para crear un nuevo array modificado a partir de un array existente, generalmente se utiliza una función.
 let numeros = [1, 2, 3, 4, 5];
 //Crear un arreglo con los números multiplicados por dos.
 let numerosPorDos = numeros.map(function(numero){
  return numero*2;  
  });

 console.log(numerosPorDos);

 /*
 EJEMPLO: Array de px con nombre y edad. Se necesita modificar el arreglo para revisar la edad de cada pociente, si la edad es mayor a 40 años, el px necesita una atención especial

      -Tendre dos arreglos (original y otro para contener los datos extra)
      -tengo ua condición if
 */

let pacientesConsultorio = [
  {nombre:"Ale", edad:26},
  {nombre:"Felipe", edad:31},
  {nombre:"Juan", edad:23},
  {nombre:"Fátima", edad:21},
  {nombre:"Saúl", edad:62}
]; //Un arreglo de 5 pacientes y cada paciente tiene un arreglo con dos elementos (nombre y edad).

//Función para agregar el texto "necesita atención especial"
function atencionEspecial(paciente){
  let estado = "Saludable"; //Estado normal de cada paciente
  //Busco en mi objeto paciente su edad y checo si es mayor a 40 entonces cambio el estado.
  if (paciente.edad > 40){
    estado = "Necesita atención especial";
  }
  return {
    ...paciente, //Genero una copia del paciente
    estadoSalud:estado //agrego un nuevo campo al array
  };
};

//Aplicamos la función en cada elemento del arreglo
let pacientesConsultorioConEstado = pacientesConsultorio.map(atencionEspecial);

console.log(pacientesConsultorio);//Areglo con pacientes sin estado de salud.
console.log(pacientesConsultorioConEstado);//Mismo arreglo pero con un nuevo campo llamado estado de salud.
