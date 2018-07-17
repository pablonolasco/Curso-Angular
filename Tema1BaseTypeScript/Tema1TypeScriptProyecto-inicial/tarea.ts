/**
 * Todo 
 * 
 * 
 * * Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};
 */

 let names:string="Ricardo";
 let ages:number=23;

 const person={
      nombre:names,
      age:ages
 }

 /**
  *Cree una interfaz que sirva para validar el siguiente objeto
  * var batman = {
  * nombre: "Bruno Díaz",
  * artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
  *}
  * 
  * 
  * 
  */
interface Marvel{
      name:string;
      artesMarciales:string[];
}
/**
 * 
 * Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}
 */
let resultadoDobles;
resultadoDobles=(a:number,b:number)=>{
      return (a + b ) *2;
 };

 /**
  * 
  * Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
  */
 function getAvenger(nombre:string,poder?:string,arma:string="arco"){
      let mensaje:string;

      if(poder){
          mensaje=`Avenger ${nombre} ${poder} ${arma}`;
      }else{
          mensaje=`${nombre} ${poder} ${arma}`;
      }

 }

 // Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{
      base:number=0;
      altura:number=0;

     constructor(base:number,altura:number){
          this.base=base;
          this.altura=altura;
     }

     calcular():number {
          return this.base * this.altura;
     }
}
