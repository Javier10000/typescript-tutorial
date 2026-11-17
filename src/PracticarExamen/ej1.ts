/**
 * 
 * Clase Libro:

Atributos:

isbn: string (público o readonly)

titulo: string

autor: string

paginas: number

prestado: boolean (empieza en false por defecto)

Métodos:

constructor(isbn: string, titulo: string, autor: string, paginas: number)

prestar(): cambia prestado a true.

devolver(): cambia prestado a false.

obtenerResumen(): string: devuelve un texto como "El Quijote - Miguel de Cervantes (450 págs) [Disponible]".

Clase Biblioteca:

Atributos:

nombre: string

libros: Array de Libro (empieza vacío [])

Métodos:

constructor(nombre: string)

agregarLibro(libro: Libro): void: añade un libro al array.

buscarPorAutor(autor: string): Libro[]: devuelve un array con todos los libros escritos por ese autor (puedes usar .filter(...)).

obtenerTotalPaginas(): number: suma el número de páginas de todos los libros de la biblioteca (puedes usar .reduce(...)).

listarDisponibles(): Libro[]: devuelve solo los libros que no están prestados.
 */

class Libros {
    readonly isbn: string
    titulo: string;
    autor: string;
    paginas: number;
    prestado: boolean;
    constructor(isbn: string, titulo: string, autor: string, paginas: number, prestado: boolean = false) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
       this.prestado = prestado
    }
    prestar() {
        this.prestado = true

    }
    devolver(){
        this.prestado = false
    }
    toString(){
        return `titulo ${this.titulo} autor ${this.autor} tiene ${this.paginas} paginas ${this.prestado}`
    }

}
let l1 = new Libros("1223"," quijote", "cervantes" ,1000,);
l1.prestar()
console.log(l1.prestado);
