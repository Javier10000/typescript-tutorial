//npm start

import os = require("os");

if(true){
   var x="maria";
   let y ="javier;"//tiene un ambito de bloque
}
 x="pepe";//tiene un ambito global , por eso puedo modificar el if
console.log(x)
/**
 * tipos de datos
 * string
 * number
 * boolean
 *
 *
 */
let nombre:string = "javier";
let edad:number = 20;
let mayorEdad:boolean=true;
7/**
tipos de datos especiales


any
unknow
void funcion que no queremos que devuelva nada
*/
let cualquierCosa:any="hola";
cualquierCosa=2.4;
cualquierCosa="HOLA";
console.log(cualquierCosa.toLowerCase())
/**
 * uso del tipo unknow
 */
let tipoDatosDesconocidos:unknown;
tipoDatosDesconocidos = "Nombre";


if(typeof(tipoDatosDesconocidos)== "string"){
    console.log(tipoDatosDesconocidos.toLowerCase());
}
console.log("introduce tu " + tipoDatosDesconocidos)
console.log(`tu nombre es ${nombre}`)
//ARRAYS
let numeros: number[] = [3,4,5,6,7,8]
let numeros2: number[] = [3,4,5,6,7,8]
let mixto :(number|String)[]=[3,"jose",4];
console.log(mixto)
let array2d :  number[][] = [[1,2,3],[4,5,6],[7,8,9]]
console.log(`la posicion 0 del array numeros es : ${numeros[0]}`)
//console.log(`la posicion 0 del array numeros es : ${array2d[0]!undefined?array2d[0][0]}`)
let numeros3 = [...numeros2,...numeros]
console.log(numeros3);
//metodos para trabajr con typescript
let numerosArray = [1,3,5,7,9]
//push inserta nuevo elemento dentro del array al final 
numerosArray.push(11) //[1,3,5,7,9,11]
//pop saca un elemento del array
numerosArray.pop()
console.log
numerosArray.push(13,15,17)
console.log(numerosArray)
numerosArray.unshift(0)
console.log(numerosArray.shift())
//acceso, remplazo
numerosArray[0]=-1;
console.log(numerosArray[0])
console.log(numerosArray.length-1)
//busqueda de elementos
let frutas = ["manzanas", "platanos","pera"]
//INDEX OF
console.log(frutas.indexOf("platanos"))
//INCLUDES
console.log(frutas.includes("pera"))
//FIND buscar el 1º elementos que cumplen una determinada condicion
console.log(frutas.find((value)=>{return value.length>5;}))
console.log(frutas.findIndex((value)=>{return value.length>5;}))
//FOREACH
frutas.forEach((valor:string)=>{valor.length > 5 ? console.log(valor):null});
//map -> transformar los elementos de un array sin modificar el original 
let frutasUpper = frutas.map((fruta:string)=>{return fruta.toUpperCase()})
console.log(frutasUpper);
//Filter -> filtra los elementos de un array
let frutasFiltradas = frutas.filter((frutas:string)=>{return frutas.length>6})
console.log(frutasFiltradas)
//reduce  -> acomular el valor en int y concatena en String 
let numerosEnteros1 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
numerosEnteros1.reduce((acc,elementoActual)=>{return acc=acc+elementoActual})
let nombres = ["javier","jose","matias"]
let nombreconcat = nombres.reduce((elementoAnterior,elementoActual)=>{return elementoAnterior+=" "+elementoActual})
console.log(nombreconcat)
//sort
console.log(numerosEnteros1.sort((a,b)=>{return a-b}))
console.log(nombre.slice(0,2))
console.log(numeros.join(" "))
//TUPLAS
let nombreEdad : [string, number]
nombreEdad =["jose",17]
console.log(`mi nombre es ${nombreEdad[0]}`)
console.log(`mi edad es ${nombreEdad[1]}`)
let diccionario = {1:"jose",2:"juan"}
console.log(diccionario[1])
//funciones declaradas 
/**
 * 
 * @param a primer parametro a sumar
 * @param b segundo parametro a sumar
 * @returns numero sumado
 */
