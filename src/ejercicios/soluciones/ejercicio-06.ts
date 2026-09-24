/**
 * EJERCICIO 06 — Fichas con tuplas
 * Capítulo 06 (tuplas y desestructuración)
 */

// 1. Una ficha: [nombre, nota]. Longitud fija, tipo por posición.
type Ficha = [nombre: string, nota: number];

const fichas: Ficha[] = [
  ["Ana", 8.5],
  ["Luis", 4],
  ["Marta", 9.25],
  ["Pedro", 6],
];

// 2. Recorrer desestructurando directamente en el parámetro
fichas.forEach(([nombre, nota]) => {
  console.log(`${nombre.padEnd(6)} ${nota} -> ${nota >= 5 ? "APTO" : "NO APTO"}`);
});

/**
 * 3. Una función solo puede devolver UN valor.
 *    Si ese valor es una tupla, se reparte en varias variables al recibirlo.
 */
function resumen(lista: Ficha[]): [media: number, aprobados: number, suspensos: number] {
  const suma = lista.reduce((acc, [, nota]) => acc + nota, 0);
  const aprobados = lista.filter(([, nota]) => nota >= 5).length;
  return [suma / lista.length, aprobados, lista.length - aprobados];
}

const [media, aprobados, suspensos] = resumen(fichas);
console.log(`Media ${media.toFixed(2)} | Aprobados ${aprobados} | Suspensos ${suspensos}`);

/**
 * Fíjate en `([, nota]) =>`: la coma sin nombre delante SALTA la primera
 * posición de la tupla. Es la forma de quedarse solo con lo que interesa.
 */

// 4. Tupla con elemento opcional: la recuperación puede no existir
type FichaConRecuperacion = [nombre: string, nota: number, recuperacion?: number];

const conRecu: FichaConRecuperacion[] = [
  ["Luis", 4, 6.5],
  ["Ana", 8.5],
];

conRecu.forEach(([nombre, nota, recuperacion]) => {
  const definitiva = recuperacion ?? nota;
  console.log(`${nombre}: ordinaria ${nota}, definitiva ${definitiva}`);
});

// 5. Intercambiar dos valores con una tupla, sin variable auxiliar
let primero = "Ana";
let segundo = "Luis";
[primero, segundo] = [segundo, primero];
console.log(`Intercambiados -> ${primero}, ${segundo}`);

export {};
