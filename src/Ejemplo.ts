import { log } from "console";

/**
 * funcion con parametro
 */
let nombreCompleto: string = "Javier Verdugo mena"
function saludar(nombreCompleto: string) {
    return "Hola " + nombreCompleto;
}
console.log(saludar(nombreCompleto));//para que te imprima la funcion tienes que poner la llamada a la funcion con el parametro nombreCompleto
/**
 * funcion sin parametros 
 */
function saludarSinParametros() {
    console.log("hola sin parametros" + nombreCompleto);

}
console.log(saludarSinParametros()) //cuando la funcion no tiene parametro no hace falta hacer un return ni hace falta poner el nombre como parametro pero si hace falta poner los parentesis

const nombre: string = "Javi"
const edad: number = 21;
function presentacion(quien: string, anios: number): string {
    return `${quien} tiene ${anios} años`
}
console.log(presentacion(nombre, edad)); //funcion que se pone por parametros la edad y el nombre y lo devuelve luego en la funcion 

//funciones anonimas 


//copiar de un array a otro
const numeros: number[][] = [[1, 2, 3, 4, 5, 6, 7, 8, 9]];
const copiaNumero: number[][] = [...numeros];

console.log(copiaNumero);
//trastear con array
let cadenasDeTexto: String[] = ["perro", "gato", "tortuga", "jirafa"]
console.log(cadenasDeTexto)
//añade a la ultima posicion del array
cadenasDeTexto.push("cerdo");
console.log(cadenasDeTexto)
//elimina la ultima posicion del array
cadenasDeTexto.pop();
console.log(cadenasDeTexto)
//añade al principio del array
cadenasDeTexto.unshift("vaca")
console.log(cadenasDeTexto)
//quita del principio y muestra la posicion 0 del array
console.log("devuelve del principio --> ", cadenasDeTexto.shift())
console.log(cadenasDeTexto)
//devuelve la ultima posicion del array 
console.log(cadenasDeTexto.length - 1);

//funciones anonimas
const sumar = function (a: number, b: number): number {
    return a + b;
}
console.log(sumar(1, 2));

//funcion flecha 

const restaOsuma = (a: number, b: number): number => {
    if (a > b) {
        return a + b;
    } else {
        return a - b
    }
}

console.log(restaOsuma(4, 8));
//copiar array 
//
// 
const arraUnoDiez: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const copiaArraUnoDiez: number[] = [...arraUnoDiez]

console.log("array antes: ", copiaArraUnoDiez);

copiaArraUnoDiez.pop();

const copiaCopiaArraUnoDiez: number[] = [...copiaArraUnoDiez]

console.log("array ahora", copiaCopiaArraUnoDiez);

const concatenacionCopiaCopiaArraUnoDiez: number[] = [...copiaCopiaArraUnoDiez, 11, 12, 13, 14]
concatenacionCopiaCopiaArraUnoDiez.push(15);
console.log("array ahora concatenado", concatenacionCopiaCopiaArraUnoDiez);

/**
 * uso del for each con array
 */
let verduras: string[] = ["pimientos", "berengenas", "cebollas", "calabacin", "puerro"];
let recorrerVerduras = verduras.forEach((nombres: string, indice: number) => {
    if (nombres.length >= 6 && nombres.length <= 8) {
        console.log(nombres)
    }


});
//findIndex de 2 maneras devulebe la 1 posicion que encuentra respecto a la condicion 
let buscarfind = verduras.findIndex((verdura) => verdura == "calabacin")
console.log(buscarfind);
console.log("------------------------------");
// devuelve la primera posicion que cupla la condicion 
let buscar = verduras.findIndex((verdura: string) => verdura.length < 8);
console.log(buscar);
//find busca y devuelve el primer nombre que cumole la condicion
let buscarPorNombre = verduras.find((verdura: string) => verdura.length < 8);
console.log(buscarPorNombre);
//el map añade a todos los componentes del array 
let mapearVerduras = verduras.map((verdura:string) => verdura + "a");
console.log(mapearVerduras);
//filter devuelve todas las verduras que complan la condicion 
let filtrarVerduras = verduras.filter((verduras) => verduras.length <9);
console.log(filtrarVerduras)
//includes devuelve true o false si encuentra el elemento dentro del array
let incluirFrutas = verduras.includes("puerro")
console.log(incluirFrutas);
//join une el elemento que le pongas al array
let verdurasPorComas = verduras.join(",") 

console.log(verdurasPorComas);
//funcion flecha
let precio = 10;
let funciFle = ((precio:number)=> {return precio*0.21}) 
console.log(funciFle(precio));

let ponerEspacio = verduras.join("; ")
console.log(ponerEspacio);

// for...of : recorre VALORES


for (const verdura of verduras) {
  console.log(`for...of -> ${verdura}`);
}

// for...in : recorre CLAVES (índices o propiedades)
for (const verdura in verduras) {
  console.log(`for...in -> índice ${verdura}`);
}
let alumnos:string[] = ["javier","pablo","juan","fernando"]
console.log(alumnos);
//filtrar alumnos por nombre
function filtrarAlumnos(nombre:string){
    for (let index = 0; index < alumnos.length; index++) {
        if (alumnos[index] == "javier") {
            console.log(alumnos);
            
            
        }
        
        
    }

    
}
let arrayNumeros:number[] = [1,2,3,4,5,6,77,8,9]
let mayor = arrayNumeros.reduce((act,acc)=> {return act > acc ? act:acc});
console.log(mayor);

    

























