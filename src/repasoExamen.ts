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

// Si quieres que devuelva los objetos Producto:
const filtrarProductos = (lista: Producto[], precioMaximo?: number): Producto[] => {
    return lista.filter((producto) => {
        if (precioMaximo !== undefined) {
            // Devuelve true si cumple el stock y es menor que el precio máximo
            return producto.stock > 0 && producto.precio < precioMaximo;
        } else {
            // Si no hay precio máximo, solo evalúa el stock
            return producto.stock > 0;
        }
    });
};

let arrayNuevo: Producto[] = filtrarProductos(productos, 15);
console.log(arrayNuevo);