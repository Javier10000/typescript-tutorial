/**
 * Ejercicio 1 GESTOR DE TAREAS
 */
/**
 *  implementa, utilizando una clase, un sistema para gestionar una lista de tareas.
 *  Requisitos:
 * 
 * - Cada tarea deve tener un titulo, una descripcion, y un estado ('Pendiente', 'En Progreso','Compleatada').
 * - El sistema debe permitir añadir nuevas tareas
 * - Debe permitir marcar una tarea como "Completada" actualizado su estado. Para ello se debera indicar su titulo
 * - Debe tener una funcion para listar todas las tareas que estan actualmente 'Pendiente'
 * - Una vez que una tarea se crea, su titulo no debe poder modificarse 
 */
type Estado = "Pendiente" | "EnProgreso" | "Completada"
class Tarea2 {
   readonly titulo: string;
    descripcion: string;
    estado: Estado;

    constructor(titulo: string, descripcion: string, estado: Estado) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
    }


}

class GestorTareas {
    private tareas: Tarea2[] = [];
    anniadirTareas(arrayTarea: Tarea2[]): void {
        this.tareas.push(...arrayTarea)
    }
    TareaCompletada(titulo:string){
       let tareaCompletada =  this.tareas.find((t:Tarea2)=> (t.titulo===titulo));
       if (tareaCompletada) {
            tareaCompletada.estado = "Completada"

        
       }
    }
    listarPendientes():Tarea2[]{
        let pendientes  = this.tareas.filter((t:Tarea2)=>(t.estado == "Pendiente"))
        return pendientes
    }
}
let t1 = new Tarea2("limpieza", "esto trata de una limpieza al ordenador ", "EnProgreso");
let t2 = new Tarea2("enseñanza", "esto trata de una enseñanza ", "Pendiente")

let gestor: GestorTareas = new GestorTareas()

gestor.anniadirTareas([t1,t2])
gestor.TareaCompletada(t1.titulo)
console.log(gestor.listarPendientes());






