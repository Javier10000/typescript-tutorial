/**
 * 02 - TIPOS DE DATOS
 *
 * Ejecutar:  npm run play -- src/02-tipos-datos/demo.ts
 */

// ---------- Primitivos ----------
let nombre: string = "Carlos Mendoza";
let edad: number = 18.2; // number cubre enteros y decimales
let mayorEdad: boolean = true;

console.log(nombre, edad, mayorEdad);

// ---------- Inferencia ----------
// Si inicializas al declarar, NO hace falta anotar el tipo: TS lo deduce.
let ciudad = "Sevilla"; // inferido: string
// ciudad = 3;          // Error: Type 'number' is not assignable to type 'string'.
console.log(`ciudad inferida como string -> ${ciudad}`);

// ---------- any: desactiva el chequeo ----------
let cualquierCosa: any = "Hola";
cualquierCosa = 2;
cualquierCosa = true;
cualquierCosa = "HOLA";

// Compila, pero si el valor no fuese string reventaría en EJECUCIÓN.
// `any` es una puerta trasera: evítalo.
console.log(cualquierCosa.toLowerCase());

// ---------- unknown: el "any seguro" ----------
let tipoDatoDesconocido: unknown;

tipoDatoDesconocido = "Nombre";
tipoDatoDesconocido = 18;
tipoDatoDesconocido = "Ahora soy texto";

// console.log(tipoDatoDesconocido.toUpperCase());  // Error: 'tipoDatoDesconocido' is of type 'unknown'.

// Hay que comprobar el tipo antes de usarlo (type guard / narrowing):
if (typeof tipoDatoDesconocido === "string") {
  console.log(tipoDatoDesconocido.toUpperCase()); // aquí TS ya sabe que es string
}

// ---------- void y never ----------
// void: la función no devuelve nada.
function avisar(mensaje: string): void {
  console.log(`AVISO: ${mensaje}`);
}
avisar("void = sin valor de retorno");

// never: la función nunca termina normalmente (lanza o bucle infinito).
function lanzarError(msg: string): never {
  throw new Error(msg);
}

// ---------- null y undefined ----------
// Con "strict": true hay que declararlos explícitamente en el tipo.
let apellido: string | null = null;
apellido = "García";
console.log(`apellido -> ${apellido}`);

// ---------- Concatenar cadenas ----------
console.log("Tu nombre es: " + nombre); // concatenación clásica
console.log(`Tu nombre es ${nombre}`); // template literal (preferido)
console.log(`El año que viene tendrás ${Math.floor(edad) + 1} años`);

export {};
