import { log } from "console";
console.log("------------------------------------------------------------------------");
console.log("\x1b[31m\x1b[1mEjercicio 1\x1b[0m");
//objeto Grupo
const Grupo = { grupo: "DAM2", tutor: "Ana Serrano" }

//constantes 
const NOMBRECENTRO: string = "IES Carrillo Salcedo";
const CICLO: string = "Desarrollo de aplicaciones multiplataforma";
const PLAZASTOTALES: number = 30;
//variable
let matriculados: number = 26
let fichasLibres: number = PLAZASTOTALES - matriculados;
let alta: number = 2
let matriculadosAct: number = matriculados + alta;
let ocupacion: number = matriculadosAct * 100 / PLAZASTOTALES;
let hayPlazas: string;
if (matriculadosAct < PLAZASTOTALES) {
    hayPlazas = "Quedan Plazas"

} else {
    hayPlazas = "no hay plazas"
}



console.log(NOMBRECENTRO, " - ", CICLO);
console.log("matriculados: ", matriculados, " de ", PLAZASTOTALES);
console.log("plazas Libres", fichasLibres);
console.log("tras dos de alta: ", matriculadosAct, "matriculados", ", ", alta, " libres");
//con el toFixed decimos cuantos decimales queremos que tenga
console.log("porcentajes: " + ocupacion.toFixed(2) + "%");
console.log(hayPlazas);
console.log("Grupo ", Grupo.grupo + " tutor: " + Grupo.tutor);
console.log("------------------------------------------------------------------------");
console.log("\x1b[31m\x1b[1mEjercicio 2\x1b[0m");
let notaCorregida: null | number = 8.5
let notaSinCorregir: null | number = null;
let nota = 0;
type Alumno = {
    contacto?: Contacto;


}
type Contacto = {
    telefono?: string;
    email?: string;
    nombre: string;
}
const alumno1: Alumno = {
    contacto: {
        nombre: "ana",
        email: "ana@ies.es"
    }
}
const alumno2: Alumno = {
    contacto: {
        nombre: "luis"
    }

}


console.log("Practica: ", notaCorregida ?? "sin entregar");
console.log("Examen: ", notaSinCorregir ?? "sin corregir");
console.log("con ||: ", nota || "sin nota");
console.log("con ??: ", nota ?? "sin nota");
console.log("Email de ", alumno1.contacto?.nombre, ":", alumno1.contacto?.email ?? "no consta");
console.log("Email de ", alumno2.contacto?.nombre, ": ", alumno2.contacto?.email ?? "no consta");
console.log("Telefono de", alumno1.contacto?.nombre, " : ", alumno1.contacto?.telefono ?? "no consta");

let numero: unknown = "7.32"
if (typeof numero === "string") {
    const comoNumero = Number(numero);
    console.log("Convertida numero: " + comoNumero.toFixed(2));

}




