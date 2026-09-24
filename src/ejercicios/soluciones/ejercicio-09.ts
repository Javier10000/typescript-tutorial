/**
 * EJERCICIO 09 — Modelar el alumno con `type`
 * Capítulo 08 (type, uniones, opcionales, readonly, intersección)
 */

/**
 * 1. Unión de literales en vez de `string`.
 *    Ventaja: el editor autocompleta los tres valores y es imposible
 *    escribir "dam" o "DAM2" por error.
 */
type Ciclo = "DAM" | "DAW" | "ASIR";
type Turno = "mañana" | "tarde";

type Alumno = {
  readonly expediente: number; // no se puede cambiar tras crearlo
  nombre: string;
  ciclo: Ciclo;
  turno: Turno;
  email?: string; // puede no constar
};

const ana: Alumno = {
  expediente: 1001,
  nombre: "Ana Serrano",
  ciclo: "DAM",
  turno: "tarde",
  email: "ana@ies.es",
};

const luis: Alumno = {
  expediente: 1002,
  nombre: "Luis Gil",
  ciclo: "DAW",
  turno: "mañana",
};

// luis.expediente = 9999;      // ❌ Error: es readonly
// ana.ciclo = "DAM2";          // ❌ Error: no es un Ciclo válido
luis.email = "luis@ies.es"; // ✅ las demás sí se modifican

console.log(`${ana.nombre} — ${ana.ciclo} (${ana.turno}) — ${ana.email ?? "sin email"}`);
console.log(`${luis.nombre} — ${luis.ciclo} (${luis.turno}) — ${luis.email ?? "sin email"}`);

/**
 * 2. Intersección `&`: sumar propiedades.
 *    Un alumno con beca es un Alumno Y ADEMÁS tiene datos de beca.
 */
type DatosBeca = { importe: number; curso: string };
type AlumnoBecado = Alumno & DatosBeca;

const marta: AlumnoBecado = {
  expediente: 1003,
  nombre: "Marta Ruiz",
  ciclo: "DAM",
  turno: "tarde",
  importe: 1200,
  curso: "2024/25",
};
console.log(`${marta.nombre} tiene beca de ${marta.importe} € (${marta.curso})`);

// 3. La unión cerrada permite recorrer casos de forma exhaustiva
const grupo: Alumno[] = [ana, luis, marta];

const porCiclo = (c: Ciclo): string[] =>
  grupo.filter((a) => a.ciclo === c).map((a) => a.nombre);

console.log("DAM  ->", porCiclo("DAM"));
console.log("DAW  ->", porCiclo("DAW"));
console.log("ASIR ->", porCiclo("ASIR"));

/**
 * 4. Template literal type: el código de grupo sigue un patrón fijo.
 *    Solo se admiten combinaciones válidas de ciclo y curso.
 */
type CodigoGrupo = `${Ciclo}${1 | 2}`;

const codigos: CodigoGrupo[] = ["DAM1", "DAM2", "DAW1", "ASIR2"];
// const malo: CodigoGrupo = "DAM3";   // ❌ Error: 3 no es 1 ni 2
console.log("Códigos válidos ->", codigos);

export {};
