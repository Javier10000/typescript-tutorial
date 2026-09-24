/**
 * EJERCICIO 01 — La ficha del módulo
 * Capítulos 01 (variables) · 02 (tipos) · 03 (operadores)
 */

// 1. Datos que NO cambian en todo el curso -> const
const NOMBRE_CENTRO = "IES Los Alcores";
const CICLO = "Desarrollo de Aplicaciones Multiplataforma";
const PLAZAS_TOTALES = 30;

// 2. Datos que sí cambian a lo largo del curso -> let
let matriculados = 26;

// 3. Las plazas libres se CALCULAN, no se guardan:
//    así nunca pueden quedar desincronizadas de `matriculados`.
console.log(`${NOMBRE_CENTRO} — ${CICLO}`);
console.log(`Matriculados: ${matriculados} de ${PLAZAS_TOTALES}`);
console.log(`Plazas libres: ${PLAZAS_TOTALES - matriculados}`);

// 4. Dos altas nuevas
matriculados += 2;
console.log(`Tras dos altas -> ${matriculados} matriculados, ${PLAZAS_TOTALES - matriculados} libres`);

// 5. Porcentaje de ocupación con 1 decimal
const ocupacion = (matriculados / PLAZAS_TOTALES) * 100;
console.log(`Ocupación: ${ocupacion.toFixed(1)} %`);

// 6. ¿Queda sitio? Operador ternario
console.log(matriculados < PLAZAS_TOTALES ? "Quedan plazas" : "Grupo completo");

/**
 * 7. Un objeto declarado con `const`:
 *    la REFERENCIA es constante, el CONTENIDO no.
 */
const grupo = { codigo: "DAM2", tutor: "Carlos Mendoza" };
grupo.tutor = "Ana Serrano"; // ✅ se modifica una propiedad
// grupo = { codigo: "DAM1", tutor: "Otro" };   // ❌ Error: Cannot assign to 'grupo'
console.log(`Grupo ${grupo.codigo}, tutor: ${grupo.tutor}`);

export {};
