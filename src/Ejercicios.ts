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
console.log("------------------------------------------------------------------------");
let arrayNotas = [2, 3, 4, 5.5, 10, 3, 5, 11];
console.log("\x1b[31m\x1b[1mEjercicio 3\x1b[0m");

function calificar(nota: number) {
    if (nota <= 10 && nota >= 9) { return console.log(nota, " --> sobresaliente"); }
    if (nota < 9 && nota >= 7) { return console.log(nota, " --> notable"); }
    if (nota < 7 && nota >= 6) { return console.log(nota, " --> bien"); }
    if (nota < 6 && nota >= 5) { return console.log(nota, " --> suficiente"); }
    if (nota < 5 && nota >= 0) { return console.log(nota, " --> insuficiente"); }
    if (nota < 0 || nota > 10) { return console.log(nota, " --> nota no valida"); }


}
let mes: number = 8;
function convocatoria(mes: number) {
    switch (mes) {
        case 3:
            return console.log("mes: ", mes, " --> Convocatoria Parcial");
            break;
        case 6:
            return console.log("mes: ", mes, " --> Convocatoria ordinaria");
            break;
        case 9:
            return console.log("mes: ", mes, " --> Convocatoria extraordinaria");
            break;

        default:
            return console.log("mes: ", mes, " --> sin convocatorias para este mes");

            break;
    }

}
for (let index = 0; index < arrayNotas.length; index++) {

    calificar(arrayNotas[index])
}

convocatoria(mes)
let aprobados = 0;
let suspensos = 0;
for (let index = 0; index < arrayNotas.length; index++) {
    if (arrayNotas[index] >= 5 && arrayNotas[index] <= 10) {
        aprobados++
    } else if (arrayNotas[index] >= 0 && arrayNotas[index] < 5) {
        suspensos++;
    }

}
console.log("suspensos --> ", suspensos);
console.log("aprobados --> ", aprobados);
for (let index = 0; index < arrayNotas.length; index++) {
    if (arrayNotas[index] == 10) {
        console.log("el diez esta en la posicion: [", index, "]");
        break;

    }
}
console.log("------------------------------------------------------------------------");
console.log("\x1b[31m\x1b[1mEjercicio 4\x1b[0m");
let arrayDeNombres: string[] = ["Ana", "Luis", "Marta"]


