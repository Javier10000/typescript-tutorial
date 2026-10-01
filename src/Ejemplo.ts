//copiar de un array a otro
const numeros:number[][] = [[1,2,3,4,5,6,7,8,9]];
const copiaNumero:number [][] = [...numeros];
console.log(copiaNumero);
//trastear con array
let cadenasDeTexto:String[] = ["perro", "gato" , "tortuga" , "jirafa"]
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
console.log("devuelve del principio --> ",cadenasDeTexto.shift())
console.log(cadenasDeTexto)


 