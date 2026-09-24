/**
 * EJERCICIO 08 — Criterios intercambiables (callbacks)
 * Capítulo 07 (funciones como parámetro y `this` en arrow functions)
 */

type Ficha = { nombre: string; nota: number };

const grupo: Ficha[] = [
  { nombre: "Ana", nota: 8.5 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9.25 },
  { nombre: "Pedro", nota: 6 },
];

/**
 * 1. En lugar de escribir una función por cada criterio, se recibe el
 *    criterio COMO PARÁMETRO. El tipo `(f: Ficha) => boolean` describe
 *    "una función que recibe una Ficha y devuelve un booleano".
 */
function seleccionar(lista: Ficha[], criterio: (f: Ficha) => boolean): Ficha[] {
  return lista.filter(criterio);
}

// Los tipos del parámetro `f` se infieren: no hay que repetirlos
const aprobados = seleccionar(grupo, (f) => f.nota >= 5);
const excelentes = seleccionar(grupo, (f) => f.nota >= 9);

console.log(
  "Aprobados  ->",
  aprobados.map((f) => f.nombre),
);
console.log(
  "Excelentes ->",
  excelentes.map((f) => f.nombre),
);

// 2. Un criterio guardado en una constante, para reutilizarlo
const necesitaRecuperar = (f: Ficha): boolean => f.nota < 5;
console.log(
  "A recuperar ->",
  seleccionar(grupo, necesitaRecuperar).map((f) => f.nombre),
);

// 3. Callback que además recibe la posición
function conPosicion(lista: Ficha[], accion: (f: Ficha, indice: number) => void): void {
  lista.forEach(accion);
}
conPosicion(grupo, (f, i) => console.log(`${i + 1}º ${f.nombre} (${f.nota})`));

/**
 * 4. Por qué en Angular las callbacks se escriben SIEMPRE como arrow.
 *    Una `function` crea su propio `this`; una arrow hereda el de fuera.
 */
class Evaluador {
  private aprobados = 0;

  contar(lista: Ficha[]): number {
    lista.forEach((f) => {
      if (f.nota >= 5) this.aprobados++; // arrow: `this` es el Evaluador ✅
    });
    return this.aprobados;
  }
}
console.log(`Aprobados contados desde la clase -> ${new Evaluador().contar(grupo)}`);

export {};
