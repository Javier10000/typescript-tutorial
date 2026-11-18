import { PerformanceObserver } from "perf_hooks"

interface Personaje {
    id:string
    nombre:string
    actor:string
    apodo:string
}
let Personajes:Personaje[] = []
async function obtenerPersonaje(casa: string):Promise<Personaje[]> {
    const URL = `https://potterapi-fedeperin.vercel.app/en/characters/`
    let res:Response = await fetch(URL)
    let data = await res.json() as Personaje[];
    return data
}
obtenerPersonaje("gryffindor").then(lista => lista.forEach(p => console.log(`${p.nombre} (${p.actor}) · ${p.apodo}`))).catch(err => console.log(`Error: ${err.message}`));