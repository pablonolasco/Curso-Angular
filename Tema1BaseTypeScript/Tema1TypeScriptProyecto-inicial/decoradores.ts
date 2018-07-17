function consola(constructor:Function){
     console.log(constructor);
}

@consola
class Vilano{
     constructor(public nombre:string){

     }
}
//*Activar "experimentalDecorators": true en el archivo tsconfig.json


