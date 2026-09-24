/**
 * EJERCICIO 07 — Funciones del cuaderno
 * Capítulo 07 (opcionales, por defecto, rest, sobrecarga por unión)
 */

// 1. Parámetro por defecto: el peso del examen suele ser 60 %
function notaFinal(practica: number, examen: number, pesoExamen: number = 0.6): number {
  return practica * (1 - pesoExamen) + examen * pesoExamen;
}
console.log(`Peso por defecto -> ${notaFinal(8, 5).toFixed(2)}`);
console.log(`Examen al 40 %   -> ${notaFinal(8, 5, 0.4).toFixed(2)}`);

/**
 * 2. Parámetro OPCIONAL (?) frente a parámetro POR DEFECTO.
 *    Opcional  -> puede ser undefined, hay que contemplarlo.
 *    Por defecto -> nunca es undefined, ya tiene valor.
 *    Los dos van al final de la lista de parámetros.
 */
function actaAlumno(nombre: string, nota: number, observaciones?: string): string {
  const base = `${nombre}: ${nota}`;
  return observaciones !== undefined ? `${base} (${observaciones})` : base;
}
console.log(actaAlumno("Ana", 8.5));
console.log(actaAlumno("Luis", 4, "debe recuperar"));

// 3. Número variable de parámetros (rest): recoge todo en un array
function mediaDe(...notas: number[]): number {
  if (notas.length === 0) return 0; // sin notas, no hay media
  return notas.reduce((acc, n) => acc + n, 0) / notas.length;
}
console.log(`Media de 3 notas -> ${mediaDe(7, 8, 9).toFixed(2)}`);
console.log(`Media de 5 notas -> ${mediaDe(7, 8, 9, 4, 10).toFixed(2)}`);
console.log(`Media sin notas  -> ${mediaDe()}`);

/**
 * 4. Parámetro que admite varios tipos (unión).
 *    Antes de usar métodos propios de un tipo hay que hacer narrowing.
 */
function buscarAlumno(identificador: number | string): string {
  if (typeof identificador === "number") {
    return `Buscando por expediente nº ${identificador.toFixed(0)}`;
  }
  return `Buscando por nombre "${identificador.toUpperCase()}"`;
}
console.log(buscarAlumno(1024));
console.log(buscarAlumno("ana"));

// 5. Arrow function: la misma lógica en una línea
const estaAprobado = (nota: number): boolean => nota >= 5;
console.log(`¿5 aprueba? -> ${estaAprobado(5)} | ¿4.9? -> ${estaAprobado(4.9)}`);

export {};
