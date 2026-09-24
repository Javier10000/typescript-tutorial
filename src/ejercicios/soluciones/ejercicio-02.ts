/**
 * EJERCICIO 02 — Notas que pueden no existir
 * Capítulos 02 (tipos, null) · 03 (?. y ??)
 */

/**
 * Una nota no entregada NO es un 0: es la ausencia de nota.
 * Por eso se modela como `number | null` y no como `number`.
 */
let notaPractica: number | null = 8.5;
let notaExamen: number | null = null; // aún sin corregir

console.log(`Práctica: ${notaPractica ?? "sin entregar"}`);
console.log(`Examen:   ${notaExamen ?? "sin corregir"}`);

/**
 * ⚠️ Aquí está la trampa del ejercicio:
 * `||` sustituye también el 0, porque 0 es "falsy".
 * `??` solo sustituye null y undefined.
 */
const notaCero: number | null = 0;
console.log(`Con || -> ${notaCero || "sin nota"}`); // "sin nota" ❌ el 0 era real
console.log(`Con ?? -> ${notaCero ?? "sin nota"}`); // 0 ✅

// Datos anidados que pueden faltar: optional chaining
type Alumno = {
  nombre: string;
  contacto?: { email: string; telefono?: string };
};

const alumnoA: Alumno = { nombre: "Ana", contacto: { email: "ana@ies.es" } };
const alumnoB: Alumno = { nombre: "Luis" };

console.log(`Email de ${alumnoA.nombre}: ${alumnoA.contacto?.email ?? "no consta"}`);
console.log(`Email de ${alumnoB.nombre}: ${alumnoB.contacto?.email ?? "no consta"}`);
console.log(`Tlf de ${alumnoA.nombre}:   ${alumnoA.contacto?.telefono ?? "no consta"}`);

/**
 * Un dato que llega de fuera (un formulario, un CSV) es `unknown`:
 * hay que comprobar qué es antes de usarlo.
 */
const desdeFormulario: unknown = "7.25";

if (typeof desdeFormulario === "string") {
  const comoNumero = Number(desdeFormulario);
  console.log(`Convertida a número: ${comoNumero.toFixed(2)}`);
}

export {};
