import { notDeepEqual } from "assert";
import { log } from "console";

let miNombre:String = "Javier";

function saludo(miNombre:String) {
  console.log("hola"+ miNombre);
  
  
}
saludo(miNombre);

const PI = 3.1416;

console.log(PI);
if (miNombre=="Javier") {
  let nombre = "jose"
  console.log("el nombre es correcto");
  
  
}
/*
tipos de datos 
*/
let texto = "jose"
let numero:number = 1.2;
let numeroEntero:number = 1;
let buleano:boolean = true;
let cualquiercosa:any = "Jose"
let nulo:null = null;
let hola:string|null|number=null;
let hola1:null|string;




function saludar():void{
  console.log("hola mundo");

}
function saludarNever():never{
  console.log("hola mundo");
  while (true) {
    
      console.log("hola");

    }
  
}

cualquiercosa = 2;
console.log(cualquiercosa);

let desconocido:unknown = "jose"
if(typeof(desconocido)=="string"){
    console.log(desconocido.toUpperCase());
}
hola1="javier";
console.log(hola1.toUpperCase);
/**
 * con las comillas daleadas podemos poner un ${} y anula las comillas y se puede operar dentros
 */
console.log(`hola + ${desconocido+" como estas "+ hola1}`);
console.log(true&&false);//falso
console.log(true||false);//verdadero
let edad:number = 3;
console.log(--edad)
interface Usuario{
  nombre:string;
  edad:number;
  dni?:string;
}
let us1:Usuario = {nombre:"josee",edad:18}












