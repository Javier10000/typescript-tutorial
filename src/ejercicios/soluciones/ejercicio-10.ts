/**
 * EJERCICIO 10 — Validar lo que llega de fuera
 * Capítulo 08 (aserciones frente a type guards, narrowing)
 */

type Ciclo = "DAM" | "DAW" | "ASIR";
type Alumno = { expediente: number; nombre: string; ciclo: Ciclo };

/**
 * 1. Lo que llega de una API, un JSON o un formulario es `unknown`.
 *    Una aserción `as Alumno` solo SILENCIA al compilador: no comprueba nada.
 *    Un TYPE GUARD sí comprueba, y además se lo demuestra a TypeScript.
 *    La clave está en el tipo de retorno: `dato is Alumno`.
 */
const CICLOS: Ciclo[] = ["DAM", "DAW", "ASIR"];

function esCiclo(valor: unknown): valor is Ciclo {
  return typeof valor === "string" && CICLOS.includes(valor as Ciclo);
}

function esAlumno(dato: unknown): dato is Alumno {
  return (
    typeof dato === "object" &&
    dato !== null &&
    "expediente" in dato &&
    "nombre" in dato &&
    "ciclo" in dato &&
    typeof dato.expediente === "number" &&
    typeof dato.nombre === "string" &&
    esCiclo(dato.ciclo)
  );
}

// 2. Tres respuestas simuladas: una buena y dos defectuosas
const respuestas: unknown[] = [
  { expediente: 1001, nombre: "Ana Serrano", ciclo: "DAM" },
  { expediente: "1002", nombre: "Luis Gil", ciclo: "DAW" }, // expediente es texto
  { nombre: "Marta Ruiz", ciclo: "MECATRONICA" }, // ciclo inválido y falta expediente
];

const validos: Alumno[] = [];

for (const r of respuestas) {
  if (esAlumno(r)) {
    // Dentro del if, TypeScript ya trata `r` como Alumno: autocompleta
    validos.push(r);
    console.log(`✅ Válido: ${r.nombre} (${r.ciclo})`);
  } else {
    console.log("❌ Descartado:", JSON.stringify(r));
  }
}
console.log(`Importados ${validos.length} de ${respuestas.length}`);

/**
 * 3. Narrowing con `in`: distinguir objetos por las propiedades que tienen.
 */
type Matriculado = { nombre: string; expediente: number };
type Preinscrito = { nombre: string; fechaSolicitud: string };

function describir(persona: Matriculado | Preinscrito): string {
  if ("expediente" in persona) {
    return `${persona.nombre}: matriculado, expediente ${persona.expediente}`;
  }
  return `${persona.nombre}: preinscrito el ${persona.fechaSolicitud}`;
}

console.log(describir({ nombre: "Ana", expediente: 1001 }));
console.log(describir({ nombre: "Sofía", fechaSolicitud: "2025-06-20" }));

export {};
