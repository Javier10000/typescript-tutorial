/**
 * Crear el objeto
 */
type Libro = {titulo:string,autor:string,anio:number,paginas:number,disponible:boolean}
/**
 * rellenamos el array con el objeto
 */
let catalogo:Libro[] = [
    {titulo:"el quijote", autor:"Cervantes",anio:1605,paginas:863,disponible:true },
    {titulo:"La Regenta", autor:"Clarin",anio:1884,paginas:712,disponible:false },
    {titulo:"Niebla", autor:"Unamuno",anio:1914,paginas:296,disponible:true },
    {titulo:"Nada", autor:"Carmen Laforest",anio:1945,paginas:288,disponible:true },
    {titulo:"Marianela", autor:"Glados",anio:1878,paginas:240,disponible:false },
]
/**
 * Primero creamos un array con el tipo libro y esta filtramos con el nombre del array y con el nombre de libros que va a iterar 
 * y le decimos que disponible se === true 
 */
let librosDisponible:Libro[] = catalogo.filter((libros) => libros.disponible === true);
/**
 * cogemos otra variable para mostrar por titulo
 */
let vari = librosDisponible.map((e) => e.titulo)
console.log(vari.join(" | "));
/**
 * creamos una variable de tipo number que recoge el array catalogo con un reduce donde tenomos acc = acomulador y libros de tipo libro
 */
let calcularTotalPaginas:number = catalogo.reduce((acc:number,libros:Libro) => acc + libros.paginas,0)
console.log(calcularTotalPaginas);

/**
 * creamos la funcion, autor lo que le vamos a pasar por paramentro y va ha devolver un string
 * 
 * @param autor 
 * @returns string
 */
function buscarPorAutor(autor:string):string{
    /**
     * crea la variable buscar = y con el find busca el primer elemento que encuentra valor hace referencia al catalogo y le decimos que si el autor
     * es === al autor que pasamos por parametros en el return definimos la ternaria
     */
    const buscar = catalogo.find((valor) => valor.autor === autor);
    return buscar ? buscar.titulo : "no encontrado";
    
}
console.log(buscarPorAutor("Unamuno"));

 





