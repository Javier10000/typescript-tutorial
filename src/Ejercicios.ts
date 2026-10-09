import { log } from "console";

const Grupo = {
    
}

//constantes 
const NOMBRECENTRO:string = "IES Carrillo Salcedo";
const CICLO:string = "Desarrollo de aplicaciones multiplataforma";
const PLAZASTOTALES:number = 30;
//variable
let matriculados:number=26
let fichasLibres:number = PLAZASTOTALES - matriculados;
let alta:number = 2 
let matriculadosAct:number = matriculados+alta;
let ocupacion:number = matriculadosAct *100 / PLAZASTOTALES;
let hayPlazas:string;
if (matriculadosAct<PLAZASTOTALES) {
    hayPlazas = "hay Plazas"
    
}else{
    hayPlazas = "no hay plazas"
}
console.log(NOMBRECENTRO," - ",CICLO);
console.log("matriculados: ",matriculados," de ",PLAZASTOTALES);
console.log("plazas Libres",fichasLibres);
console.log("tras dos de alta: ",matriculadosAct,"matriculados",", ",alta," libres");
console.log(ocupacion);










