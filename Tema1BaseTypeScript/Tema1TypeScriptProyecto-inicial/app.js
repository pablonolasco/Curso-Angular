"use strict";
// Un archivo simple de TypeScript
/*let mensaje="hola";

if(true){
     let mensaje="adios";
    
}

console.log(mensaje);
*/
//!tsc ejecutar en linea de comando para que guarde la configuracion tipo typescript
//!tsc -init convertir a tipo type script el proyecto
/**
 * TODO Tipo de Datos
 *  */
var nombre;
var numero;
var booleano;
var fecha;
nombre = "Peter";
numero = 123;
booleano = false;
fecha = new Date('2020-10-21');
var cualquierTipoDato;
cualquierTipoDato = 15;
var spiderman = {
    nombre: "Peter",
    edad: 20
};
spiderman = {
    nombre: "Juan",
    edad: 30
};
var temaplateLiteral = "Hola " + nombre + " edad (" + numero + ")";
//console.log(temaplateLiteral);
/**
 * TODO Funciones
 * */
function activar(quien, objeto, momento) {
    /**
     * *momento?:string, es una variable opcional
     * *No se deben declaral variables opcionales al inicio de la funcion
     * *Debes cumplir con el orden en el paso de las variables al llamar la funcion
     */
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
//activar("Batman","lampara","noche");
/**
 * TODO Fetch Arrow
 * */
var miFuncion = function (info) {
    console.log("" + info);
};
var aprendiendo;
aprendiendo = function () {
    // Funcion tradicional
};
aprendiendo = function () {
    console.log('Aprendiendo JS');
};
// Una linea no requiere llave
aprendiendo = function () { return console.log('Aprendiendo JS'); };
// Retonar un valor
aprendiendo = function () { return 'Aprendiendo JS'; };
// Retornando un objeto
aprendiendo = function () { return ({ aprendiendo: 'Aprendiendo JS' }); };
// Pasar parametros
aprendiendo = function (tecnologia, saludo) { return console.log(tecnologia + ' ' + saludo); };
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre); }, 1500);
        //esta es una funcion de arrow function, la cual permite a puntar 
        //a la propiedad del objeto
    }
};
//miFuncion("esta es una un arrow funcion");
/**
 * TODO Destucturacion de objetos y arreglos
 *
  */
var avenger = {
    name_a: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
var name_a = avenger.name_a, poder = avenger.poder, clave = avenger.clave;
/**
 ** Cuando es un objeto no importa el orden si se coloca name_a:string, despues de los dos puntos lo toma como un alias
 * *let { } modo de desctructuracion
 */
var arregloAvenge = ["Thor", "Capitan", "Tony"];
var thr = arregloAvenge[0], steve = arregloAvenge[1], tonny = arregloAvenge[2];
var stark = arregloAvenge[2];
function enviarMision(xmen) {
    console.log('Enviando a:' + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log('Enviando al cuartel:' + xmen.nombre);
}
var wolwerine = {
    nombre: 'Wolverine',
    poder: 'Regeneracion'
};
enviarMision(wolwerine);
enviarCuartel(wolwerine);
