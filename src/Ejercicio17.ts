interface TareaApi {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface Tarea extends Pick<TareaApi, "id" | "title" | "completed"> {}

async function obtenerTareas(userId: number = 1): Promise<Tarea[]> {
    const URL_TAREAS = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    let respuesta: Response = await fetch(URL_TAREAS);

   
    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener las tareas");
    }

    let datos:TareaApi[] = await (respuesta.json() as Promise<TareaApi[]>);
    
    
    let datosmapeados = datos.map((t:TareaApi) => ({id: t.id,title: t.title,completed: t.completed}));

    return datosmapeados;
}

obtenerTareas(1).then((datos: Tarea[]) => { console.log("Tareas obtenidas:", datos)}).catch((e: Error) => { console.log("Ocurrió un error:", e.message); });
let tareassCompletadas = obtenerTareas(1).then((datos: Tarea[]) => datos.filter((t)=>(t.completed === true)))
console.log(tareassCompletadas);

