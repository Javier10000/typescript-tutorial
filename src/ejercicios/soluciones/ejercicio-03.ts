/**
 * EJERCICIO 03 — Calificaciones y convocatorias
 * Capítulo 04 (if/else, switch, ternario, bucles)
 */

// 1. Calificación textual a partir de la nota
function calificar(nota: number): string {
  if (nota < 0 || nota > 10) return "Nota no válida";
  if (nota >= 9) return "Sobresaliente";
  if (nota >= 7) return "Notable";
  if (nota >= 6) return "Bien";
  if (nota >= 5) return "Suficiente";
  return "Insuficiente";
}

/**
 * Las condiciones van de MAYOR a MENOR a propósito.
 * Si empezaras por `nota >= 5`, un 10 entraría ahí y nunca
 * llegaría a "Sobresaliente".
 */
const notas = [10, 8.5, 6.2, 5, 3.4, 11];
for (const nota of notas) {
  console.log(`${nota} -> ${calificar(nota)}`);
}

// 2. Convocatoria según el mes (switch)
function convocatoria(mes: number): string {
  switch (mes) {
    case 3:
      return "1ª evaluación parcial";
    case 6:
      return "Convocatoria ordinaria";
    case 9:
      return "Convocatoria extraordinaria";
    default:
      return "Sin convocatoria este mes";
  }
}

console.log(`Mes 6  -> ${convocatoria(6)}`);
console.log(`Mes 9  -> ${convocatoria(9)}`);
console.log(`Mes 12 -> ${convocatoria(12)}`);

// 3. Recuento de aprobados con un bucle y un contador
let aprobados = 0;
let suspensos = 0;

for (const nota of notas) {
  if (nota > 10) continue; // la nota inválida no cuenta
  nota >= 5 ? aprobados++ : suspensos++;
}
console.log(`Aprobados: ${aprobados} | Suspensos: ${suspensos}`);

// 4. Buscar al primero que saque un 10 y parar (break)
const notasGrupo = [4, 7, 10, 6, 10];
let posicionPrimerDiez = -1;

for (let i = 0; i < notasGrupo.length; i++) {
  if (notasGrupo[i] === 10) {
    posicionPrimerDiez = i;
    break; // encontrado: no hace falta seguir recorriendo
  }
}
console.log(
  posicionPrimerDiez !== -1
    ? `Primer 10 en la posición ${posicionPrimerDiez}`
    : "Nadie ha sacado un 10",
);

export {};