function sumar (a:number,b:number):number{
    return a+b
}
let sumar2numeros = sumar(10,20);
//funciones anonimas funciones ls cuales no tiene nombre se la vamos a asignar a una variable o constante 
const fResta = function (a:number,b:number){return a-b}
console.log(fResta(5,2))
function buscarr (frutas:string[]):string|undefined{
    for(let x = 0 ; x < frutas.length;x++){
        const valorx:string|undefined = frutas[x];
        if(valorx!=undefined && valorx.length>5){
            return valorx;
            break;
        }
    }
}
//not null assertion 
//valorx!.length comprobacion de que valor nuca va ha ser nulo 
//console.log(frutas ??)
console.log(`Hola ${nombre} ${nombreEdad ?? ""}`)
function potencia(base:number,exponente:number=2){
    return base ** exponente
}
console.log(potencia,(2))
console.log()
//el operador ** eleva la base el exponente 
//funciones Flechas
const fflecha = (a:number)=> {return a}
function math(b:number,a:number,operacion:(a:number,b:number)=>number):number{
    return operacion(a,b);
}
const fsumaa = (a:number,b:number)=>
{return a+b;}
const frestar = function (a:number,b:number){return a+b}
math(1,5, fsumaa);
math(1,5, frestar )
function multipleParams (...valores:number[]){
let suma = valores.reduce((previusValue:number,currentValue:number)=>{return previusValue+=currentValue},0
)
console.log(suma)
}
multipleParams(4,3,2,1,1)
console.log("-----------------")
//funciones asincronas realiza una operacion compleaja, son operaciones que dependen de un servidor o de una api 
interface DataAPI{
    message:string,
    status:string
}
//declarar async function
async function getApiData(url:string):Promise<JSON>{
    //acceso a la api
    const respuesta = await fetch(url)
    const datos =  respuesta.json() as Promise<JSON>
    return datos;
    
}
getApiData("https://dog.ceo/api/breeds/image/random")
.then((value:JSON)=>{console.log(value)})
.catch((error)=>{console.log(error)})

//creacion de objetos 
//definir objeto en typeScript
//crreaccion de objetos literales son necesarios si no vamos a reutilizar codigo 
let persona = {
    id:1,
    nombre:"javier",
    apellido:"verdugo",
    edad:20,
    direccion:{
        calle:"madrid",
        puerta:25,
        bloque:{
            portal:"A",
            posicion:"izquierda"
        },
    },
    esMayorEdad: function ():boolean{return this.edad>=18?true:false}
}
console.log(persona.apellido)
console.log(persona.esMayorEdad())
persona.edad = 15
console.log(persona.edad)
let persona2 = {
    id:2,
    nombre:"juan",
    
}
//definir archivos de configuracion
const config = {

    version:"1.0.0",
    appName:"typeScript-Tutorial"

}
//type
//es una plantilla que me va ha permitir reutilizar codigo, todos tienen que tener la misma estructura y de esta manera podemos reutilizar codigo
type Usuario ={
  readonly  id:number,
    username:string,
    name:string,
    estaActivo:boolean
    profileURL?:string
}
let us1:Usuario = {
id:1,
username:"javier",
name:"verdugo",
estaActivo:true,
}
let us2:Usuario = {
name:"verdugo",
username:"javier",
estaActivo:true,
id:2,
}
//operar con objetos
us1.estaActivo=false;
// us1.id=2 no me dejaria por el read only lo hace clave primaria 
console.log(us1.profileURL) 
type PuestoDeTrabajo = {
    PuestoDeTrabajo:string,
    oficina:string,
}
type Empleado = Usuario & PuestoDeTrabajo;
let ep1:Empleado={
    
    username:"user1",
    name:"jaiviv",
    id:3,
    estaActivo:false,
    PuestoDeTrabajo:"programador",
    oficina:"casa"
}
//templates literal
// type Saludo = `hola ${string}`
  //  *let mensaje:Saludo = "hola"
  console.log(ep1.name)