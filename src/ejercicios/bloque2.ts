import { Interface } from "readline";

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
// como puedo simplificar esto: 
type Resenna =  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 

type Gmail = `${string}@${"gmail"|"yahoo"}.${"es" | "com"}`; //no puede haber espacios entre las comillas
type Colegio = { nombre1:string, id:string , cp:string , gmail: Gmail,ubi:string , resenna:Resenna, saludo:() => void};
let col1:Colegio = {
    nombre1:"Reina Sofia",
    id:"12345L",
    cp:"41530",
    ubi:"Moron de la frontera",
    gmail:"javier@gmail.es",
    resenna:1,
    saludo:() => {console.log("hola "+col1.nombre1)}
}
let col2:Colegio = {
     nombre1:"PerroSanxe",
    id:"12345L",
    gmail:"javier@gmail.es",
    cp:"41530",
    ubi:"Moron de la frontera",
    resenna:1,
    saludo:() => {console.log("hola "+col2.nombre1)}
}
//la funcion de la desectruturacion es sacar los atributos de los objetos para no tener que llamar como col1.nombre1
let {nombre1,id,gmail,cp,ubi,resenna} = col1;
// let {nombre1,id,gmail,cp,ubi,resenna} = col2; no podemos desectructurar dos objetos preguntar jose 
console.log(nombre1);
console.log(col1.saludo());
//al mostrar un objeto que teine una funcion no se muestr la funcion a no ser que llames solo a ella --> col1.saludo() 
let col3:Colegio = {
    nombre1:"jose",
    cp:"23445",
    id:"d",
    gmail:"javier@gmail.com",
    resenna:4,
    ubi:"moron",
    saludo:() => {console.log("hola "+col2.nombre1)}

};
/**
 * declaracion de una tupla 
 */
let tupla1:[string,string] = ["perro","Sanxe"]

/**
 * Enum se define con enum nombre {atributo,atributo}
 */
enum DiaSemana{
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
/**
 * console.log(DiaSemana.Martes); Accede y devuleve la posicion del Enum
 */
console.log(DiaSemana.Martes);
/**
 * console.log(DiaSemana[1]); Accedemos a la posicion y devuelve el valor de esa posicion (martes)
 */
console.log(DiaSemana[1]);
/**
 * Enum se define con enum nombre {atributo:valor,atributo:valor}
 */
enum DiaSemanaDefinidos{
    Lunes="d1",
    Martes="d2",
    Miercoles="d3",
    Jueves="d4",
    Viernes="d5",
    Sabado="d6",
    Domingo="d7"
}
/**
 * console.log(DiaSemanaDefinidos.Lunes) retorna el valor definido en el parametro
 */
console.log(DiaSemanaDefinidos.Lunes);
/**
 * no se puede acceder a lunes mediante su valor (d1) --> console.log(DiaSemanaDefinidos["d1"]);
 */
function muestraDia(d:string){
    switch (d) {
        case DiaSemanaDefinidos.Lunes:
            console.log(`es ${DiaSemana[0]}`);
            
            break;
            case DiaSemanaDefinidos.Martes:
            console.log(`es ${DiaSemana[1]}`);
            
            break;
            case DiaSemanaDefinidos.Miercoles:
            console.log(`es ${DiaSemana[2]}`);
            
            break;
            case DiaSemanaDefinidos.Jueves:
            console.log(`es ${DiaSemana[3]}`);
            
            break;
            case DiaSemanaDefinidos.Viernes:
            console.log(`es ${DiaSemana[4]}`);
            
            break;
            case DiaSemanaDefinidos.Sabado:
            console.log(`es ${DiaSemana[5]}`);
            
            break;
            case DiaSemanaDefinidos.Domingo:
            console.log(`es ${DiaSemana[6]}`);
            
            break;
    
        default:
            break;
    }


}
/**
 * muostramos de 1 que es el valor del caso para que nos muestre su return
 */
muestraDia("d2")

enum EstadoPedidos {
    Pendiente,
    EnProceso,
    EnPreparacion,
    EnReparto,
    Entregado
}
type statusPedido = "PENDIENTE" | "ENPROCESO"| "ENPREPARACION";

let estado:statusPedido = "ENPROCESO"

console.log(estado);
/**
 * Interfaces
 */

interface Usuario {
    readonly id:number, //no se puede modificar
    nombre:string,
    email:Gmail
}
let u1:Usuario = {id:1,nombre:"fernando",email:"javier@gmail.com"}
//no se puede hacer ya que la propiedad es readOnly --> u1.id = 1

type Cargo = "Informatico" | "Administrador" | "Colegiado";
/**
 * cuando creamos dos interfaces iguales no se tapan se suman sus atributos 
 */
interface Empleado extends Usuario {
    readonly idEmpleado:number,
    cargo:Cargo
} 
interface Empleado extends Usuario{
    resenna:Resenna
}
// al eredar de usuario nos da error porque tenemos que tener los complementos del usuario --> let e1:Empleado = {idEmpleado:1,cargo:"Informatico"}
let e1:Empleado = {nombre:"alberto",email:"albertocu@gmail.com",id:3,idEmpleado:1,cargo:"Informatico",resenna:1}
console.log(e1);

