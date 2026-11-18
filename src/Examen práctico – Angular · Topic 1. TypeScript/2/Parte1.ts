import { pseudoRandomBytes } from "crypto"

type Pelicula = {
    titulo:string
    director:string
    anio:number
    duracion:number
    nota:number
    vista:boolean
}
let peliculas:Pelicula[] = [
{titulo:"Origen",director:"Christopher Nolan",anio:2010,duracion:148,nota:8.8,vista:true},
{titulo:"Parasitos",director:"Bong Joon-ho",anio:2019,duracion:132,nota:8.5,vista:false},
{titulo:"El laberinto del fauno",director:"Guillermo del Toro",anio:2006,duracion:118,nota:8.2,vista:true},
{titulo:"Interestellar",director:"Christopher Nolan",anio:2014,duracion:169,nota:8.7,vista:false},
{titulo:"Coco",director:"Lee Unkrich",anio:2017,duracion:105,nota:8.4,vista:true},
]
let peliculasNoVistas = peliculas.filter((p)=>p.vista===false).map((e)=>e.titulo).join(" | ")
console.log("pendientes de ver: " + peliculasNoVistas);

let duracionTotal = peliculas.reduce((acc,atc)=> acc+atc.duracion,0)
console.log("la duracion total es de: "+ duracionTotal+" minutos");

function buscarPorDirector(lista:Pelicula[], director:string) {
    let primeraPelicula = lista.find((e)=>e.director == director ? e:undefined)
    return primeraPelicula
}
console.log(buscarPorDirector(peliculas,"Christopher Nolan"));
console.log(buscarPorDirector(peliculas,"Pedro almodovar"));


function filtarPorNota(lista:Pelicula[], notaminima:number, soloVistas:boolean = false):Pelicula[] {
   return lista.filter((e)=> e.nota>= notaminima && (!soloVistas || e.vista))
}
console.log(filtarPorNota(peliculas,8.5).map((e)=>e.titulo));
console.log(filtarPorNota(peliculas,8.5, true).map((e)=>e.titulo));


function marcaVista(lista:Pelicula[],titulo:string):Pelicula[] {
    
    return lista.map(p => p.titulo === titulo ? {...p, vista:true}:p)
}
let nombre = "Interestellar"
let nuevo = marcaVista(peliculas,nombre)

let nuevoArray = nuevo.filter((e)=>e.titulo === nombre)[0].vista
let arrayOriginal = peliculas.filter((e)=>e.titulo === nombre)[0].vista
console.log(nuevoArray);
console.log(arrayOriginal);


