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
function saludarSinParametros(){
console.log("hola sin parametros"+nombreCompleto);

}
console.log(saludarSinParametros()) //cuando la funcion no tiene parametro no hace falta hacer un return ni hace falta poner el nombre como parametro pero si hace falta poner los parentesis

const nombre:string = "Javi"
const edad:number = 21;
function presentacion(quien:string, anios:number):string{ 
    return `${quien} tiene ${anios} años`
}
console.log(presentacion(nombre,edad)); //funcion que se pone por parametros la edad y el nombre y lo devuelve luego en la funcion 

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
console.log(cadenasDeTexto.length-1);




