/**
 * EJERCICIO 05 — Estadísticas de la evaluación
 * Capítulo 05 (map, filter, reduce)
 */

const notas: number[] = [7, 4.5, 9.25, 6, 3, 8, 10, 5.5];

// 1. Media. El 0 final de reduce es el valor inicial del acumulador:
//    sin él, un array vacío lanzaría un error.
const suma = notas.reduce((acc, n) => acc + n, 0);
const media = suma / notas.length;
console.log(`Media del grupo: ${media.toFixed(2)}`);

// 2. Nota máxima y mínima
console.log(`Máxima: ${Math.max(...notas)} | Mínima: ${Math.min(...notas)}`);

// 3. Aprobados y suspensos
const aprobados = notas.filter((n) => n >= 5);
const suspensos = notas.filter((n) => n < 5);
console.log(`Aprobados: ${aprobados.length} | Suspensos: ${suspensos.length}`);

// 4. Porcentaje de aprobados
const porcentaje = (aprobados.length / notas.length) * 100;
console.log(`Porcentaje de aprobados: ${porcentaje.toFixed(1)} %`);

// 5. Subir 0.5 a todo el mundo, sin pasar de 10 (map: array nuevo)
const redondeadas = notas.map((n) => Math.min(n + 0.5, 10));
console.log("Con +0.5 ->", redondeadas);
console.log("Original ->", notas); // map NO modifica el original

// 6. Recuento por calificación usando reduce con un objeto acumulador
const recuento = notas.reduce(
  (acc, n) => {
    if (n >= 9) acc.sobresaliente++;
    else if (n >= 7) acc.notable++;
    else if (n >= 5) acc.suficiente++;
    else acc.insuficiente++;
    return acc;
  },
  { sobresaliente: 0, notable: 0, suficiente: 0, insuficiente: 0 },
);
console.log("Recuento ->", recuento);

/**
 * 7. Las tres mejores notas.
 *    Ojo: sort() modifica el array, y por defecto ordena como TEXTO.
 *    Por eso: primero copia con spread, luego comparador numérico.
 */
const top3 = [...notas].sort((a, b) => b - a).slice(0, 3);
console.log("Top 3 ->", top3);

export {};