console.log("inicial --> ", arrayDeNombres);
arrayDeNombres.push("Pedro", "Lucia")
console.log("tras --> ", arrayDeNombres);
arrayDeNombres.unshift("Carlos")
console.log("tras traslado --> ", arrayDeNombres);
arrayDeNombres.shift();
console.log("baja de carlos --> ", arrayDeNombres);
console.log("¿Esta Marta? --> ", arrayDeNombres.includes("Marta"));
console.log("¿Esta Sofia? --> ", arrayDeNombres.includes("Sofia"));
console.log("Posicion de Lucia --> ", arrayDeNombres.indexOf("Lucia"));
console.log("Posicion de Sofia --> ", arrayDeNombres.indexOf("Sofia"));
let arrayOrdenado = [...arrayDeNombres].sort((a, b) => a.localeCompare(b))
console.log("Alfabetico --> ", arrayOrdenado);
console.log("Ordenado como el original --> ", arrayDeNombres);
console.log("Para el Acta --> ", arrayDeNombres.map(item => item.toUpperCase()));
console.log("nombre > 4 letras ->", arrayDeNombres.filter((nombre: string) => nombre.length > 4));
console.log("Listado: ", arrayDeNombres.join(", "));
console.log("------------------------------------------------------------------------");
console.log("\x1b[31m\x1b[1mEjercicio 5\x1b[0m");
//let arrayNotas = [2, 3, 4, 5.5, 10, 3, 5, 11];
function media() {
    let cont = 0;
    let suma = 0;
    for (let index = 0; index < arrayNotas.length; index++) {
        cont++;
        suma += arrayNotas[index];

    }
    return suma / cont;
}
function maximaMinima() {
    let alta = 0;
    let baja = 0;
    for (let index = 0; index < arrayNotas.length; index++) {
        if (arrayNotas[index] > alta) {
            alta = arrayNotas[index]

        }
    }

    baja = alta;

    for (let index = 0; index < arrayNotas.length; index++) {
        if (arrayNotas[index] <= baja) {
            baja = arrayNotas[index]



        }


    }
    return "Maxima: " + alta + " | Minima: " + baja;
}
function calificacion() {
    let aprobados = 0;
    let suspensos = 0;

    for (let index = 0; index < arrayNotas.length; index++) {
        if (arrayNotas[index] >= 5) {
            aprobados++;
        } else {
            suspensos++;
        }

    }
    return "Aprobados: " + aprobados + " | Suspensos: " + suspensos

}
function porcentajesAprobados() {
    let aprobados = 0;
    let pocentage: number;
    for (let index = 0; index < arrayNotas.length; index++) {
        if (arrayNotas[index] >= 5) {
            aprobados++;

        }

    }
    pocentage = aprobados * 100 / arrayNotas.length
    return "porcentage de aprobados: " + pocentage.toFixed(1) + "%"

}
function recuentoNotas() {
    let sobresaliente = 0;
    let notable = 0;
    let bien = 0;
    let suficiente = 0;
    let suspen = 0;
    let notasInv = 0;
    for (let index = 0; index < arrayNotas.length; index++) {
        if (arrayNotas[index] <= 10 && arrayNotas[index] >= 9) {
            sobresaliente++

        } else if (arrayNotas[index] < 9 && arrayNotas[index] >= 7) {
            notable++;
        } else if (arrayNotas[index] < 7 && arrayNotas[index] >= 6) {
            bien++;
        } else if (arrayNotas[index] < 6 && arrayNotas[index] >= 5) {
            suficiente++;
        } else if (arrayNotas[index] < 5 && arrayNotas[index] >= 0) {
            suspen++;
        } else {
            notasInv++;

        }



    }
    return "sobresaliente " + sobresaliente + " notable " + notable + " bien " + bien + " suficiente " + suficiente + " insuficiente " + suspen + " notas invalidas " + notasInv
}
console.log(maximaMinima());
console.log(calificacion());
console.log(porcentajesAprobados());
console.log("con +0.5 ->", arrayNotas.map((numero: number) => numero += 0.5));
console.log("original -> ", arrayNotas);
console.log("recuento -> ", recuentoNotas())
console.log("------------------------------------------------------------------------");
console.log("\x1b[31m\x1b[1mEjercicio 6\x1b[0m");
type ficha = [nombre: string, nota: number];
const fichas:ficha[] = [
    ["ana",8.5],
    ["luis",4],
    ["marta",9.25],
    ["Pedro",6],

]
//desectructuaracion
fichas.forEach(([nombre,nota]) => {
    //padEnd alinea en 6 caracteres
    console.log(nombre.padEnd(6) + " "+nota +  " -> " + (nota>=5 ? "Apto" : "No Apto"));
    
    
});
type FichaConRecuperacion = [nombre: string, nota: number, recuperacion?: number];
const conRecu: FichaConRecuperacion[] = [
  ["Luis", 4, 6.5],
  ["Ana", 8.5],
];

conRecu.forEach(([nombre, nota, recuperacion]) => {
  const definitiva = recuperacion ?? nota;
  console.log(`${nombre}: ordinaria ${nota}, definitiva ${definitiva}`);
});






    





console.log("------------------------------------------------------------------------");
let jose:string = "jajaja"
let edad:number = 12
function presentar (quien:string,edad:number){
    log(`soy ${quien} y tengo ${edad} años`);

}
presentar(jose,edad)
let arrayDeNombress:string[] = ["javier","verdugo","mena","juan","francisco","mena"]
console.log(arrayDeNombress.slice(0,2));

const numerosss:number[] = [1,2,3];
const [primerss,segundso] = numerosss;
console.log(primerss);
let frutis:string[] = ["caca","melon","sandia"];
for (const fruta of frutis) {
    console.log(fruta);
    
    
}
for (const i in frutis) {
    console.log(i);
    
    
}
let array2d:number[][]= [[1,2,3,4,5,6,7,8,89,9,7,6,5,54,45,5,45]];
for (let index = 0; index < array2d.length; index++) {
   let array = array2d[index]
   console.log(array);
   
    
}
let tuplaEdad: [string, number]  = ["elena",45]


let [nombreDePersona,edadPersona] = tuplaEdad; 
console.log(nombreDePersona);
const arrayNombres = ["Jose", "Juan", "Pedro", "Manuel"];

const printElemento = (elemento: string): void => console.log(elemento);
arrayNombres.forEach(printElemento);



