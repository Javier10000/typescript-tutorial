/**
 * Ejercicio 1: La tienda de videojuego (3.5 Puntos)
 */

type Videojuego = {
    titulo: string,
    plataforma: string,
    precio: number,
    stock: number,
    anio: number,
}
let catalogo: Videojuego[] = [
    { titulo: "Zelda TOTK", plataforma: "Switch", precio: 60, stock: 4, anio: 2023 },
    { titulo: "God of War", plataforma: "PS5", precio: 50, stock: 0, anio: 2022 },
    { titulo: "Halo Infinite", plataforma: "Xbox", precio: 30, stock: 7, anio: 2021 },
    { titulo: "Mario Kart 8", plataforma: "Switch", precio: 45, stock: 12, anio: 2017 },
    { titulo: "Elden Ring", plataforma: "PS5", precio: 40, stock: 3, anio: 2022 }
]
let TitulosConStock = catalogo.filter((e: Videojuego) => e.stock > 0).map((e: Videojuego) => ` ${e.titulo} |`)
let total = 0;
for (let inventario of catalogo) {
    total += inventario.precio * inventario.stock
}
function buscarPorPlataforma(lista: Videojuego[], plataforma: string) {
    let primerJuego = lista.find((p: Videojuego) => p.plataforma === plataforma)
    if (primerJuego) {
        console.log(primerJuego.titulo);
    } else {
        console.log("No encontrado");

    }


}
function filtrarPorPlataforma(lista: Videojuego[], plataforma: string, precioMaximo?: number):Videojuego[] {

let resultado:Videojuego[] = []
    for (let fil of lista) {
        if (precioMaximo != null) {
            if (fil.stock > 0 && fil.plataforma == plataforma && precioMaximo > fil.precio) {
                resultado.push(fil)
            }

        } else {
            if (fil.stock > 0 && fil.plataforma == plataforma) {
                resultado.push(fil)
            }

        }
    }
    return resultado


}
function rebajar(lista:Videojuego[],titulo:string,porcentage:number):Videojuego[] {
return lista.map((e)=> e.titulo == titulo ? {...e, precio: e.precio - (e.precio * porcentage/100)}:e)

}
function precios(...precios:number[]){
    let suma = 0;
    let media = 0;
    let menor = 100000000
    let mayor = 0
    for(let p of precios){
        suma+=p
        if (p<menor) {
            menor = p
        }
        if (p>mayor) {
            mayor = p
        }
    }
    media = suma / precios.length
    
    return "el mayor es "+mayor+" y el menor es , "+menor+ " la media es: " + media
}




console.log("con stock: ", TitulosConStock);

console.log("el total del inventario es: ", total);

let nombre = "Switch"
let precio = 50
buscarPorPlataforma(catalogo, "Switch")
const res = filtrarPorPlataforma(catalogo, nombre, precio)
console.log( `${nombre} por menos de ${precio} es de ${res.map(e=>e.titulo).join(" | ")}` );


let titulo = "Elden Ring"
let porcentaje = 10
const rebajado = rebajar(catalogo,titulo,porcentaje);
const nuevo = rebajado.find((e)=>e.titulo==titulo)?.precio
const original = catalogo.find((e)=>e.titulo == titulo)?.precio
console.log("el precio original es "+original+"€ con la rebaja del "+porcentaje+"% es de "+nuevo+"€");

let funcionDePrecios = precios(1,3,6,7,5,6,8,6,5,56,6,)
console.log(funcionDePrecios);




