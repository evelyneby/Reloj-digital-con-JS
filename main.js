//comentarios

// alert("Hola mundo esde una alerta en js");
//consola
// console.log('hola desde la consola');
//variable no pueden ser palabras reservadas
// let nombre="Evelyn";
// concatenar texto y variable
// console.log("Me llamo: ",nombre);

//Constantes
// const pi = 3.14;

//tipos de datos
//numerico
// let edad=  10;

//texto
// let saludo="hola";

//boleano true o false
// let activo=true;

// Operadores aritmeticos
// Suma +
// resta -
// Multiplicación *
// Dicisión /
// Modulo o residuo %
// increnmento ++
// decremento --

// Operadores relacionale
// mayor y menor que < >
// mayor o igual >=
// menor o igual <=
// igual que ==
// Diferente de !=

// Operadores lógicos
// y &&
// or ||
// not !

//reloj digital

function currentTime(){
    let date = new Date() ;
    var horas = date.getHours();
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();

    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos: segundos;

    let time = horas + ":" + minutos + ":" + segundos;
    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000);