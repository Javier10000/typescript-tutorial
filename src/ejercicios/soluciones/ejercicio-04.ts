/**
 * EJERCICIO 04 — La lista de clase
 * Capítulo 05 (arrays: añadir, quitar, buscar)
 */

const clase: string[] = ["Ana", "Luis", "Marta"];
console.log("Inicial      ->", clase);

// 1. Dos matrículas nuevas al final
clase.push("Pedro", "Lucía");
console.log("Tras 2 altas ->", clase);

// 2. Un alumno se incorpora desde otro centro: entra el primero de la lista
clase.unshift("Carlos");
console.log("Tras traslado->", clase);

// 3. Una baja: se va el primero
const baja = clase.shift();
console.log(`Baja de ${baja} ->`, clase);

// 4. ¿Está matriculada Marta?
console.log("¿Está Marta?  ->", clase.includes("Marta"));
console.log("¿Está Sofía?  ->", clase.includes("Sofía"));

// 5. Posición en la lista (-1 si no está)
console.log("Posición de Lucía ->", clase.indexOf("Lucía"));
console.log("Posición de Sofía ->", clase.indexOf("Sofía"));

/**
 * 6. Lista alfabética SIN destruir el orden de matriculación.
 *    sort() modifica el array original, así que copiamos antes con spread.
 */
const alfabetico = [...clase].sort();
console.log("Alfabético   ->", alfabetico);
console.log("Original     ->", clase); // intacto

// 7. Nombres en mayúsculas para el listado oficial (map devuelve array nuevo)
console.log("Para el acta ->", clase.map((nombre) => nombre.toUpperCase()));

// 8. Nombres largos (filter)
console.log("Nombre > 4 letras ->", clase.filter((nombre) => nombre.length > 4));

// 9. Una sola cadena separada por comas
console.log("Listado: " + clase.join(", "));

export {};
