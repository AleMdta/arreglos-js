/*
Sistema para registrar pacientes y sus citas utilizando métodos de arrays.
    To Do:
        -Un array para pacientes
        -Un array para citas
        -Prompt para registrar los datos
        -Datos: nombre, apellido, fecha, edad, hora
        -función registrarPaciente
        -función registrarCita
        -Métodos: push, for each, splice
*/

//Array para pacientes
let pacientes = [];

//Función para registrar un nuevo px
function registrarPx(nombre, edad){ //1. Pedir los datos

    //Crear un array dentro de otro array
    let paciente = {
        nombre, //2. Guardar los datos en una variable dentro de mi array paciente
        edad,
        citas: []
    };
    //Agregar al px al array
    pacientes.push(paciente); //3. Hacer push a los datos para almacenarlos en el array principal (cada array de paciente con edad y nombre, se guarda en mi array de pacientes)

    return paciente; //El retornopermite: A. Que la función se detenga. B. Poder sacar al paciente de la función para poder usarlo en otra función, para el registro de citas. (Sin el return, no podría usar a mi paciente fuera de esta función)
}

//Función para registrar citas de un paciente
function registrarCita(paciente, fecha, hora){
    paciente.citas.push( //en mi array paciente, entro a la variable citas, que es otro array y ahí voy a agregar la fecha y hora
        {
            fecha,
            hora
        }
    );
}

//Función para mostrar la info del paciente con su cita
function mostrarInfoPx(paciente){
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad);
    //forEach para imprimir los datos de la citas
    paciente.citas.forEach((cita, indice)=>{
        console.log("Fecha de la cita registrada: " + cita.fecha);
        console.log("Hora de la cita registrada: " + cita.hora);
    });
}


// -----------------Datos de los pacientes-------------------

//Registar un paciente desde la invoación de una función
let paciente1 = registrarPx("Carlos", 36); //Mando llamar a mi función y le paso como parámetros los datos del paciente y lo guardo en una variable.
let paciente2 = registrarPx("Rosa", 42);

//Registar cita de un paciente
registrarCita(paciente1, "2023-09-12", "1:00 PM") //Mando llmara a la función de registro , le paso los datos del paciente, la fecha y hora de la cita
registrarCita(paciente2, "2023-09-26", "7:00 PM")

//Llamar función para mostrar la info del paciente
mostrarInfoPx(paciente1);
mostrarInfoPx(paciente2);

// -------------------Fin de los datos px--------------------

/*
    forEach: método de arrays que tiene como objetivo iterar o recorrer cada elemento del array para poder aplicarle alguna función. Esto lo hace en el array original. 
    Por lo general es utilizado para imprimir información del arreglo.

    Se aprece al MAP(), pero la diferencia radic a en que le map genera un nuevo array y ahí aplica la función, en cambio el foreach lo hace sobre el array original.

    Sintaxis:
        array.forEach(function(elemento, índice, arreglo))
            -elemento: el alemento actual a procesar
            -índice: posición del elemento actual
            -arreglo: array que se está iterando

*/

//Ejemplo
let carritoSuper = ["jabón", "pan", "huevo", "pinol"]; //array principla que contiene a todos los elementos

//Por cada elemento que se encuentra dentro de mi array principal haz...(en este caso imprime el producto y su índice)
carritoSuper.forEach(function(producto, indice){ //en la variable producto se almacenan temporalmente los elementos del array carrito y su valor cambia según el elemento en el que está iterando.
    console.log("Producto " + producto + " con la posición " + indice );
}); //Esta función no se ejecuta si el array no tiene elementos, ya que su función es precismanete iterar sobre los elementos que encuentra dentro de un array
