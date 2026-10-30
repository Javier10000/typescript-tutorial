
/**
 * array de libros 
 */
type Libro = {titulo:string, autor:string , anio:number,paginas:number,disponible:boolean}
let catalogos:Libro[] = [
    {titulo:"el quijote", autor:"Cervantes",anio:1605,paginas:863,disponible:true },
    {titulo:"La Regenta", autor:"Clarin",anio:1884,paginas:712,disponible:false },
    {titulo:"Niebla", autor:"Unamuno",anio:1914,paginas:296,disponible:true },
    {titulo:"Nada", autor:"Carmen Laforest",anio:1945,paginas:288,disponible:true },
    {titulo:"Marianela", autor:"Glados",anio:1878,paginas:240,disponible:false },
]

//ejercicio A 
let librosDisponibles = catalogos.filter((l:Libro) => l.disponible).map((l:Libro)=> l.titulo).join("|")
console.log(librosDisponibles);
//ejercicio B
let totalPaginas = catalogos.map((l:Libro) => l.paginas).reduce((acc,act)=>{return acc+=act})
console.log(totalPaginas);

//ejercicio C
function buscarPorAutor(lista:Libro[],autor:string) {
    let libroEncontrado = lista.find((libro:Libro)=> {return libro.autor == autor})
    return libroEncontrado?.titulo
}
console.log(buscarPorAutor(catalogos,"Unamuno"));

