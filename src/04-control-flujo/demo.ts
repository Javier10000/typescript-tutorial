/**
 * 04 - ESTRUCTURAS DE CONTROL Y REPETICIÓN
 *
 * Ejecutar:  npm run play -- src/04-control-flujo/demo.ts
 */

// ---------- if / else if / else ----------
const nota: number = 7;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

// ---------- Operador ternario ----------
// condición ? valorSiCierto : valorSiFalso
const edad: number = 20;
console.log(edad >= 18 ? "Mayor de edad" : "Menor de edad");

// ---------- switch ----------
const dia: number = 3; // sin anotar, TS inferiría el literal `3` y los demás case sobrarían

switch (dia) {
  case 1:
    console.log("Lunes");
    break; // sin break cae al siguiente case (fallthrough)
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}

/**
 * Con "noFallthroughCasesInSwitch": true (activo en este proyecto y en Angular)
 * el compilador avisa si olvidas un `break` en un case con código.
 */

// ---------- for clásico ----------
for (let i = 1; i <= 5; i++) {
  console.log(`for -> ${i}`);
}

// ---------- for...of : recorre VALORES ----------
const frutas = ["manzana", "pera", "plátano"];
for (const fruta of frutas) {
  console.log(`for...of -> ${fruta}`);
}

// ---------- for...in : recorre CLAVES (índices o propiedades) ----------
for (const indice in frutas) {
  console.log(`for...in -> índice ${indice}`);
}

// ---------- while ----------
let contador = 0;
while (contador < 3) {
  console.log(`while -> ${contador}`);
  contador++;
}

// ---------- do...while: ejecuta al menos una vez ----------
let n = 10;
do {
  console.log(`do...while -> ${n}`);
  n++;
} while (n < 3); // la condición es falsa, pero el cuerpo ya se ejecutó una vez

// ---------- break y continue ----------
for (let i = 1; i <= 10; i++) {
  if (i === 4) continue; // salta esta vuelta
  if (i === 7) break; // sale del bucle
  console.log(`break/continue -> ${i}`);
}

export {};
