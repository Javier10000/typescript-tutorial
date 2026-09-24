/**
 * 03 - OPERADORES
 *
 * Ejecutar:  npm run play -- src/03-operadores/demo.ts
 */

// ---------- Comparación ----------
const cinco: number = 5;
const cuatro: number = 4;
const cincoTexto: unknown = "5";

// == compara solo el VALOR y convierte tipos por el camino
console.log("5 == '5'  ->", cinco == (cincoTexto as number)); // true
// === compara valor Y tipo: es el que debes usar siempre
console.log("5 === 5   ->", cinco === 5); // true
console.log("5 !== 4   ->", cinco !== cuatro); // true
console.log("3 < 7     ->", 3 < 7);

/**
 * Nota: si comparas dos literales fijos (5 === 4) el compilador avisa de que
 * la comparación no tiene sentido, porque ya sabe el resultado.
 */

// ---------- Lógicos ----------
const a = true;
const b = false;
console.log("a && b ->", a && b); // AND
console.log("a || b ->", a || b); // OR
console.log("!a     ->", !a); // NOT

// ---------- Aritméticos ----------
console.log("7 + 2 =", 7 + 2);
console.log("7 - 2 =", 7 - 2);
console.log("7 * 2 =", 7 * 2);
console.log("7 / 2 =", 7 / 2);
console.log("7 % 2 =", 7 % 2); // resto
console.log("7 ** 2 =", 7 ** 2); // potencia

// ---------- Asignación ----------
let contador = 10;
contador += 5;
contador -= 3;
contador *= 2;
contador /= 4;
console.log("contador ->", contador);
contador++;
console.log("contador++ ->", contador);

// ---------- Acceso y seguridad: ?. y ?? ----------
type Usuario = { nombre: string; direccion?: { ciudad: string } };

const u1: Usuario = { nombre: "Ana", direccion: { ciudad: "Cádiz" } };
const u2: Usuario = { nombre: "Luis" };

// Optional chaining `?.`: si `direccion` es undefined, devuelve undefined en vez de romper.
console.log("u1 ciudad ->", u1.direccion?.ciudad);
console.log("u2 ciudad ->", u2.direccion?.ciudad); // undefined

// Nullish coalescing `??`: valor por defecto solo si es null o undefined.
console.log("u2 ciudad ->", u2.direccion?.ciudad ?? "Sin ciudad");

// Cuidado: `||` también sustituye "" y 0, `??` no.
const cantidad = 0;
console.log("con || ->", cantidad || 99); // 99  (0 se considera falsy)
console.log("con ?? ->", cantidad ?? 99); // 0   (0 no es null ni undefined)

// ---------- Propagación (spread) y desestructuración ----------
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5]; // copia + añade
console.log("spread array ->", masNumeros);

const base = { nombre: "Ana", edad: 20 };
const ampliado = { ...base, ciudad: "Cádiz" }; // copia + añade propiedad
console.log("spread objeto ->", ampliado);

// Desestructuración de array
const [primero, segundo] = numeros;
console.log("desestructurando array ->", primero, segundo);

// Desestructuración de objeto (así se reciben props en Angular/JS moderno)
const { nombre: nombreUsuario, edad: edadUsuario } = base;
console.log("desestructurando objeto ->", nombreUsuario, edadUsuario);

export {};
