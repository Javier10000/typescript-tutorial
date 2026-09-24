/**
 * 12 - GENÉRICOS
 *
 * Un genérico es un "parámetro de tipo": la función o clase no fija el tipo,
 * lo recibe. Es lo que hace que en Angular puedas escribir:
 *     this.http.get<Usuario[]>('/api/usuarios')
 *     signal<number>(0)
 *     Observable<Producto>
 *
 * Ejecutar:  npm run play -- src/12-genericos/demo.ts
 */

// ---------- El problema que resuelven ----------
// Con `any` pierdes el tipo de retorno: el editor ya no sabe qué te devuelve.
function primeroAny(lista: any[]): any {
  return lista[0];
}
const conAny = primeroAny(["a", "b"]); // tipo: any -> sin autocompletado, sin errores
console.log("con any ->", conAny);

// Con un genérico, el tipo de entrada viaja hasta la salida.
function primero<T>(lista: T[]): T {
  return lista[0];
}
const texto = primero(["a", "b"]); // T = string  -> texto es string
const numero = primero([1, 2, 3]); // T = number  -> numero es number
console.log("genérico ->", texto.toUpperCase(), numero.toFixed(2));

// ---------- Varios parámetros de tipo ----------
function emparejar<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
console.log("emparejar ->", emparejar("edad", 30));

// ---------- Restricciones con `extends` ----------
// "T puede ser lo que quieras, siempre que tenga la propiedad length"
function medir<T extends { length: number }>(item: T): number {
  return item.length;
}
console.log("medir string ->", medir("hola"));
console.log("medir array  ->", medir([1, 2, 3]));
// medir(42);   // Error: Argument of type 'number' is not assignable...

// `keyof`: K solo puede ser una clave real de T
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
  return objeto[clave];
}

const alumno = { nombre: "Ana", edad: 20, matriculado: true };
console.log("propiedad ->", obtenerPropiedad(alumno, "nombre")); // tipo: string
console.log("propiedad ->", obtenerPropiedad(alumno, "edad")); // tipo: number
// obtenerPropiedad(alumno, "curso");   // Error: "curso" no es clave de alumno

// ---------- Valor por defecto del parámetro de tipo ----------
type Resultado<T = string> = { ok: boolean; datos: T };

const r1: Resultado = { ok: true, datos: "todo bien" }; // T = string por defecto
const r2: Resultado<number[]> = { ok: true, datos: [1, 2, 3] };
console.log("Resultado ->", r1, r2);

// ---------- Interfaces genéricas ----------
// Este patrón es EXACTAMENTE el de una respuesta paginada de una API.
interface RespuestaApi<T> {
  datos: T;
  pagina: number;
  total: number;
}

interface Usuario {
  id: number;
  nombre: string;
}

const respuesta: RespuestaApi<Usuario[]> = {
  datos: [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
  ],
  pagina: 1,
  total: 2,
};
console.log(`RespuestaApi -> ${respuesta.total} usuarios, el primero es ${respuesta.datos[0].nombre}`);

// ---------- Clases genéricas ----------
// Un "almacén" que sirve para cualquier tipo. Base de un servicio en Angular.
class Almacen<T> {
  private elementos: T[] = [];

  anadir(elemento: T): void {
    this.elementos.push(elemento);
  }

  obtenerTodos(): T[] {
    return [...this.elementos];
  }

  buscar(predicado: (e: T) => boolean): T | undefined {
    return this.elementos.find(predicado);
  }
}

const almacenUsuarios = new Almacen<Usuario>();
almacenUsuarios.anadir({ id: 1, nombre: "Ana" });
almacenUsuarios.anadir({ id: 2, nombre: "Luis" });
console.log("Almacen ->", almacenUsuarios.obtenerTodos());
console.log("buscar  ->", almacenUsuarios.buscar((u) => u.id === 2));

// Restricción: solo tipos que tengan `id`
class Repositorio<T extends { id: number }> {
  private items = new Map<number, T>();

  guardar(item: T): void {
    this.items.set(item.id, item);
  }

  porId(id: number): T | undefined {
    return this.items.get(id);
  }
}

const repo = new Repositorio<Usuario>();
repo.guardar({ id: 7, nombre: "Marta" });
console.log("Repositorio ->", repo.porId(7));

// ---------- Cómo lo verás en Angular ----------
/**
 * // Petición HTTP tipada: get<T> devuelve Observable<T>
 * this.http.get<Usuario[]>('/api/usuarios').subscribe(usuarios => ...);
 *
 * // Signals (Angular 17)
 * contador = signal<number>(0);
 * usuarios = signal<Usuario[]>([]);
 *
 * // Formularios reactivos
 * form = new FormGroup<{ nombre: FormControl<string> }>({ ... });
 */

export {};
