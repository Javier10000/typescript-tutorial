import { log } from "console";

console.log("Ejercicio 1 Filtrado de Productos en Stock");

type Producto = { nombre: string; precio: number; stock: number };

let productos: Producto[] = [
    { nombre: "puerta", precio: 12, stock: 23 },
    { nombre: "lazo", precio: 14, stock: 23 },
    { nombre: "cadena", precio: 3, stock: -1 },
    { nombre: "lingote", precio: 312, stock: 23 },
    { nombre: "pc", precio: 122, stock: 23 },
    { nombre: "escritorio", precio: 212, stock: 23 },
    { nombre: "silla", precio: 17, stock: -1 }
];

let funcionFiltrado = (lista: Producto[], numeroMaximo?: number): Producto[] => {
    return lista.filter((producto) => {
        if (numeroMaximo !== undefined) {
            return producto.stock > 0 && producto.precio < numeroMaximo;

        } else {
            return producto.stock > 0
        }

    })



}
let arrayAux: Producto[] = funcionFiltrado(productos,34)
console.log(arrayAux);

function nombre(...notas: number[]) {
    let condicion = notas.filter((nota: number) => nota <= 10 && nota > -1)
    const suma = condicion.reduce((acc: number, valor: number) => acc += valor, 0)
    let media = suma / condicion.length;
    let maximo = Math.max(...condicion);
    let minimo = Math.min(...condicion);
    let aprobados = condicion.filter(a => a >= 5).length;
    return {
        media, maximo, minimo, aprobados
    }
}
console.log(nombre(1, 2, 3, 4, 5, 6, 11));
