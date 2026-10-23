
// Creamos objetos
type Direccion = { calle: string, numero: number }
//objeto con objeto dentro
type Persona = { nombre: string, apellidos: string, direccion: Direccion }
/**
 * definimos objeto persona
 * 1º forma
 */
let p1: Persona = {
    nombre: "Pepe",
    apellidos: "Verdugo",
    direccion: {
        calle: "Alamos",
        numero: 3,
    }

}
console.log(p1.nombre + " " + p1.apellidos + " vive en la calle: " + p1.direccion.calle + " numero " + p1.direccion.numero + "º");
/**
 * definimos objeto direccion
 * 2º forma
 */
let p3: Direccion = {
    calle: "Almeria",
    numero: 25
}
/**
 * creamos p2 y le añadimos la direccion ya definida 
 */
let p2: Persona = {
    nombre: "Maricarmen",
    apellidos: "Alvarez",
    direccion: p3
}

console.log(`nombre: ${p2.nombre} apellidos: ${p2.apellidos} calle: ${p2.direccion.calle} numero: ${p2.direccion.numero}º`);
/**
 * desectruturacion de objeto
 */
let { nombre, apellidos } = p1

console.log(nombre);
/**
 * objetos con patrones y restricciones 
 * Preguntar como puedo hacer eso mas simplificado
 */
type Resenna =  1 |  2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 

type Gmail = `${string}@${"gmail"|"yahoo"}.${"es" | "com"}`; //no puede haber espacios entre las comillas
type Colegio = { nombre:string, id:string , cp:string , gmail: Gmail,ubi:string , resenna:Resenna};
let col1:Colegio = {
    nombre:"Reina Sofia",
    id:"12345L",
    gmail:"javier@gmail.es",
    cp:"41530",
    ubi:"Moron de la frontera",
    resenna:1
}


