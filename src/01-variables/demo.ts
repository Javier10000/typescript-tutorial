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
interface Uusuario{
  nombre:string;
  edad:number;
  dni?:string;
}

type Usuario = { nombre: string; direccion?: { ciudad: string } };

const u1: Usuario = { nombre: "Ana", direccion: { ciudad: "0" } };
const u2: Usuario = { nombre: "Luis" };

// Optional chaining `?.`: si `direccion` es undefined, devuelve undefined en vez de romper.
console.log("u1 ciudad ->", u1.direccion?.ciudad ?? "nada");
console.log("u2 ciudad ->", u2.direccion?.ciudad ); // undefined

let nombre1:string|null = "Javier Verdugo";
console.log(nombre1!.toLowerCase);
let edadd:number=18;
console.log(`Jose es: ${edadd>=18?'mayor de edad':'es menor de edad'}`)

let numeross = [1,2,3,4,5,6]

let p1 = {nombre:"javi", apellidos: "Rodriguez"}
let p1_contacto = {...p1,email:"javivi@hmail.com"}
let numeross_copy = [...numeross,8,9,]

console.log(numeross_copy)
console.log(numeross);
console.log(p1);
console.log(p1_contacto);

//condicionales y bucles
let array = [1,1,2,3,4,34,2,3,4]
for(const dato of array){
  console.log(dato + " " + array);
  
}
/**
 * estructured
 */
for(const valor of array){
  if (valor%2) {
    console.log(valor);
  }else{
    continue
  }
}
let arrays = [1,2,"tree",4,5,6];
let arrays1:(number|String) [][] = [[1,3,4,5,6,7], [1,2,4]];
















