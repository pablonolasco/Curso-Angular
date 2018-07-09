// Un archivo simple de TypeScript
/*let mensaje="hola";

if(true){
     let mensaje="adios";
    
}

console.log(mensaje);
*/
//tsc ejecutar en linea de comando para que guarde la configuracion tipo typescript
//tsc -init convertir a tipo type script el proyecto

/*Tipo de Datos */
let nombre:string;
let numero:number;
let booleano:boolean;
let fecha:Date;

nombre="Peter";
numero=123;
booleano=false;
fecha= new Date('2020-10-21');

let cualquierTipoDato:any;
cualquierTipoDato=15;

let spiderman={
     nombre:"Peter",
     edad:20
}

spiderman={
     nombre:"Juan",
     edad:30
}

let temaplateLiteral=`Hola ${nombre} edad (${numero})`;

//console.log(temaplateLiteral);
/**Funciones */

function activar( quien:string, objeto:string="batiseñal", momento?:string){
/**
 * momento?:string, es una variable opcional
 * No se deben declaral variables opcionales al inicio de la funcion
 * Debes cumplir con el orden en el paso de las variables al llamar la funcion
 */

     let mensaje:string;
     if(momento){
          mensaje=`${quien} activo la ${objeto} en la ${momento}`;          
     }else{
          mensaje=`${quien} activo la ${objeto}`;

     }
     console.log(mensaje);
}

//activar("Batman","lampara","noche");

/** Fetch Arrow */

let miFuncion=(info:string)=>{
     console.log(`${info}`);
}

let aprendiendo;
aprendiendo=function(){
    // Funcion tradicional
}

aprendiendo=() =>{
    console.log('Aprendiendo JS');
}

// Una linea no requiere llave

aprendiendo= () => console.log('Aprendiendo JS');

// Retonar un valor
aprendiendo= () => 'Aprendiendo JS';


// Retornando un objeto
aprendiendo= () => (
    { aprendiendo: 'Aprendiendo JS'}
);

// Pasar parametros
aprendiendo= (tecnologia:string,saludo:string) => console.log(tecnologia+' '+saludo);

let hulk={
     nombre:"Hulk",
     smash(){
          setTimeout(()=>console.log(this.nombre),1500);
          //esta es una funcion de arrow function, la cual permite a puntar 
          //a la propiedad del objeto
     }
}
//miFuncion("esta es una un arrow funcion");

/**Destucturacion de objetos y arreglos */

let avenger={
     name_a:"Steve",
     clave:"Capitan America",
     poder:"Droga"
}

let{name_a,poder,clave}=avenger;
/**
 * Cuando es un objeto no importa el orden si se coloca name_a:string, despues de los dos puntos lo toma como un alias
 * let { } modo de desctructuracion
 */

 let arregloAvenge:string[]=["Thor","Capitan","Tony"];
 let [thr,steve,tonny]=arregloAvenge;
 let [, , stark]=arregloAvenge;
 /**
  * Cuando es un arreglo, toma los valores con base a la posicion del mismo.
  */
//console.log(avenger);
//console.log(stark);

/**Promise */
/*
const aplicarDescuento= new Promise(function(resolve,reject){
     const descuento=false;
     if(descuento){
         resolve('Descuento aplicado');
     }else{
         reject('No se puede aplicar el descuento');
     }
});
aplicarDescuento.then(function(mensaje){
 console.log(mensaje);
}).catch(function(error){
 console.log(error);//va de la mano de reject
});*/
