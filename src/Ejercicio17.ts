interface TareaApi {
    userId: number
    id: number
    title: string
    completed: boolean
}
/**
 * copia los que quieres de una intefaz
 */
interface Tarea extends Pick<TareaApi, "id" | "title" | "completed"> { }

async function obtenerTareas(userId: number): Promise<Tarea[]> {
    const URL_TAREAS = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    let respuesta: Response = await fetch(URL_TAREAS);
    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener las tareas");
    }
    let datos: TareaApi[] = await (respuesta.json() as Promise<TareaApi[]>);
    return datos.map((t: TareaApi) => ({ id: t.id, title: t.title, completed: t.completed }));
}
/**
 * forma correcta haciendo un await exportandolo y se parte de esta 
 */
let datos = await obtenerTareas(1)
console.log(datos);
let total_tareas = datos.length;
let cantidad_disponibles = datos.filter((com)=>com.completed === true).length
let porcentaje = (datos.filter((com)=>com.completed === true).length/datos.length*100).toFixed(1);
console.log(`Usuario 1: ${total_tareas} tareas`);
console.log(`completed: ${cantidad_disponibles} (${porcentaje}%)`);
let tresPrimerosTitulosPendientes = datos.filter((datos: Tarea) => datos.completed === false).slice(0, 3).map((datos: Tarea) => datos.title)
console.log("los tres primeros titulos pendientes son: ", tresPrimerosTitulosPendientes);
let tituloMasLargo = datos.filter((datos: Tarea) => datos.title).map((datos: Tarea) => (datos.title)).reduce((maslargo, actual) => (actual.length > maslargo.length ? actual : maslargo))
console.log(tituloMasLargo);
const [usuario1, usuario2] = await Promise.all([obtenerTareas(1), obtenerTareas(2)])
let contar = (listar: Tarea[]) => (listar.filter((tarea: Tarea) => tarea.completed).length)
console.log("user 1 ", contar(usuario1), " user 2", contar(usuario2));
/*
forma de creando varias peticiones a la api
obtenerTareas(1).then((datos: Tarea[]) => { console.log("Tareas obtenidas:", datos)}).catch((e: Error) => { console.log("Ocurrió un error:", e.message); })
obtenerTareas(1).then((datos: Tarea[]) => {const tareasCompletadas = datos.filter((t) => t.completed === true);console.log("Tareas completadas:",tareasCompletadas, "cantidad" ,tareasCompletadas.length, "tareas completadas con porcentajes", ((tareasCompletadas.length / 20) * 100).toFixed(2),"%",(((20 - tareasCompletadas.length ) / 20) * 100).toFixed(2))})
obtenerTareas(1).then((datos: Tarea[]) => {const tareasincompletas = datos.filter((t) => t.completed === false);console.log("Tareas completadas:",tareasincompletas, "cantidad" ,tareasincompletas.length, "tareas completadas con porcentajes", ((tareasincompletas.length / 20) * 100).toFixed(2),"%",(((20 - tareasincompletas.length ) / 20) * 100).toFixed(2))})
obtenerTareas(1).then((datos: Tarea[]) => {const tresTareas = datos.filter((t) => t.completed === false).slice(0, 3).map(t => t.title);console.log("PRIMEROS TITULOS DE LAS TAREAS PENDIENTES",tresTareas);})
obtenerTareas(1).then((datos: Tarea[]) => {const tituloLargo = datos.filter((t) => t.completed === false).map(t => t.title).reduce((maslargo, actual)=>(actual.length > maslargo.length ? actual : maslargo));console.log("titulo largo",tituloLargo);})
Promise.all([obtenerTareas(1),obtenerTareas(2)]).then(([tareas1, tareas2]) => {const dosprimerasTareas = [...tareas1, ...tareas2].slice(0,2);console.log(dosprimerasTareas)});
*/
export { };